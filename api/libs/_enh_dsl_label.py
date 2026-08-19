from constants import dsl_version

def label() -> str:
    v = getattr(dsl_version, 'CURRENT_VERSION', 'unknown')
    return f'dsl-{v}'
