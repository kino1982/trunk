from module import str_mod as sm

str = "777"


print(sm.zero_pad(str,10))

tmp_str = sm.zero_pad(str,5)
print(sm.slice_str(tmp_str,2,4)) 
