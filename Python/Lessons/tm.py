import time
import sys


try:
    while (True):
        print(time.time())
        time.sleep(1.0)
except BaseException as err:
    print(err)
    print("Exit","\n\r")
    sys.exit()