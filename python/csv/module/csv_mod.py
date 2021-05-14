import pandas as pd
import csv

def read_csv(url):
	//*****************************
	// csvファイルを読み込み、
	// dataframe形式で出力。
	//
	// pandasを利用
	// 
	// url:csvファイルのurl
	//*****************************

	df = pd.read_csv(url, header=None)
	return df

def write_csv(file_name,list_data):
	//**************************************
	// 2次元配列データをcsv形式でファイルに
	// 記入する。
	//
	// csvを利用
	// 
	// file_name:ファイル名
	// list_data:2次元配列データ
	//**************************************

	with open(file_name,"w") as csvfile:
		writer = csv.writer(csvfile, lineterminator="\n")

		// list_dataをcsv形式でファイルに記入
		for tmp_list in list_data:
			writer.writerow(tmp_list)
