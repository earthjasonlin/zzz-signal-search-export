# pylint: disable=C0116, C0103, C0201
"""Download and process data from the Hakushin API"""

import json
import requests
from opencc import OpenCC

# 初始化 OpenCC 转换器
cc = OpenCC('s2t')

# 获取 JSON 数据
weapon_url = 'https://api.hakush.in/zzz/data/weapon.json'
character_url = 'https://api.hakush.in/zzz/data/character.json'
bangboo_url = 'https://api.hakush.in/zzz/data/bangboo.json'
version_url = 'https://api.hakush.in/zzz/new.json'

# 语言映射配置
language_map = {
    "zh-cn": "CHS",
    "zh-tw": "CHS",  # 简体转繁体
    "en-us": "EN",
    "ja-jp": "JA",
    "ko-kr": "KO"
}

# 类型映射配置
type_map = {
    "weapon": {"zh-cn": "音擎", "zh-tw": "音擎", "en-us": "W-Engines", "ja-jp": "音動機", "ko-kr": "W-엔진"},
    "character": {"zh-cn": "代理人", "zh-tw": "代理人", "en-us": "Agents",
                  "ja-jp": "エージェント", "ko-kr": "에이전트"},
    "bangboo": {"zh-cn": "邦布", "zh-tw": "邦布", "en-us": "Bangboo", 
                "ja-jp": "ボンプ", "ko-kr": "「Bangboo」"}
}

def fetch_json(url):
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    return response.json()

def transform_data(data, item_type):
    transformed = {lang: {} for lang in language_map.keys()}
    for id_, item in data.items():
        for lang, key in language_map.items():
            name = item[key] if lang != 'zh-tw' else cc.convert(item['CHS'])
            transformed[lang][id_] = {
                "name": name,
                "item_type": type_map[item_type][lang],
                "rank_type": item['rank']
            }
    return transformed

def main():
    try:
        weapon_data = fetch_json(weapon_url)
        character_data = fetch_json(character_url)
        bangboo_data = fetch_json(bangboo_url)
        version_data = fetch_json(version_url)

        transformed_data = {lang: {} for lang in language_map.keys()}

        transformed_data["version"] = version_data["version"]

        weapon_transformed = transform_data(weapon_data, "weapon")
        character_transformed = transform_data(character_data, "character")
        bangboo_transformed = transform_data(bangboo_data, "bangboo")

        for lang in language_map.keys():
            transformed_data[lang].update(weapon_transformed[lang])
            transformed_data[lang].update(character_transformed[lang])
            transformed_data[lang].update(bangboo_transformed[lang])

        with open('./src/idJson.json', 'w', encoding='utf-8') as f:
            json.dump(transformed_data, f, ensure_ascii=False, indent=2)

        print("Data successfully transformed and saved")

    except requests.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    main()
