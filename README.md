# ATLS-4630-Assignment03
## Elon Musk Article API
### Reflection
This API was super funny, so I was determined to get it working. Although given free API resource claimed not to use CORS, I encountered some issues with it and ended up using the AllOrigins API to bypass those restrictions. Additionally, I faced challenges fetching a new random article, which I later discovered was related to caching. By setting the 'no-store' option, I ensured the browser wouldn't use the cache and would instead make a fresh request each time. While caching remains a somewhat confusing topic that I’d like to explore further, overcoming these challenges proved to be a valuable learning experience.
