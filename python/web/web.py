from module import web_mod as wm

url_str = "https://nlp100.github.io/data/jawiki-country.json.gz"
save_name_str = "test.json.gz"

wm.get_web_data(url_str, save_name_str)


