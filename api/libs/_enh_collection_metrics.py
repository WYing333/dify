from libs import collection_utils

def symbol_count() -> int:
    return len([n for n in dir(collection_utils) if not n.startswith('_')])

def has(name: str) -> bool:
    return hasattr(collection_utils, name)
