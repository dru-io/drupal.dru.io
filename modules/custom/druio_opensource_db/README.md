# Dru.io — OpenSource database

This module created database export without sensitive data.

The logic is simple, we create second database table and enter settings for it.
Then we export original database, import to the new one, clean up data in it by
removing sensitive information such as user emails, password hashes, SMTP settings
and other information that can compromise personal data of people and server. On
the other side, this is fully the same and actual database form production with
all users and content.
