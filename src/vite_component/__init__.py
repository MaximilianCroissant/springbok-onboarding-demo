import os
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "vite_app",
        url="http://localhost:5173",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to the component's
    # build directory:
    # parent_dir = os.path.dirname(os.path.abspath(__file__))
    # build_dir = os.path.join(parent_dir, "frontend/build")
    # _component_func = components.declare_component("vite_app", path=build_dir)
    _component_func = components.declare_component(
    "vite_app",
    url="https://onboarding-demo-frontend.vercel.app",
    )


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
def vite_app(data=None, key=None):

    component_value = _component_func(data=data, key=key)
    return component_value
