My attempt at getting Tableau embeds to work with Okta OpenID connect auth

Instructions
==

Just clone it, cd into it, add your account information in okta widget and your embed urls for tableau. Then npm install it, and npm start it.

*** Current State

It can successfully login to Okta. But it can not somehow get the SAML bridge to Tableau reports to work.

Maybe the correct approach should be to just directly authenticate at Tableau but by using Okta as the auth provider. It needs to be investigated in Tableau Online account's settings.
