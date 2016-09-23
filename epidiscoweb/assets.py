# -*- coding: utf-8 -*-
"""Application assets."""
from flask_assets import Bundle, Environment

js = Bundle(
  './js/dist/bundle.js',
  output='public/js/bundle.js'
)

assets = Environment()
assets.register('js_all', js)
