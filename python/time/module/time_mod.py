import datetime as dt

def add_time(time_str,hour_num):
    #***************************************************
    # yyyymoddhhmi型の時刻表記に指定した時間を加減して
    # 再びyyyymoddhhmiにして返す
    #
    # time_str:yyyymoddhhmi型の時刻表記文字列
    # hour_num:加減する時間
    #***************************************************
    
    yyyy = int(time_str[0:4])
    mo = int(time_str[4:6])
    dd = int(time_str[6:8])
    hh = int(time_str[8:10])
    mi = int(time_str[10:12])
    
    #datetimeオブジェクトを作る
    x = dt.datetime(yyyy,mo,dd,hh,mi)
    
    #hour_numを加算
    y = x + dt.timedelta(hours = hour_num)
    
    #文字列型に変換
    y_str = str(y)
    
    #yyyymoddhhmiの文字列に変換
    output_time_str = y_str[0:4] + y_str[5:7] + y_str[8:10] + y_str[11:13] + y_str[14:16]
    
    return output_time_str
