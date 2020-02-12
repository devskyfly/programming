'''
Created on Feb 25, 2019

@author: devskyfly
'''

import matplotlib.pyplot as plt
import math

x=[0.1,0.2,0.3,0.5,0.8,1];
y=[];

for it in x:
    y.append(math.sin(it));



plt.plot(x,y)
plt.ylabel('some numbers')
plt.show()