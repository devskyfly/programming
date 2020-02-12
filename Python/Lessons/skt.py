import socket

s = socket.socket()
access = ('yandex.ru',80)
s.connect(access)
s.send("GET / HTTP/1.0\n\n".encode())
print(s.recv(200))
s.close()