import numpy as np

a = np.array([[0,1,2],[3,4,5]])

print(a)

#2より大きい要素を1に、それ以外の要素を0に置換する
b = np.where(a > 2, 1, 0)

c = np.array([[0,0,0],[0,0,0]])

#ｂ、ｃの要素ごとに比較して最大値を抜き出して配列を作る
d = np.maximum(b,c)

print(d)