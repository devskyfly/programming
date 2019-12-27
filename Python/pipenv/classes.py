import item
import container

cnt1 = container.Container()
for itr in range(1, 10):
    itm = item.Item("val"+ str(itr))
    cnt1.addItem(itm)

cnt2 = container.Container()
item.Item("val"+ str(itr+1))
cnt2.addItem(itm)

print(__name__)