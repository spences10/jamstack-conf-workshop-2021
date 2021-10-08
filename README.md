# Building with SvelteKit and GraphQL Jamstack Conf 2021

Coursework for the workshop held 2021-10-07

## Getting started

Goto [GraphCMS.com] and sign up for a new account ot log in if you
have an existing account.

Scroll down to Create a new project and select blog:

![Create a new project]

Click on the + Create project button:

![create new blog project]

Name the project and select a CDN for it to reside in.

## Environment variables

The `sample.env` file details uses the environment viarables needed,
this is the `GRAPHQL_ENDPOINT` and the `POST_TOKEN`.

Copy the file to create your one one:

```bash
cp sample.env .env
```

Get your GraphCMS project token from Settings > API Access section:

![GraphCMS API Access Token]

Copy the Content API URL to the `GRAPHQL_ENDPOINT` variable in the
`.env` file:

![Content API URL]

## Using a mutation

To use a mutation to upload a post from the client there needs to be
some changes to the blog schema to accomplish this. As the template
uses RichText for the post content there and I don't want to go into
detail on how to convert Markdown content from a form to RichText AST
I'm going to replace the RichText field with a Markdown field.

In the project schema for the Post model I'm going to create a new
Markdown Content field type.

![add markdown field]

If you're following along and want to keep the existing content you
should copy this over in the Content section of the project before
deleting the RichText field.

![delete content field]

## Permanent Auth Token

In the settings panel select the Permanent Auth Tokens section, +
Create token, give the token a name and check Draft for the default
stage. Click Create & configure permissions.

![create permanent auth token]

Scroll down to the Content API Permissions section and select No, I'll
configure custom permissions, then + Create permission.

In the dialogue select Model All and check the Read and Create Rules,
then Create.

![create permission]

Scroll back to the top of the page and copy the token to you clipboard
and add that as the `POST_TOKEN` in the `.env` file.

Starting the dev server now go to the `add-post` route and create a
new post!

After submitting check the GraphCMS project Post, Content section for
a new Draft of the post submitted. If you want to see it in the client
project select the post and change the stage from Draft to Published.

<!-- Links -->

[graphcms.com]: https://graphcms.com/

<!-- Images -->

[create a new project]:
  ./readme-assets/create-new-graphcms-project.png
[create new blog project]: ./readme-assets/create-new-blog-project.png
[graphcms api access token]: ./readme-assets/api-access-settings.png
[content api url]: ./readme-assets/content-api-url.png
[add markdown field]: ./readme-assets/add-markdown-field.png
[delete content field]: ./readme-assets/delete-content-field.png
[create permanent auth token]: ./readme-assets/create-new-token.png
[create permission]: ./readme-assets/create-permissions.png
