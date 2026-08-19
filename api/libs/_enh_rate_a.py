from libs._enh_rate_b import window_size

def rate_for(n: int) -> float:
    return float(n) / max(1, window_size())
