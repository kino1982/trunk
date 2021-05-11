#@@@@@@@@@@@@@@@@@@@@@@@@@@
#@@@@@@@@@@@@@@@@@@@@@@@@@@
# jsonファイルを読み込む
#
#@@@@@@@@@@@@@@@@@@@@@@@@@@
#@@@@@@@@@@@@@@@@@@@@@@@@@@

import json

json_open = open('./hoge.json', 'r')

json_load = json.load(json_open)

print(json_load)
