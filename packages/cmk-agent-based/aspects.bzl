load("@pip_types//:types.bzl", "types")
load("@rules_mypy//mypy:mypy.bzl", "mypy")
load("@cmk_requirements//:requirements.bzl", "requirement")

mypy_aspect = mypy(
    mypy_cli = "@@//packages/cmk-agent-based:mypy_cli",
    mypy_ini = "@@//packages/cmk-agent-based:pyproject.toml",
    types = types,
)
