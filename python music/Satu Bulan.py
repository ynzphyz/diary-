import time

def animate_text(text, color, char_delay, pause_delay):
    if color == "red bold":
        print("\033[91m", end='')
    elif color == "white":
        print("\033[0m", end='')
    
    for char in text:
        print(char, end='', flush=True)
        time.sleep(char_delay)
    print()
    time.sleep(pause_delay)
    print("\033[0m", end='')

lyrics = [
    
    ("Sudah adakah ", "white", 0.1, 0.5),
    ("Yang gantikanku", "red bold", 0.1, 1.5),
    ("Yang khawatirkanmu,", "white", 0.1, 0.9),
    ("Setiap waktu", "red bold", 0.1, 2.0),
    ("Yang cerita tentang apa pun sampai hal-hal", "white", 0.1, 0.7),
    ("tak perlu", "red bold", 0.1, 0.5),
    ("Kalau bisa jangan,buru-buru", "white", 0.1, 2.6),
    ("Kalau bisa jangan ada dulu", "red bold", 0.1, 0.5)

]

for text, color, char_delay, pause_delay in lyrics:
    animate_text(text, color, char_delay, pause_delay)