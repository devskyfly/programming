
#Boolean
tr = True
fl = False

print(tr and fl)
print(tr or fl)
print(tr + 0)
print(fl + 1)

#Numbers
intg = 1
print(type(intg))
flt = 0.5
print(type(flt))

val = 2 * 0.5
print(val)

val = 4/2
print(val)

val = 5/2
print(val)

val = 5/2.0
print(val)

#Strings

str1 = "string"
print(id(str1))
str2 = "string"
print(id(str2))
print(type(str1))

lngStr = "long string to splice";
firstPartStr = lngStr[0:4];

print(firstPartStr)

#Bytes

#Lists -arrays for arbitararily typed objects in an orderd sequence
#Is not fix size

lst = ["str1", "str2", "str3", 1, 2]

for itm in lst:
    print(type(itm))

print(lst)

lst.append(3)
print(lst)

print(lst[0:3])

#Tuples


