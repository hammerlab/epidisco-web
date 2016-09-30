# -*- coding: utf-8 -*-
"""Application assets."""
from flask_assets import Bundle, Environment

# These are all relative to static
js = Bundle(
  './js/bundle.js',
  output='public/js/bundle.js'
)

assets = Environment()
assets.register('js_all', js)
