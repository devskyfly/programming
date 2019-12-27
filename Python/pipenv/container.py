class Container:
    list = []

    def __init__(self):
        pass

    def addItem(self, item):
        Container.list.append(item)

    def print(self):
        for itm in self.list:
            print(itm.val)