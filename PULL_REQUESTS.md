# 📚 How to contribute

> [!NOTE]
> This guide is about creating pull requests with changes to the YAML database.
> If you don't know how to do that, how to use Git/Github, don't have an account etc.
> look into [other possible options](README.md#-how-do-i-suggest-new-stuff).

## 📕 Contribution rules

-   Do not edit other people's submissions without first creating an issue regarding it
-   Do not create duplicate tags or authors, first search if the tag/author exists and reuse it
-   If able, run `yarn format` before committing to auto-fix code style in files
-   Add descriptive messages to your commits, avoid inappropriate commit messages

## 📂 Content database structure

Basically, the content database is formed from three YAML files found in [/content](content/)
folder &mdash; `content.yml`, `creators.yml` and `tags.yml`.

### 📝 content.yml

In `content.yml`, you define new _content_ items. It can be either spritepack or submod,
or, in future, it could be something else entirely.

Here's an example of the content:

```yaml
- name: Say Something
  description: Ask your Monika to say something and pose for you~
  creators: [friends_of_monika]
  tags: [submod, tool, new_mechanics]
  links:
      download: https://github.com/friends-of-monika/mas-saysomething/releases/latest
      issues: https://github.com/friends-of-monika/mas-saysomething/issues
      support: https://mon.icu/discord
  integrations:
      github:
          owner: friends-of-monika
          repo: mas-saysomething
          downloads: true
          latestUpdate: true
          latestVersion: true
```

#### 🏷️ name

This is the name of the content. There isn't a hard limit on how long it can be,
but for sake of layout and user's convenience, try to keep it short.

Additionally, please _do not_ use 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 (fraktur, if this doesn't render for you)
or alike _a e s t h e t i c_ fonts.

#### 🏷️ description

This is the description of the content. This should be descriptive enough,
searchable, and, like `name`, not overly long. Again, don't use aesthetic fonts.

#### 🏷️ creators

This is an array of authors (even if there is just one) who have created this
content. Notice that the list of authors features _references_ rather than actual
names. We'll get to it further on.

#### 🏷️ tags

This is an array of tags that describe this content. Like `creators`, it is a
list of references rather than actual label names.

First tag in the list should _always_ be the category tag (see futher) &mdash;
e.g. `submod`, `spritepack` or whatever else added in future.

#### 🏷️ links

This section defines content links. There are several types of links, but at
least `download` is mandatory and must be present.

There are the following link types:

-   `download` &mdash; defines download link, this link should lead to download
    page for this content
-   `issues` &mdash; defines issue tracker link, this link should lead to Github
    issues tab or to the place where users can report bugs at
-   `support` &mdash; defines support link, this should lead somewhere for people
    to go to get help with installation or other possible questions (like FAQ)

More link types can be added in future.

#### 🏷️ integrations

This section defines various content integrations. At the moment, only Github
is supported.

#### 🔗 integrations ⟶ github

This section configures Github integration for this content. This works great
with contents hosted on Github, as it allows users to see the latest version
and downloads count for the submod, which then can possibly be used in filtering.

#### ⚙️ integrations ⟶ github ⟶ owner

This is the owner of the repository this content is hosted at.

#### ⚙️ integrations ⟶ github ⟶ owner

This is the name of the repository this content is hosted at.

#### ⚙️ integrations ⟶ github ⟶ downloads

Can take either `true` or `false`, toggles downloads counter.

#### ⚙️ integrations ⟶ github ⟶ latestUpdate

Can take either `true` or `false`, toggles latest update display.

#### ⚙️ integrations ⟶ github ⟶ latestVersion

Can take either `true` or `false`, toggles latest version display.

### 📝 creators.yml

In `creators.yml`, you define content authors, which can later be referenced
in `authors` list of the content.

Each section in this file is a new author, with its own ID of your choice (but
remember to first search for an existing author with this name) as its key.

Here's an example of the creator entry:

```yaml
friends_of_monika:
    name: Friends of Monika
    links:
        - https://github.com/friends-of-monika
        - https://mon.icu/discord
```

#### 🏷️ name

This is the name of the author, displayed to the user. There isn't a hard limit
on its length, but try to keep it within 16-24 characters max. Like with content
name and description, do not use aesthetic fonts.

#### 🏷️ links

This is an optional section with links list. This is currently unused, but may
be added later and available to the user.

### 📝 tags.yml

In `tags.yml`, you define content tags and categories (special type of tags).
Similar to creators, tags can be referenced in content entries.

Each section in this file is a new tag, with its own ID of your choice as
a key. Please do not create duplicate tags.

Here's an example of a tag entry:

```yaml
submod:
    name: 📦 Submod
    color: "#facc15"
    category: true
```

#### 🏷️ name

This is the name of the label, visible to the user. Try to keep it rather short,
and do not use aesthetic fonts.

#### 🏷️ color

This is a CSS color that will be applied to the tag on the website. While this
technically can be of any acceptable CSS syntax for `color: ` property, for
consistency please always use hex color codes.

#### ⚙️ category

This optiona parameter allows you to mark the tag as a category, a special type
of tag that separates submods from spritepacks and other sort of content. You
can omit it entirely, it is `false` by default.

Please do not create new category tags without creating an issue about it first.
