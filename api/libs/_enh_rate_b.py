from libs._enh_rate_a import rate_for

def window_size() -> int:
    return 60

def normalized(n: int) -> float:
    return rate_for(n) * window_size()
