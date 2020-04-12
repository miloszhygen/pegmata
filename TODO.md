


::: NEXT
- use scafolders/gatsby_sanity_figma project to scaffold
- use the schemas AND deskStructure inside scafolders/gatsby_sanity_figma project to copy into the scaffolder logic sanityScaffolder.js
- stitch togheter the sanity and gatsby scaffolder in the build.js
  - make it work
- delete the sanityContent folder?
- delete TEST_2 folder?
- make it possible to select project name





# SANITY
0. check who is logged in to sanity
0. check if studio already exists
0. check node version

0. get project name
0. project public/private


1. create studio with given project name
x 2. create develop dataset

x 3. update package json inside studio to also have env.development.dataset = develop
x 3. A) install react-icons

x 4. add schemas - from default schema folder
  x - site settings
  x - articles
-5. populate articles and settings
x 6. make sure web has the project id

7. make sure that the sanity project is build on root of selected folder and not in TEST folder



## Sanity TODO
- create a sanity project that can be run AND make sure that the schemas folder is copied when the sanity project is scaffolded




# TODO
- add possibility to give project name
- have an intro text explaining that the project name also is going to be the sanity project name, AND that the user should check who is logged in to sanity
- add git ignore
- add checks to the scaffolder
  0. check who is logged in to sanity
  0. check if studio already exists
  0. check node version
  0. get project name
  0. project public/private
- make build script work woth sanity scaffolder

- add info when finished scaffolding sanity about stuff
  - remember to publish siteSettings and add an article to test the gatby build

- add to package json in sanity
    "graphql-deploy": "sanity graphql deploy --playground",
    "graphql-deploy:local": "sanity graphql deploy --dataset development --playground",
    "sanity-deploy": "sanity deploy",
    - see somm project

- create the perfect gatsby setup with sanity inside the scaffolders folder
  - clean the one from Y-project
  - is it possible to create a sanity project without having to do a sanity init?
- add storybook to the project
- make some storybook and figma love
- improve the build script to scaffold the selected project type
  - we already have some logic for this


- add live preview?


# Scaffold structire

procjetName
  studio
  web
  .gitIgnore
  package.json