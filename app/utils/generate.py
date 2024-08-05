import random
from datetime import datetime


def get_random_color() -> str:
    letters = '0123456789ABCDEF'
    color = "#"
    for i in random.choices(letters, k=6):
        color += i
    
    return color


def get_current_timestamp() -> int:
    dt = datetime.now()
    timestamp = dt.timestamp()
    
    return round(timestamp)
