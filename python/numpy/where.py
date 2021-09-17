import numpy as np

a = np.array([[0,1,2],[3,4,5]])

print(a)

#2より大きい要素を1に、それ以外の要素を0に置換する
b = np.where(a > 2, 1, 0)

print(b)