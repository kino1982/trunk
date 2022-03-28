#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# 風に関するデータの計算モジュール
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

#########################
# import
#########################
import numpy as np

#########################
# 関数
#########################

def calc_conv(x_wind_ary, y_wind_ary, dx, dy):
    ###########################################
    # 風の収束の格子点値を計算する。
    # 領域の端x=0,x=x_wind_ary.size - 1,y=0,y=y_wind_ary.size
    # の格子は計算しない。
    #
    # x_wind_ary:東西方向の風の2次元データ
    # y_wind_ary:南北方向の風の2次元データ
    # dx:x方向の格子間距離
    # dy:y方向の格子間距離
    # 
    # conv_ary : 計算した風の収束の配列データ
    ###########################################
    
    x_y_ary = x_wind_ary.shape
    
    ii_max = x_y_ary[0]
    jj_max = x_y_ary[1]
    
    # 0行列を作る
    conv_ary = np.zeros((ii_max, jj_max))
    
    for jj in range(1,jj_max-1):
        for ii in range(1,ii_max-1):
            conv_ary[ii][jj] = (x_wind_ary[ii+1][jj] - x_wind_ary[ii-1][jj])/(2*dx) + (y_wind_ary[ii][jj+1] - y_wind_ary[ii,][jj-1])/(2*dy)
            
    return conv_ary

def calc_rot(x_wind_ary, y_wind_ary, dx, dy):
    ###########################################
    # 渦度の格子点値を計算する。
    # 領域の端x=0,x=x_wind_ary.size - 1,y=0,y=y_wind_ary.size
    # の格子は計算せず、0とする
    #
    # x_wind_ary:東西方向の風の2次元データ
    # y_wind_ary:南北方向の風の2次元データ
    # dx:x方向の格子間距離
    # dy:y方向の格子間距離
    # 
    # rot_ary : 計算した風の渦度の配列データ
    ###########################################
    
    shape_ary = x_wind_ary.shape
    
    ii_max = shape_ary[0]
    jj_max = shape_ary[1]
    
    # 0行列を作る
    rot_ary = np.zeros((ii_max, jj_max))
    
    for jj in range(1,jj_max-1):
        for ii in range(1,ii_max-1):
            rot_ary[ii][jj] = (y_wind_ary[ii+1][jj] - y_wind_ary[ii-1][jj])/(2*dx) - (x_wind_ary[ii][jj+1] - x_wind_ary[ii,][jj-1])/(2*dy)
            
    return rot_ary