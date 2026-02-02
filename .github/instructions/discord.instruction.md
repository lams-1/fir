# Discord documentation

### RPC Subscribe Speaking Start Arguments

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeSpeakingStartArgs%3AInterface

Defines the structure for arguments used when subscribing to events related to a user starting to speak in a voice channel.

```APIDOC
## interface RPCSubscribeSpeakingStartArgs

### Description
Arguments for subscribing to speaking start events in Discord RPC.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Properties
- **channel_id** (Snowflake) - Required - The ID of the channel to listen for speaking start updates.
```

---

### ClientApplicationInstallParams Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplicationInstallParams%3AInterface

Details the parameters for installing a Discord application, including permissions and scopes.

````APIDOC
## Interface: ClientApplicationInstallParams

### Description
This interface defines the parameters required for installing a Discord application, specifying the permissions and scopes that will be requested.

### Properties

#### permissions
- **permissions** (PermissionsBitField) - Required - Permissions that will be requested for the integrated role.

#### scopes
- **scopes** (OAuth2Scopes[]) - Required - Scopes that will be set upon adding this application.

### Request Example
```json
{
  "permissions": "ADMINISTRATOR",
  "scopes": ["identify", "email"]
}
````

### Response

#### Success Response (200)

- **(No specific success response body defined for this interface, as it describes installation parameters)**

#### Response Example

```json
{
  "message": "Application installation parameters processed successfully."
}
```

````

--------------------------------

### APIApplicationInstallParams Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIApplicationInstallParams%3AInterface

Details the structure of parameters used for installing an application, including permissions and scopes.

```APIDOC
## Interface APIApplicationInstallParams

### Description
Represents the parameters required for installing an application, specifying the permissions and scopes the application will have.

### Properties

#### permissions
- **permissions** (Permissions) - Required - The permissions required for the application.

#### scopes
- **scopes** (OAuth2Scopes[]) - Required - The OAuth2 scopes the application will request.

### Request Example
```json
{
  "permissions": "ADMINISTRATOR",
  "scopes": ["identify", "guilds"]
}
````

### Response

#### Success Response (200)

- **permissions** (Permissions) - The granted permissions for the application.
- **scopes** (OAuth2Scopes[]) - The granted OAuth2 scopes for the application.

#### Response Example

```json
{
  "permissions": "ADMINISTRATOR",
  "scopes": ["identify", "guilds"]
}
```

````

--------------------------------

### typingStart

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Emitted whenever a user starts typing in a channel.

```APIDOC
## typingStart

### Description
Emitted whenever a user starts typing in a channel.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **typing** (Typing) - The typing indicator object.

#### Response Example
None
````

---

### Collection: findKey() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3AClass

Provides an example of finding the key of the first element in a Collection that satisfies a condition, akin to Array.findIndex().

```javascript
collection.findKey((user) => user.username === "Bob");
```

---

### typingStart

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Emitted whenever a user starts typing in a channel.

```APIDOC
## typingStart

### Description
Emitted whenever a user starts typing in a channel.

### Method
EVENT

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A
```

---

### StartThreadOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/StartThreadOptions%3AInterface

Documentation for the `StartThreadOptions` interface, used when starting a new thread on a message.

```APIDOC
## Interface: StartThreadOptions

### Description
Options for starting a thread on a message.

### Properties

#### autoArchiveDuration
- **autoArchiveDuration** (ThreadAutoArchiveDuration) - Optional - The amount of time after which the thread should automatically archive in case of no recent activity. Defaults to the channel's default auto-archive duration.

#### name
- **name** (string) - Required - The name of the new thread.

#### rateLimitPerUser
- **rateLimitPerUser** (number) - Optional - The rate limit per user (slowmode) for the thread in seconds.

#### reason
- **reason** (string) - Optional - Reason for creating the thread.
```

---

### Fetch Messages Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/DMMessageManager%3AClass

Demonstrates how to fetch messages from a channel using the DMMessageManager's fetch method. It shows examples of fetching a single message, fetching multiple messages with options like limit and cache, fetching around a specific message, and filtering messages by author.

```javascript
// Fetch a message
channel.messages
  .fetch("99539446449315840")
  .then((message) => console.log(message.content))
  .catch(console.error);
```

```javascript
// Fetch a maximum of 10 messages without caching
channel.messages
  .fetch({ limit: 10, cache: false })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
```

```javascript
// Fetch a maximum of 10 messages without caching around a message id
channel.messages
  .fetch({ limit: 10, cache: false, around: "99539446449315840" })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
```

```javascript
// Fetch messages and filter by a user id
channel.messages
  .fetch()
  .then((messages) =>
    console.log(
      `${
        messages.filter((message) => message.author.id === "84484653687267328")
          .size
      } messages`,
    ),
  )
  .catch(console.error);
```

---

### Install discord.js using Package Managers

Source: https://discord.js.org/docs/index

Installs the discord.js library using various Node.js package managers. Ensure you have Node.js 22.12.0 or a newer version installed.

```bash
npm install discord.js
```

```bash
yarn add discord.js
```

```bash
pnpm add discord.js
```

```bash
bun add discord.js
```

---

### Shard Fetch Client Value Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Shard%3AClass

An example demonstrating how to use the `fetchClientValue` method to retrieve the total number of guilds a shard is connected to and log it to the console. It includes error handling for the Promise.

```javascript
shard
  .fetchClientValue("guilds.cache.size")
  .then((count) => console.log(`${count} guilds in shard ${shard.id}`))
  .catch(console.error);
```

---

### GET /channels/{thread.id}/thread-members & GET /channels/{thread.id}/thread-members/{user.id} & PUT /channels/{thread.id}/thread-members/@me & PUT /channels/{thread.id}/thread-members/{user.id} & DELETE /channels/{thread.id}/thread-members/@me & DELETE /channels/{thread.id}/thread-members/{user.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Manages thread members. This endpoint allows you to get, add, or remove members from a thread.

````APIDOC
## GET /channels/{thread.id}/thread-members & GET /channels/{thread.id}/thread-members/{user.id} & PUT /channels/{thread.id}/thread-members/@me & PUT /channels/{thread.id}/thread-members/{user.id} & DELETE /channels/{thread.id}/thread-members/@me & DELETE /channels/{thread.id}/thread-members/{user.id}

### Description
Manages thread members.

### Method
GET, PUT, DELETE

### Endpoint
/channels/{thread.id}/thread-members, /channels/{thread.id}/thread-members/{user.id}

### Parameters
#### Path Parameters
- **threadId** (Snowflake) - Required - The ID of the thread.
- **userId** (Snowflake | '@me') - Optional - The ID of the user.

### Response
#### Success Response (200) (GET - /channels/{thread.id}/thread-members/{user.id})
- **thread_member** (object) - The thread member object.

#### Response Example (GET - /channels/{thread.id}/thread-members/{user.id})
```json
{
  "user_id": "user_id",
  "join_timestamp": "timestamp"
}
````

#### Success Response (200) (GET - /channels/{thread.id}/thread-members)

- **thread_members** (array) - An array of thread member objects.

#### Response Example (GET - /channels/{thread.id}/thread-members)

```json
[
  {
    "user_id": "user_id",
    "join_timestamp": "timestamp"
  }
]
```

#### Success Response (204) (PUT & DELETE)

- No content.

#### Response Example (PUT & DELETE)

{}

````

--------------------------------

### Collection: each() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3AClass

Demonstrates iterating over each item in a Collection and performing an action, with chaining capabilities for further operations.

```javascript
collection
 .each(user => console.log(user.username))
 .filter(user => user.bot)
 .each(user => console.log(user.username));
````

---

### GatewayTypingStartDispatchData

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayTypingStartDispatchData%3AInterface

This interface represents the data payload for the Typing Start event in the Discord Gateway API. It includes information about the channel, guild (if applicable), the member who started typing, a timestamp, and the user ID.

````APIDOC
## GatewayTypingStartDispatchData

### Description
Represents the data payload for the Typing Start event in the Discord Gateway API.

### Method
Gateway Event

### Endpoint
N/A (Gateway Event)

### Properties
#### channel_id
- **channel_id** (Snowflake) - Required - The id of the channel where typing started.

#### guild_id
- **guild_id** (Snowflake) - Optional - The id of the guild where typing started (if applicable).

#### member
- **member** (APIGuildMember) - Optional - The member object of the user who started typing, if the event occurred in a guild.
  See also: https://discord.com/developers/docs/resources/guild#guild-member-object

#### timestamp
- **timestamp** (number) - Required - The Unix timestamp (in seconds) indicating when the user started typing.

#### user_id
- **user_id** (Snowflake) - Required - The id of the user who initiated the typing indicator.

### Response Example
```json
{
  "channel_id": "123456789012345678",
  "guild_id": "876543210987654321",
  "member": {
    "user": {
      "id": "112233445566778899",
      "username": "ExampleUser",
      "discriminator": "1234",
      "avatar": "a_avatar_hash"
    },
    "roles": ["role_id_1", "role_id_2"],
    "nick": "ExampleNickname",
    "joined_at": "2023-01-01T00:00:00.000Z",
    "premium_since": null,
    "deaf": false,
    "mute": false
  },
  "timestamp": 1678886400,
  "user_id": "112233445566778899"
}
````

````

--------------------------------

### LimitedCollection.each() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Provides an example of iterating over a LimitedCollection using the each() method, similar to Array.forEach(). It allows chaining with other collection methods.

```javascript
collection
 .each(user => console.log(user.username))
 .filter(user => user.bot)
 .each(user => console.log(user.username));

````

---

### Example: Fetching Guild Count Across Shards (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ShardingManager%3AClass

An example demonstrating how to use `fetchClientValues` to retrieve the 'guilds.cache.size' property from all shards and sum them up. This is useful for monitoring bot activity across the sharded instances.

```javascript
manager
  .fetchClientValues("guilds.cache.size")
  .then((results) =>
    console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`),
  )
  .catch(console.error);
```

---

### GET /guilds/templates/{template.code} & POST /guilds/templates/{template.code}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves or creates a guild template. This endpoint allows you to get information about a template or create a guild from a template.

````APIDOC
## GET /guilds/templates/{template.code} & POST /guilds/templates/{template.code}

### Description
Retrieves or creates a guild template.

### Method
GET, POST

### Endpoint
/guilds/templates/{template.code}

### Parameters
#### Path Parameters
- **code** (string) - Required - The template code.

#### Request Body (POST)
- **name** (string) - Required - The name of the template.

### Request Example (POST)
```json
{
  "name": "Template Name"
}
````

### Response

#### Success Response (200) (GET)

- **template** (object) - The template object.

#### Response Example (GET)

```json
{
  "code": "template_code",
  "name": "Template Name"
}
```

#### Success Response (201) (POST)

- **template** (object) - The template object.

#### Response Example (POST)

```json
{
  "code": "template_code",
  "name": "Template Name"
}
```

````

--------------------------------

### Get Channel Icon URL in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialGroupDMChannel%3AClass

This example shows how to get the URL of a channel's icon using the iconURL method. It can accept an options object to specify image dimensions and format.

```javascript
// Get the URL of the channel's icon
const iconUrl = channel.iconURL({ size: 128, format: 'png' });
console.log(`Channel icon URL: ${iconUrl}`);
````

---

### Get Gateway Bot Info

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the Discord gateway specifically for bots, including recommended shard counts and session start limits.

```javascript
external.gatewayBot() : "/gateway/bot"
```

---

### Fetch Messages Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMessageManager%3AClass

Demonstrates how to fetch messages from a channel using the GuildMessageManager. It includes examples for fetching a single message, multiple messages with options like limit and cache, fetching around a specific message, and filtering messages by author.

```javascript
// Fetch a message
channel.messages
  .fetch("99539446449315840")
  .then((message) => console.log(message.content))
  .catch(console.error);

// Fetch a maximum of 10 messages without caching
channel.messages
  .fetch({ limit: 10, cache: false })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);

// Fetch a maximum of 10 messages without caching around a message id
channel.messages
  .fetch({ limit: 10, cache: false, around: "99539446449315840" })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);

// Fetch messages and filter by a user id
channel.messages
  .fetch()
  .then((messages) =>
    console.log(
      `${
        messages.filter((message) => message.author.id === "84484653687267328")
          .size
      } messages`,
    ),
  )
  .catch(console.error);
```

---

### Get Current Application

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the currently authenticated application. This is useful for bots to get their own details.

```javascript
external.currentApplication() : "/applications/@me"
```

---

### Collection: first() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3AClass

Illustrates retrieving the first element(s) from a Collection. It can return a single value or an array of values if an amount is specified.

```javascript
collection.first();
```

---

### LimitedCollection.find() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Demonstrates how to find a single item in a LimitedCollection that satisfies a given condition using the find() method, which mirrors Array.find(). It's noted that for finding by ID, the 'get' method is preferred.

```javascript
collection.find((user) => user.username === "Bob");
```

---

### RPCSpeakingStartDispatch Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSpeakingStartDispatch%3AInterface

Details the RPCSpeakingStartDispatch interface, which extends BaseRPCMessage and is used for dispatching speaking start events.

````APIDOC
## Interface RPCSpeakingStartDispatch

### Description
Represents the structure for dispatching a speaking start event within the Discord RPC.

### Extends
`BaseRPCMessage<RPCCommands.Dispatch>`

### Properties

#### cmd
- **cmd** (Cmd) - The command type for this message.
  - Inherited from: `BaseRPCMessage`

#### data
- **data** (RPCSpeakingStartDispatchData) - The data payload for the speaking start event.

#### evt
- **evt** (RPCEvents.SpeakingStart) - The event type, specifically `RPCEvents.SpeakingStart`.

### Request Example
```json
{
  "cmd": "DISPATCH",
  "data": {},
  "evt": "SPEAKING_START"
}
````

### Response

#### Success Response (200)

- **cmd** (Cmd) - The command type.
- **data** (RPCSpeakingStartDispatchData) - The event data.
- **evt** (RPCEvents.SpeakingStart) - The event type.

#### Response Example

```json
{
  "cmd": "DISPATCH",
  "data": {},
  "evt": "SPEAKING_START"
}
```

````

--------------------------------

### GET /applications/{application.id}/skus

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves SKUs for an application. This endpoint allows you to get a list of SKUs associated with your application.

```APIDOC
## GET /applications/{application.id}/skus

### Description
Retrieves SKUs for an application.

### Method
GET

### Endpoint
/applications/{application.id}/skus

### Parameters
#### Path Parameters
- **applicationId** (Snowflake) - Required - The ID of the application.

### Response
#### Success Response (200)
- **skus** (array) - An array of SKU objects.

#### Response Example
```json
[
  {
    "id": "sku_id",
    "name": "SKU Name"
  }
]
````

````

--------------------------------

### GET /banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's banner. Supports PNG, JPEG, WebP, and GIF formats. GIF format is indicated by a hash starting with 'a_'.

```APIDOC
## GET /banners/{user.id}/{user.banner}.{format}

### Description
Retrieves a user's banner. This route supports PNG, JPEG, WebP, and GIF formats. If the banner is available in GIF format, the hash will begin with `a_`.

### Method
GET

### Endpoint
`/banners/{userId}/{userBanner}.{format}`

### Parameters
#### Path Parameters
- **userId** (Snowflake) - Required - The ID of the user.
- **userBanner** (string) - Required - The banner hash for the user.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp, gif).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested banner image.

#### Response Example
(Binary image data)
````

---

### Get Gateway Bot Info

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGatewayBotInfo%3AInterface

Retrieves information about the Discord API Gateway, including session start limits, recommended shards, and the WSS URL.

````APIDOC
## GET /gateway/bot

### Description
Retrieves information about the Discord API Gateway, including session start limits, recommended shards, and the WSS URL.

### Method
GET

### Endpoint
/gateway/bot

### Parameters
#### Query Parameters
None

#### Request Body
None

### Response
#### Success Response (200)
- **session_start_limit** (APIGatewaySessionStartLimit) - Information on the current session start limit.
- **shards** (number) - The recommended number of shards to use when connecting.
- **url** (string) - The WSS URL that can be used for connecting to the gateway.

#### Response Example
```json
{
  "session_start_limit": {
    "total": 100,
    "remaining": 99,
    "reset_after": 14400000,
    "max_concurrency": 1
  },
  "shards": 1,
  "url": "wss://gateway.discord.gg/"
}
````

````

--------------------------------

### GET /avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's avatar. Supports PNG, JPEG, WebP, and GIF formats. GIF format is indicated by a hash starting with 'a_'.

```APIDOC
## GET /avatars/{user.id}/{user.avatar}.{format}

### Description
Retrieves a user's avatar. This route supports PNG, JPEG, WebP, and GIF formats. If the avatar is available in GIF format, the hash will begin with `a_`.

### Method
GET

### Endpoint
`/avatars/{userId}/{userAvatar}.{format}`

### Parameters
#### Path Parameters
- **userId** (Snowflake) - Required - The ID of the user.
- **userAvatar** (string) - Required - The avatar hash for the user.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp, gif).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested avatar image.

#### Response Example
(Binary image data)
````

---

### GET /channels/{channel.id}/messages/{message.id}/reactions/{reaction.unicode}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelMessageReactionUsersQuery%3AInterface

Get a list of users that reacted to a specific message with a specific reaction.

````APIDOC
## GET /channels/{channel.id}/messages/{message.id}/reactions/{reaction.unicode}

### Description
Retrieves a list of users who have reacted to a specific message with a given reaction. This endpoint is useful for displaying who reacted to a message.

### Method
GET

### Endpoint
`/channels/{channel.id}/messages/{message.id}/reactions/{reaction.unicode}`

### Parameters
#### Path Parameters
- **channel.id** (Snowflake) - Required - The ID of the channel
- **message.id** (Snowflake) - Required - The ID of the message
- **reaction.unicode** (string) - Required - The Unicode representation of the reaction

#### Query Parameters
- **after** (Snowflake) - Optional - Returns users after this user ID
- **limit** (number) - Optional - Max number of users to return (1-100). Defaults to 25.
- **type** (ReactionType) - Optional - The reaction type

### Request Example
```http
GET /channels/123456789012345678/messages/098765432109876543/reactions/%F0%9F%98%80?limit=50
````

### Response

#### Success Response (200)

- **users** (array) - An array of user objects
- **users[].id** (Snowflake) - The ID of the user
- **users[].username** (string) - The username of the user
- **users[].discriminator** (string) - The discriminator of the user
- **users[].avatar** (string) - The avatar hash of the user

#### Response Example

```json
{
  "users": [
    {
      "id": "123456789012345678",
      "username": "ExampleUser",
      "discriminator": "1234",
      "avatar": "a_hash"
    }
  ]
}
```

````

--------------------------------

### Fetch Pinned Messages Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMessageManager%3AClass

Shows how to fetch pinned messages within a channel using GuildMessageManager. The example demonstrates calling fetchPins() and logging the number of received messages. Note that reaction data is not included and needs to be fetched separately.

```javascript
// Get pinned messages
channel.messages.fetchPins()
  .then(messages => console.log(`Received ${messages.items.length} messages`))
  .catch(console.error);

````

---

### Get User Banner

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches a user's banner image. Supports PNG, JPEG, WebP, and GIF formats. Requires user ID, banner string, and format. GIF banners are indicated by a hash starting with 'a\_'.

```javascript
userBanner: (userId: Snowflake, userBanner: string, format: Format) => `/banners/${userId}/${userBanner}.${format}`
```

---

### GuildOnboardingPrompt Class

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildOnboardingPrompt%3AClass

Represents the data of a prompt of a guilds onboarding. This class provides access to various properties and methods related to the prompt's configuration and behavior.

```APIDOC
## Class: GuildOnboardingPrompt

### Description
Represents the data of a prompt of a guilds onboarding.

### Properties

#### `client` (Client<true>)
- **Description**: The client that instantiated this.
- **Inherited from**: Base

#### `guild` (Guild)
- **Description**: The guild this onboarding prompt is from.

#### `guildId` (Snowflake)
- **Description**: The id of the guild this onboarding prompt is from.

#### `id` (Snowflake)
- **Description**: The id of the prompt.

#### `inOnboarding` (boolean)
- **Description**: Whether the prompt is present in the onboarding flow. If `false`, the prompt will only appear in the Channels & Roles tab.

#### `options` (Collection<Snowflake, GuildOnboardingPromptOption>)
- **Description**: The options available within the prompt.

#### `required` (boolean)
- **Description**: Whether the prompt is required before a user completes the onboarding flow.

#### `singleSelect` (boolean)
- **Description**: Whether users are limited to selecting one option for the prompt.

#### `title` (string)
- **Description**: The title of the prompt.

#### `type` (GuildOnboardingPromptType)
- **Description**: The type of the prompt.

### Methods

#### `toJSON(...props: Record<string, boolean | string>[])`
- **Description**: Converts the object to a JSON representation.
- **Inherited from**: Base

#### `valueOf()`
- **Description**: Returns the string representation of the object.
- **Inherited from**: Base
```

---

### Get Emoji Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an emoji from the Discord CDN. It requires the emoji ID and the desired format. Supports PNG, JPEG, WebP, and GIF. GIF hashes start with 'a\_'.

```typescript
emoji<
  Format extends EmojiFormat
>(
  emojiId: Snowflake,
  format: Format
) : `/emojis/${string}.${Format}`
```

---

### REST API - Get Guild Onboarding

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildOnboardingResult%3ATypeAlias

Retrieves the onboarding data for a specific guild. This endpoint is used to get information about how a guild is configured for onboarding new members.

````APIDOC
## GET /guilds/{guild.id}/onboarding

### Description
Retrieves the onboarding data for a specific guild.

### Method
GET

### Endpoint
`/guilds/{guild.id}/onboarding`

### Parameters
#### Path Parameters
- **guild.id** (Snowflake) - Required - The ID of the guild to retrieve onboarding data for.

### Request Example
```json
{
  "example": "No request body needed for GET request."
}
````

### Response

#### Success Response (200)

- **APIGuildOnboarding** (object) - The onboarding data for the guild.

#### Response Example

```json
{
  "example": "{\n  \"guild_id\": \"123456789012345678\",\n  \"features\": [\n    \"NEW_MEMBER_MESSAGE_ENABLED\"\n  ],\n  \"onboarding_prompt_id\": \"987654321098765432\",\n  \"prompts\": [\n    {\n      \"id\": \"112233445566778899\",\n      \"type\": 0,\n      \"options\": [\n        {\n          \"channel_id\": \"111222333444555666\",\n          \"title\": \"Get Started\",\n          \"description\": \"Welcome!\"\n        }\n      ]\n    }\n  ],\n  \"default_channel_id\": \"111222333444555666\"\n}"
}
```

````

--------------------------------

### GET /guilds/{guild.id}/welcome-screen & PATCH /guilds/{guild.id}/welcome-screen

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves or modifies the welcome screen settings for a guild. This endpoint allows you to view and update the welcome screen configuration.

```APIDOC
## GET /guilds/{guild.id}/welcome-screen & PATCH /guilds/{guild.id}/welcome-screen

### Description
Retrieves or modifies the welcome screen settings for a guild.

### Method
GET, PATCH

### Endpoint
/guilds/{guild.id}/welcome-screen

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

#### Request Body (PATCH)
- **welcome_screen** (object) - Optional - The welcome screen object.

### Request Example (PATCH)
```json
{
  "welcome_screen": {
    "welcome_channels": [
      {
        "channel_id": "channel_id",
        "description": "Welcome message description"
      }
    ],
    "enabled": true
  }
}
````

### Response

#### Success Response (200)

- **welcome_screen** (object) - The welcome screen object.

#### Response Example

```json
{
  "welcome_screen": {
    "welcome_channels": [
      {
        "channel_id": "channel_id",
        "description": "Welcome message description"
      }
    ],
    "enabled": true
  }
}
```

````

--------------------------------

### Launching Activity and Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChannelSelectMenuInteraction%3Aclass

Methods for launching application activities and utility functions like converting to JSON.

```APIDOC
## Launching Activity and Utility Methods

### Description
Methods for launching application activities and general utility functions.

### Methods

- **launchActivity(options: LaunchActivityOptions & { withResponse: true } = {}) : Promise<InteractionCallbackResponse<BooleanCache<Cached>>>**
  - Description: Launches this application's activity, if enabled.

- **toJSON(...props: Record<string, boolean | string>[]) : unknown**
  - Description: Converts the interaction object to its JSON representation.
  - Inherited from: Base

- **valueOf() : string**
  - Description: Returns the primitive value of the interaction object.
  - Inherited from: Base
````

---

### Fetch Command Permissions (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandPermissionsManager%3Aclass

Illustrates fetching permissions for application commands. It shows examples for fetching permissions for a single command, all commands in a guild, and guild-level permissions using the `fetch` method.

```javascript
// Fetch permissions for one command
guild.commands.permissions
  .fetch({ command: "123456789012345678" })
  .then((perms) => console.log(`Fetched ${perms.length} overwrites`))
  .catch(console.error);
```

```javascript
// Fetch permissions for all commands in a guild
client.application.commands.permissions
  .fetch({ guild: "123456789012345678" })
  .then((perms) =>
    console.log(`Fetched permissions for ${perms.size} commands`),
  )
  .catch(console.error);
```

```javascript
// Fetch guild level permissions
guild.commands.permissions
  .fetch({ command: client.user.id })
  .then((perms) =>
    console.log(`Fetched ${perms.length} guild level permissions`),
  )
  .catch(console.error);
```

---

### RPCStartPurchaseResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCStartPurchaseResult%3AInterface

Details the structure of the RPCStartPurchaseResult interface, which extends RPCCommandMessage for starting a purchase.

````APIDOC
## Interface RPCStartPurchaseResult

### Description
Represents the result of starting a purchase via RPC, extending the base RPC command message.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "Not applicable for interface definition"
}
````

### Response

#### Success Response (200)

- **cmd** (Cmd) - The command type.
- **data** (RPCStartPurchaseResultData) - The data associated with the purchase result.
- **nonce** (string) - A unique identifier for the command.

#### Response Example

```json
{
  "cmd": "START_PURCHASE",
  "data": {},
  "nonce": "some-unique-nonce"
}
```

````

--------------------------------

### GET /stickers/{sticker.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a sticker by its ID. This endpoint allows you to get information about a specific sticker.

```APIDOC
## GET /stickers/{sticker.id}

### Description
Retrieves a sticker by its ID.

### Method
GET

### Endpoint
/stickers/{sticker.id}

### Parameters
#### Path Parameters
- **stickerId** (Snowflake) - Required - The ID of the sticker.

### Response
#### Success Response (200)
- **sticker** (object) - The sticker object.

#### Response Example
```json
{
  "id": "sticker_id",
  "name": "Sticker Name"
}
````

````

--------------------------------

### Get Guild Icon Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a guild icon from the Discord CDN. It requires the guild ID, icon identifier, and the desired format. Supports PNG, JPEG, WebP, and GIF. GIF hashes start with 'a_'.

```typescript
guildIcon<
  Format extends GuildIconFormat
>(
  guildId: Snowflake,
  guildIcon: string,
  format: Format
) : `/icons/${string}/${string}.${Format}`
````

---

### FetchGuildSoundboardSoundOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildSoundboardSoundOptions%3AInterface

Details the options available for fetching guild soundboard sounds, extending base fetch options.

```APIDOC
## Interface: FetchGuildSoundboardSoundOptions

### Description
Options for fetching guild soundboard sounds.

### Extends
BaseFetchOptions

### Properties
#### cache (optional, boolean)
Default: `true`
Whether to cache the fetched data if it wasn't already. Inherited from: BaseFetchOptions.

#### force (optional, boolean)
Default: `false`
Whether to skip the cache check and request the API. Inherited from: BaseFetchOptions.

#### soundboardSound (SoundboardSoundResolvable)
Represents the soundboard sound to be fetched.
```

---

### Session Start Limit Object

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGatewaySessionStartLimit%3AInterface

Details about the APIGatewaySessionStartLimit interface, which represents the session start limit information from the Discord Gateway.

````APIDOC
## Interface APIGatewaySessionStartLimit

### Description
Represents the session start limit information from the Discord Gateway.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
- **max_concurrency** (number) - The number of identify requests allowed per 5 seconds
- **remaining** (number) - The remaining number of session starts the current user is allowed
- **reset_after** (number) - The number of milliseconds after which the limit resets
- **total** (number) - The total number of session starts the current user is allowed

#### Response Example
```json
{
  "max_concurrency": 10,
  "remaining": 8,
  "reset_after": 30000,
  "total": 10
}
````

````

--------------------------------

### Get User Avatar

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's avatar image. Supports PNG, JPEG, WebP, and GIF formats. Requires user ID, avatar string, and format. GIF avatars are indicated by a hash starting with 'a_'.

```javascript
userAvatar: (userId: Snowflake, userAvatar: string, format: Format) => `/avatars/${userId}/${userAvatar}.${format}`
````

---

### Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Utility methods for converting channel objects and getting mentions.

````APIDOC
## Utility Methods

### toJSON(...props)

Converts the channel object to a JSON-serializable format.

**Parameters:**
- **...props** (Record<string, boolean | string>) - Properties to include in the JSON output.

**Returns:** unknown

**Inherited from:** Base

### toString()

When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.

**Returns:** ChannelMention

**Inherited from:** GuildChannel

**Examples:**
```javascript
// Logs: Hello from <#123456789012345678>!
console.log(`Hello from ${channel}!`);
````

### valueOf()

Returns the primitive value of the channel object.

**Inherited from:** Base

````

--------------------------------

### Get Guild Banner Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a guild banner from the Discord CDN. It requires the guild ID, banner identifier, and the desired format. Supports PNG, JPEG, WebP, and GIF. GIF hashes start with 'a_'.

```typescript
guildBanner<
  Format extends GuildBannerFormat
>(
  guildId: Snowflake,
  guildBanner: string,
  format: Format
) : `/banners/${string}/${string}.${Format}`
````

---

### Fetch Application Command using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandManager%3Aclass

Provides examples of fetching application commands using the `fetch` method. It shows how to fetch a single command by its ID or all commands for a guild, returning a Promise that resolves with the command(s) or a Collection of commands.

```javascript
// Fetch a single command
client.application.commands
  .fetch("123456789012345678")
  .then((command) => console.log(`Fetched command ${command.name}`))
  .catch(console.error);
```

```javascript
// Fetch all commands
guild.commands
  .fetch()
  .then((commands) => console.log(`Fetched ${commands.size} commands`))
  .catch(console.error);
```

---

### GET /sticker-packs/{pack.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a sticker pack by its ID. This endpoint allows you to get information about a specific sticker pack.

````APIDOC
## GET /sticker-packs/{pack.id}

### Description
Retrieves a sticker pack by its ID.

### Method
GET

### Endpoint
/sticker-packs/{pack.id}

### Parameters
#### Path Parameters
- **packId** (Snowflake) - Required - The ID of the sticker pack.

### Response
#### Success Response (200)
- **sticker_pack** (object) - The sticker pack object.

#### Response Example
```json
{
  "id": "pack_id",
  "name": "Pack Name"
}
````

````

--------------------------------

### Collection: combineEntries() Static Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3AClass

Illustrates creating a new Collection by combining entries from an iterable, with a provided function to resolve duplicate keys.

```javascript
Collection.combineEntries([["a", 1], ["b", 2], ["a", 2]], (x, y) => x + y);
// returns Collection { "a" => 3, "b" => 2 }
````

---

### GET /skus/{sku.id}/subscriptions/{subscription.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a specific SKU subscription. This endpoint allows you to get details about a specific subscription.

````APIDOC
## GET /skus/{sku.id}/subscriptions/{subscription.id}

### Description
Retrieves a specific SKU subscription.

### Method
GET

### Endpoint
/skus/{sku.id}/subscriptions/{subscription.id}

### Parameters
#### Path Parameters
- **skuId** (Snowflake) - Required - The ID of the SKU.
- **subscriptionId** (Snowflake) - Required - The ID of the subscription.

### Response
#### Success Response (200)
- **subscription** (object) - The subscription object.

#### Response Example
```json
{
  "id": "subscription_id",
  "status": "ACTIVE"
}
````

````

--------------------------------

### Guild Onboarding Settings

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Endpoints for retrieving and updating guild onboarding settings.

```APIDOC
## GET /guilds/{guild.id}/onboarding

### Description
Returns the guild's onboarding settings.

### Method
GET

### Endpoint
`/guilds/{guild.id}/onboarding`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

### Response
#### Success Response (200)
- **Guild Onboarding Object**

## PUT /guilds/{guild.id}/onboarding

### Description
Updates the guild's onboarding settings.

### Method
PUT

### Endpoint
`/guilds/{guild.id}/onboarding`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

#### Request Body
- **(object)** - Required - Guild onboarding object to update.

### Response
#### Success Response (200)
- **Guild Onboarding Object**
````

---

### GET /soundboard-sounds/{sound.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a soundboard sound file.

```APIDOC
## GET /soundboard-sounds/{sound.id}

### Description
Retrieves a soundboard sound file.

### Method
GET

### Endpoint
`/soundboard-sounds/{soundId}`

### Parameters
#### Path Parameters
- **soundId** (Snowflake) - Required - The ID of the soundboard sound.

### Response
#### Success Response (200)
- **Audio Data** (binary) - The requested sound file.

#### Response Example
(Binary audio data)
```

---

### GET /invites/{invite.code} & DELETE /invites/{invite.code}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves or deletes an invite. This endpoint allows you to get information about an invite or delete it.

````APIDOC
## GET /invites/{invite.code} & DELETE /invites/{invite.code}

### Description
Retrieves or deletes an invite.

### Method
GET, DELETE

### Endpoint
/invites/{invite.code}

### Parameters
#### Path Parameters
- **code** (string) - Required - The invite code.

### Response
#### Success Response (200) (GET)
- **invite** (object) - The invite object.

#### Response Example (GET)
```json
{
  "code": "invite_code",
  "guild": {
    "id": "guild_id",
    "name": "Guild Name"
  }
}
````

#### Success Response (204) (DELETE)

- No content.

#### Response Example (DELETE)

{}

````

--------------------------------

### Fetch Voice State Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/VoiceStateManager%3AClass

Demonstrates how to fetch a member's voice state using the VoiceStateManager. This method retrieves voice state information from Discord's API or the local cache if available.

```javascript
// Fetch a member's voice state
guild.voiceStates.fetch("66564597481480192")
   .then(console.log)
   .catch(console.error);

````

---

### fetch

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Fetches this channel.

```APIDOC
## fetch

### Description
Fetches this channel.

### Method
`fetch`

### Parameters
#### Query Parameters
- **force** (boolean) - Optional - Defaults to `true`. Whether to force fetching the channel even if it's cached.

### Response
#### Success Response (Promise<this>)
- **this**: The fetched channel.

### Inherited from
BaseChannel
```

---

### Get Guild Member Avatar Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a guild member's avatar from the Discord CDN. It requires the guild ID, user ID, avatar identifier, and the desired format. Supports PNG, JPEG, WebP, and GIF. GIF hashes start with 'a\_'.

```typescript
guildMemberAvatar<
  Format extends GuildMemberAvatarFormat
>(
  guildId: Snowflake,
  userId: Snowflake,
  memberAvatar: string,
  format: Format
) : `/guilds/${string}/users/${string}/avatars/${string}.${Format}`
```

---

### GET /skus/{sku.id}/subscriptions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves subscriptions for a specific SKU. This endpoint allows you to get a list of subscriptions for a given SKU.

````APIDOC
## GET /skus/{sku.id}/subscriptions

### Description
Retrieves subscriptions for a specific SKU.

### Method
GET

### Endpoint
/skus/{sku.id}/subscriptions

### Parameters
#### Path Parameters
- **skuId** (Snowflake) - Required - The ID of the SKU.

### Response
#### Success Response (200)
- **subscriptions** (array) - An array of subscription objects.

#### Response Example
```json
[
  {
    "id": "subscription_id",
    "status": "ACTIVE"
  }
]
````

````

--------------------------------

### GET /oauth2/applications/@me

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the current application. This endpoint provides details about your application.

```APIDOC
## GET /oauth2/applications/@me

### Description
Retrieves information about the current application.

### Method
GET

### Endpoint
/oauth2/applications/@me

### Response
#### Success Response (200)
- **application** (object) - The application object.

#### Response Example
```json
{
  "id": "application_id",
  "name": "Application Name"
}
````

````

--------------------------------

### fetch

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Fetches this channel.

```APIDOC
## fetch

### Description
Fetches this channel.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **force** (boolean) - Optional - Defaults to `true`. Whether to force fetching the channel even if it's cached.

### Request Example
```javascript
// Fetch the channel
channel.fetch()
  .then(fetchedChannel => console.log(`Fetched channel: ${fetchedChannel.name}`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<this>)

- **this** - The fetched channel instance.

#### Response Example

```json
{
  "id": "channelId",
  "name": "channel-name",
  "type": "text"
}
```

````

--------------------------------

### Collection: concat() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3AClass

Shows how to merge this Collection with other Collections into a new combined Collection without modifying the original ones.

```javascript
const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
````

---

### Edit GuildChannel Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannel%3AClass

Shows an example of editing a GuildChannel's properties, such as its name, using the edit() method in JavaScript. The method accepts an options object and returns a Promise that resolves with the updated channel.

```javascript
// Edit a channel
channel.edit({ name: "new-channel" }).then(console.log).catch(console.error);
```

---

### createWebhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Creates a webhook for the channel.

````APIDOC
## createWebhook

### Description
Creates a webhook for the channel.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (ChannelWebhookCreateOptions) - Optional - Options for creating the webhook.
  - **name** (string) - Required - The name of the webhook.
  - **avatar** (string) - Optional - The avatar of the webhook (as a base64 data URI or URL).
  - **reason** (string) - Optional - The reason for creating the webhook.

### Request Example
```javascript
// Create a webhook for the current channel
channel.createWebhook({
  name: 'Snek',
  avatar: 'https://i.imgur.com/mI8XcpG.jpg',
  reason: 'Needed a cool new Webhook'
})
  .then(console.log)
  .catch(console.error);
````

### Response

#### Success Response (Promise<Webhook>)

- **Webhook** - The created webhook object.

#### Response Example

```json
{
  "id": "webhookId",
  "name": "Snek",
  "avatar": "https://i.imgur.com/mI8XcpG.jpg",
  "url": "https://discord.com/api/webhooks/webhookId/token"
}
```

````

--------------------------------

### fetchDefaultSoundboardSounds()

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches a collection of default soundboard sounds available for use.

```APIDOC
## GET /fetchDefaultSoundboardSounds

### Description
Obtains the list of default soundboard sounds.

### Method
GET

### Endpoint
/fetchDefaultSoundboardSounds

### Parameters
None

### Request Example
```javascript
client.fetchDefaultSoundboardSounds()
  .then(sounds => console.log(`Available soundboard sounds are: ${sounds.map(sound => sound.name).join(', ')}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **sounds** (Collection<string, SoundboardSound>) - A collection of default soundboard sounds.

````

--------------------------------

### createWebhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Creates a webhook for the channel.

```APIDOC
## createWebhook

### Description
Creates a webhook for the channel.

### Method
`createWebhook`

### Parameters
#### Query Parameters
- **options** (ChannelWebhookCreateOptions) - Optional - Options for creating the webhook.

### Request Example
```javascript
// Create a webhook for the current channel
channel.createWebhook({
  name: 'Snek',
  avatar: 'https://i.imgur.com/mI8XcpG.jpg',
  reason: 'Needed a cool new Webhook'
})
  .then(console.log)
  .catch(console.error);
````

### Response

#### Success Response (Promise<Webhook>)

- **Webhook**: The created webhook object.

#### Response Example

```json
{
  "name": "Snek",
  "avatar": "https://i.imgur.com/mI8XcpG.jpg"
}
```

````

--------------------------------

### GET /soundboard-default-sounds

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the default soundboard sounds. This endpoint provides a list of default sounds available for the soundboard.

```APIDOC
## GET /soundboard-default-sounds

### Description
Retrieves the default soundboard sounds.

### Method
GET

### Endpoint
/soundboard-default-sounds

### Response
#### Success Response (200)
- **sounds** (array) - An array of sound objects.

#### Response Example
```json
[
  {
    "id": "sound_id",
    "name": "Sound Name"
  }
]
````

````

--------------------------------

### fetchGuildPreview(guild)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches a guild preview, providing limited information about a guild.

```APIDOC
## GET /fetchGuildPreview

### Description
Obtains a guild preview from Discord, available for all guilds the bot is in and all Discoverable guilds.

### Method
GET

### Endpoint
/fetchGuildPreview

### Parameters
#### Path Parameters
- **guild** (GuildResolvable) - Required - The guild to fetch a preview for.

### Request Example
```javascript
// Example usage (assuming 'guild' is a resolvable guild object or ID)
client.fetchGuildPreview(guild)
  .then(preview => console.log(`Guild preview fetched for: ${preview.name}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **preview** (GuildPreview) - The guild preview object.

````

--------------------------------

### APIGuildWelcomeScreenChannel Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildWelcomeScreenChannel%3AInterface

Details the structure and properties of the APIGuildWelcomeScreenChannel interface, used for welcome screen configurations in Discord guilds.

```APIDOC
## Interface APIGuildWelcomeScreenChannel

### Description
Represents a channel within a guild's welcome screen configuration.

### Properties

#### channel_id
- **Type**: Snowflake
- **Description**: The ID of the channel that is suggested in the welcome screen.

#### description
- **Type**: string
- **Description**: The description displayed for the channel in the welcome screen.

#### emoji_id
- **Type**: Snowflake | null
- **Description**: The ID of the emoji displayed to the left of the channel name in the welcome screen. Can be null.

#### emoji_name
- **Type**: string | null
- **Description**: The name of the emoji displayed to the left of the channel name in the welcome screen. Can be null.
````

---

### fetchDefaultSoundboardSounds

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches the list of default soundboard sounds available on Discord.

````APIDOC
## GET /fetchDefaultSoundboardSounds

### Description
Obtains the list of default soundboard sounds.

### Method
GET

### Endpoint
/fetchDefaultSoundboardSounds

### Parameters
None

### Request Example
```javascript
client.fetchDefaultSoundboardSounds()
  .then(sounds => console.log(sounds.map(sound => sound.name)))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **sounds** (Collection<string, SoundboardSound>) - A collection of default soundboard sounds.

````

--------------------------------

### LimitedCollection.clone() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Demonstrates how to create a shallow copy of a LimitedCollection instance using the clone() method. This method is inherited from the base Collection class.

```javascript
const newColl = someColl.clone();

````

---

### LimitedCollection.filter() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Shows an example of filtering elements within a LimitedCollection based on a provided function, returning a new Collection containing only the elements that pass the test. This method is identical to Array.filter().

```javascript
collection.filter((user) => user.username === "Bob");
```

---

### Fetch Pinned Messages Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/DMMessageManager%3AClass

Illustrates how to fetch pinned messages from a channel using the fetchPins method. This method returns a paginated result of pinned messages.

```javascript
// Get pinned messages
channel.messages
  .fetchPins()
  .then((messages) => console.log(`Received ${messages.items.length} messages`))
  .catch(console.error);
```

---

### quote

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Formatters%3AClass

Formats the content into a quote. This needs to be at the start of the line for Discord to format it.

````APIDOC
## DEPRECATED static quote(content: string): string

### Description
Formats the content into a quote. This needs to be at the start of the line for Discord to format it.

### Method
DEPRECATED STATIC

### Endpoint
N/A (Client-side formatting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
* **content** (string) - Required - The text content to format as a quote.

### Request Example
```json
{
  "content": "This is a quote."
}
````

### Response

#### Success Response (200)

- **formatted_content** (string) - The content formatted as a Discord quote.

#### Response Example

```json
{
  "formatted_content": "> This is a quote."
}
```

````

--------------------------------

### RPC Get Channels API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetChannelsArgs%3AInterface

This section details the arguments required for the Get Channels RPC command, which retrieves a list of channels within a specified guild.

```APIDOC
## GET /rpc/channels

### Description
Retrieves a list of channels for a given guild ID.

### Method
GET

### Endpoint
/rpc/channels

### Parameters
#### Query Parameters
- **guild_id** (Snowflake) - Required - The ID of the guild to get channels for.

### Request Example
````

GET /rpc/channels?guild_id=123456789012345678

````

### Response
#### Success Response (200)
- **channels** (Array<Channel>) - A list of channel objects.

#### Response Example
```json
{
  "channels": [
    {
      "id": "987654321098765432",
      "name": "general",
      "type": 0
    }
  ]
}
````

````

--------------------------------

### fetchGuildPreview

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches a guild preview from Discord. This is available for all guilds the bot is in and all Discoverable guilds.

```APIDOC
## GET /fetchGuildPreview

### Description
Obtains a guild preview from Discord, available for all guilds the bot is in and all Discoverable guilds.

### Method
GET

### Endpoint
/fetchGuildPreview

### Parameters
#### Path Parameters
- **guild** (GuildResolvable) - The guild to fetch a preview for.

### Request Example
```javascript
// Assuming 'guildId' is a valid GuildResolvable
client.fetchGuildPreview(guildId)
  .then(preview => console.log(preview.name))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **GuildPreview** - An object containing the guild's preview information.

````

--------------------------------

### LimitedCollection.concat() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Shows how to combine the current LimitedCollection with other collections into a new collection using the concat() method. The original collections remain unmodified.

```javascript
const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);

````

---

### GET /channels/{channel.id}/polls/{message.id}/answers/{answer_id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves voters for a poll answer. This endpoint allows you to get a list of users who voted for a specific answer in a poll.

````APIDOC
## GET /channels/{channel.id}/polls/{message.id}/answers/{answer_id}

### Description
Retrieves voters for a poll answer.

### Method
GET

### Endpoint
/channels/{channel.id}/polls/{message.id}/answers/{answer_id}

### Parameters
#### Path Parameters
- **channelId** (Snowflake) - Required - The ID of the channel.
- **messageId** (Snowflake) - Required - The ID of the message.
- **answerId** (number) - Required - The ID of the answer.

### Response
#### Success Response (200)
- **voters** (array) - An array of user objects.

#### Response Example
```json
[
  {
    "id": "user_id",
    "username": "username"
  }
]
````

````

--------------------------------

### Define APIGatewaySessionStartLimit Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGatewaySessionStartLimit%3AInterface

Defines the APIGatewaySessionStartLimit interface used for managing Discord API gateway session start limits. This interface specifies the properties related to concurrency, remaining sessions, and reset timers.

```typescript
export interface APIGatewaySessionStartLimit {
  max_concurrency: number;
  remaining: number;
  reset_after: number;
  total: number;
}
````

---

### fetchWebhooks

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Fetches all webhooks for the channel.

````APIDOC
## fetchWebhooks

### Description
Fetches all webhooks for the channel.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```javascript
// Fetch webhooks
channel.fetchWebhooks()
  .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<Collection<Snowflake, Webhook>>)

- **Collection<Snowflake, Webhook>** - A collection of webhooks associated with the channel.

#### Response Example

```json
{
  "size": 1,
  "webhooks": {
    "webhookId": {
      "id": "webhookId",
      "name": "Webhook Name",
      "avatar": "url/to/avatar.png"
    }
  }
}
```

````

--------------------------------

### IntegrationTypesConfiguration Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/IntegrationTypesConfiguration%3ATypeAlias

Defines the structure for application's supported installation context data.

```APIDOC
## Type: IntegrationTypesConfiguration

### Description
The application's supported installation context data.

### Type Definition
```typescript
export type IntegrationTypesConfiguration = Partial<Record<ApplicationIntegrationType, IntegrationTypesConfigurationContext>>;
````

### Fields

- **ApplicationIntegrationType** (enum) - The type of integration (e.g., `guildInstall`, `userInstall`).
- **IntegrationTypesConfigurationContext** (object) - Contextual data for a specific integration type.

````

--------------------------------

### Fetch Channel in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialGroupDMChannel%3AClass

This example shows how to fetch a channel using the fetch method. It can optionally take a boolean argument to force a re-fetch of the channel data.

```javascript
// Fetch the channel
channel.fetch()
  .then(console.log)
  .catch(console.error);
````

---

### Create a Basic Discord Bot with discord.js

Source: https://discord.js.org/docs/index

Creates a simple Discord bot using discord.js that logs in, prints a ready message, and responds to a 'ping' slash command. This requires a bot token and specifies the GatewayIntentBits.Guilds intent.

```javascript
import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(TOKEN);
```

---

### Guild Welcome Screen API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Enables management of a guild's welcome screen. Supports fetching the current welcome screen configuration and updating it.

```javascript
function guildWelcomeScreen(guildId) {
  return `/guilds/${guildId}/welcome-screen`;
}
```

---

### Get Channel Invites API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelInvitesResult%3ATypeAlias

Retrieves a list of invites for a given channel.

````APIDOC
## GET /channels/{channel.id}/invites

### Description
Retrieves a list of invites for a given channel.

### Method
GET

### Endpoint
/channels/{channel.id}/invites

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to get invites for.

### Response
#### Success Response (200)
- **APIExtendedInvite[]** (array) - An array of APIExtendedInvite objects.

#### Response Example
```json
[
  {
    "code": "EXAMPLECODE1",
    "guild_id": "123456789012345678",
    "channel_id": "123456789012345679",
    "inviter": {
      "id": "123456789012345670",
      "username": "TestUser",
      "avatar": "a_testavatarhash",
      "discriminator": "0001",
      "public_flags": 64
    },
    "target_type": 1,
    "target_user": {
      "id": "123456789012345671",
      "username": "TargetUser",
      "avatar": null,
      "discriminator": "0002",
      "public_flags": 0
    },
    "uses": 0,
    "max_uses": 0,
    "max_age": 86400,
    "temporary": false,
    "created_at": "2024-01-01T12:00:00.000Z",
    "expires_at": "2024-01-02T12:00:00.000Z"
  }
]
````

````

--------------------------------

### login

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Logs the client in, establishing a WebSocket connection to Discord.

```APIDOC
## POST /login

### Description
Logs the client in, establishing a WebSocket connection to Discord.

### Method
POST

### Endpoint
/login

### Parameters
#### Query Parameters
- **token** (string, optional) - The token to log in with. If not provided, the client will use its configured token.

### Request Example
```javascript
client.login('YOUR_BOT_TOKEN')
  .then(token => console.log(`Logged in with token: ${token}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **string** - The token of the account used for login.

````

--------------------------------

### fetchWebhooks

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Fetches all webhooks for the channel.

```APIDOC
## fetchWebhooks

### Description
Fetches all webhooks for the channel.

### Method
`fetchWebhooks`

### Request Example
```javascript
// Fetch webhooks
channel.fetchWebhooks()
  .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<Collection<Snowflake, Webhook>>)

- **Collection**: A collection of webhooks for the channel.

#### Response Example

```json
{
  "size": 1
}
```

````

--------------------------------

### GET /stickers/{sticker.id}.{png|json}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a sticker. Supports PNG and JSON (for Lottie) formats.

```APIDOC
## GET /stickers/{sticker.id}.{format}

### Description
Retrieves a sticker. This route supports PNG and JSON (for Lottie) formats. It also supports GIF format.

### Method
GET

### Endpoint
`/stickers/{stickerId}.{format}`

### Parameters
#### Path Parameters
- **stickerId** (Snowflake) - Required - The ID of the sticker.
- **format** (Format) - Required - The desired format (e.g., png, json, gif).

### Response
#### Success Response (200)
- **Sticker Data** (binary or JSON) - The requested sticker data.

#### Response Example
(Binary image data for PNG/GIF, JSON for Lottie)
````

---

### fetchSKUs

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Gets this application's SKUs (Stock Keeping Units). This is used for applications that have items available for purchase through Discord.

````APIDOC
## GET /applications/@me/skus

### Description
Gets this application's SKUs.

### Method
GET

### Endpoint
`/applications/@me/skus`

### Response
#### Success Response (200)
- **skus** (Collection<Snowflake, SKU>) - A collection of SKU objects, keyed by their Snowflake IDs.

#### Response Example
```json
{
  "123456789012345678": {
    "id": "123456789012345678",
    "name": "Example Item",
    "type": 1, // e.g., 1 for Game, 2 for DLC, 3 for In-App Purchase
    "price": 1000, // Price in cents
    "image_url": "https://example.com/image.png"
  }
}
````

````

--------------------------------

### Manage Guild Onboarding

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Endpoints for retrieving and updating guild onboarding settings. This allows customization of the initial experience for new members joining a guild. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/onboarding
PUT /guilds/{guild.id}/onboarding
````

---

### GET /oauth2/authorize

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Initiates the OAuth2 authorization flow. This endpoint is used to obtain user authorization for your application.

```APIDOC
## GET /oauth2/authorize

### Description
Initiates the OAuth2 authorization flow.

### Method
GET

### Endpoint
/oauth2/authorize

### Parameters
#### Query Parameters
- **client_id** (string) - Required - The client ID of your application.
- **redirect_uri** (string) - Optional - The redirect URI.
- **response_type** (string) - Required - The response type (e.g., 'code').
- **scope** (string) - Required - The scopes to request.
- **state** (string) - Optional - A state parameter.

### Response
#### Success Response (302)
- **Location** (string) - The redirect URL.

#### Response Example
(Redirect to the redirect_uri with authorization code)
```

---

### ClientFetchInviteOptions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientFetchInviteOptions%3AInterface

Options used when fetching an invite from Discord.

```APIDOC
## Interface: ClientFetchInviteOptions

### Description
Options used when fetching an invite from Discord.

### Properties

#### guildScheduledEventId
- **guildScheduledEventId** (Snowflake) - Optional - The id of the guild scheduled event to include with the invite.
```

---

### discord.js Invite toString Example

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Invite%3AClass

Demonstrates how to use the `toString()` method of the discord.js Invite class. When concatenated with a string, it automatically appends the invite's URL, simplifying the process of displaying or sharing invite links.

```javascript
// Logs: Invite: https://discord.gg/A1b2C3
console.log(`Invite: ${invite}`);
```

---

### GuildOnboardingPromptData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildOnboardingPromptData%3AInterface

Defines the structure for data related to editing a guild onboarding prompt.

```APIDOC
## Interface: GuildOnboardingPromptData

### Description
Data for editing a guild onboarding prompt.

### Properties

#### id (Snowflake) - Optional
The id of the prompt.

#### inOnboarding (boolean) - Optional
Whether the prompt is present in the onboarding flow.

#### options (GuildOnboardingPromptOptionData[] | ReadonlyCollection<Snowflake, GuildOnboardingPromptOption>) - Required
The options available within the prompt.

#### required (boolean) - Optional
Whether the prompt is required before a user completes the onboarding flow.

#### singleSelect (boolean) - Optional
Whether users are limited to selecting one option for the prompt.

#### title (string) - Required
The title for the prompt.

#### type (GuildOnboardingPromptType) - Optional
The type of the prompt.
```

---

### Get User API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIUserResult%3ATypeAlias

Retrieves information about a specific user.

````APIDOC
## GET /users/@me

### Description
Retrieves the user object for the currently authenticated bot.

### Method
GET

### Endpoint
`/users/@me`

### Parameters
#### Query Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **APIUser** (object) - The user object.

#### Response Example
```json
{
  "id": "123456789012345678",
  "username": "ExampleBot",
  "discriminator": "0001",
  "public_flags": 0,
  "flags": 0,
  "locale": "en-US",
  "mfa_enabled": false,
  "premium_type": 0
}
````

See also: https://discord.com/developers/docs/resources/user#get-user

````

--------------------------------

### POST /channels/{channel.id}/messages/{message.id}/threads

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelMessagesThreadsJSONBody%3AInterface

Starts a new thread from an existing message in a channel. This allows for focused conversations on specific messages.

```APIDOC
## POST /channels/{channel.id}/messages/{message.id}/threads

### Description
Starts a new thread from an existing message in a channel. This allows for focused conversations on specific messages.

### Method
POST

### Endpoint
`/channels/{channel.id}/messages/{message.id}/threads`

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to create the thread in.
- **message.id** (snowflake) - Required - The ID of the message to create the thread from.

#### Query Parameters
None

#### Request Body
- **name** (string) - Required - 1-100 character thread name.
- **auto_archive_duration** (ThreadAutoArchiveDuration | number) - Optional - The amount of time in minutes to wait before automatically archiving the thread. Default is 60.
- **rate_limit_per_user** (number) - Optional - Amount of seconds a user has to wait before sending another message (0-21600).

### Request Example
```json
{
  "name": "My Awesome Thread",
  "auto_archive_duration": 1440,
  "rate_limit_per_user": 5
}
````

### Response

#### Success Response (201 Created)

- **id** (snowflake) - The ID of the created thread.
- **name** (string) - The name of the thread.
- **auto_archive_duration** (number) - The amount of time in minutes before the thread is archived.
- **rate_limit_per_user** (number | null) - The seconds a user has to wait before sending another message.

#### Response Example

```json
{
  "id": "123456789012345678",
  "name": "My Awesome Thread",
  "auto_archive_duration": 1440,
  "rate_limit_per_user": 5
}
```

````

--------------------------------

### Set GuildScheduledEvent Start Time (Discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildScheduledEvent%3AClass

Sets a new scheduled start time for a guild scheduled event. This method accepts a DateResolvable and returns a Promise that resolves with the updated GuildScheduledEvent object. An optional reason can be provided for audit logs.

```javascript
// Set start time of a guild scheduled event
guildScheduledEvent.setScheduledStartTime('2022-09-24T00:00:00+05:30')
 .then(guildScheduledEvent => console.log(`Set the start time to: ${guildScheduledEvent.scheduledStartTime}`))
 .catch(console.error);
````

---

### Fetch Invite Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchInviteOptions%3AInterface

Options used to fetch a single invite from a guild, extending base fetch options.

```APIDOC
## Interface: FetchInviteOptions

### Description
Options used to fetch a single invite from a guild.

### Extends
BaseFetchOptions

### Properties
#### cache : boolean = true
Whether or not to cache the fetched invite.

#### code : string
The invite to fetch.

#### force : boolean
Whether to skip the cache check and request the API.
```

---

### PrimaryEntryPointCommandData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PrimaryEntryPointCommandData%3AInterface

Documentation for the PrimaryEntryPointCommandData interface, which extends BaseApplicationCommandData and includes specific properties for primary entry point commands.

````APIDOC
## Interface PrimaryEntryPointCommandData

### Description
Represents the data for a primary entry point command, extending base application command data with specific properties.

### Extends
BaseApplicationCommandData

### Properties

#### `contexts?` (readonly InteractionContextType[]) - Optional
Specifies the interaction contexts in which the command can be used. Inherited from BaseApplicationCommandData.

#### `defaultMemberPermissions?` (PermissionResolvable | null) - Optional
Determines the default member permissions required for the command. Inherited from BaseApplicationCommandData.

#### `description?` (string) - Optional
The description of the command.

#### `descriptionLocalizations?` (LocalizationMap) - Optional
Provides localized descriptions for the command.

#### `dmPermission?` (boolean) - Optional
Indicates whether the command can be used in direct messages. Inherited from BaseApplicationCommandData.

#### `handler?` (EntryPointCommandHandlerType) - Optional
The handler for the entry point command.

#### `integrationTypes?` (readonly ApplicationIntegrationType[]) - Optional
Specifies the application integration types for the command. Inherited from BaseApplicationCommandData.

#### `name` (string) - Required
The name of the command. Inherited from BaseApplicationCommandData.

#### `nameLocalizations?` (LocalizationMap) - Optional
Provides localized names for the command. Inherited from BaseApplicationCommandData.

#### `nsfw?` (boolean) - Optional
Indicates if the command is NSFW (Not Safe For Work). Inherited from BaseApplicationCommandData.

#### `type` (ApplicationCommandType.PrimaryEntryPoint) - Required
The type of the command, specifically set to PrimaryEntryPoint.

### Example
```typescript
// Example usage (conceptual)
const commandData: PrimaryEntryPointCommandData = {
  name: 'mycommand',
  description: 'My awesome command',
  type: ApplicationCommandType.PrimaryEntryPoint,
  // ... other optional properties
};
````

````

--------------------------------

### fetchInvite(invite, options?)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches an invite from Discord using its code or URL.

```APIDOC
## GET /fetchInvite

### Description
Obtains an invite from Discord.

### Method
GET

### Endpoint
/fetchInvite

### Parameters
#### Path Parameters
- **invite** (InviteResolvable) - Required - The invite code or URL to fetch.
- **options** (ClientFetchInviteOptions) - Optional - Additional options for fetching the invite.

### Request Example
```javascript
client.fetchInvite('https://discord.gg/djs')
  .then(invite => console.log(`Obtained invite with code: ${invite.code}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **invite** (Invite) - The fetched invite object.

````

--------------------------------

### LimitedCollection.every() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Illustrates how to check if all items in a LimitedCollection satisfy a condition using the every() method, which behaves like Array.every().

```javascript
collection.every(user => !user.bot);

````

---

### RPCGetEntitlementTicketResultData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetEntitlementTicketResultData%3AInterface

Details the structure of the data returned for an RPC Get Entitlement Ticket result.

````APIDOC
## Interface RPCGetEntitlementTicketResultData

### Description
This interface defines the structure of the data associated with the result of an RPC call to get an entitlement ticket.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
N/A (Interface Definition)

### Request Example
N/A (Interface Definition)

### Response
#### Success Response (Interface Definition)
- **data** (object) - Contains the entitlement ticket information.
  - **ticket** (string) - The entitlement ticket string.
  - **expires** (number) - The expiration timestamp of the ticket.
  - **metadata** (string) - Additional metadata associated with the ticket.

#### Response Example
```json
{
  "ticket": "a1b2c3d4e5f6...",
  "expires": 1678886400,
  "metadata": "premium_user"
}
````

````

--------------------------------

### Get Guild Integrations

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of all integrations connected to a guild. This helps in managing connected applications and services.

```javascript
external.guildIntegrations(
  guildId: Snowflake
) : `/guilds/${string}/integrations`
````

---

### GET /guilds

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildQuery%3AInterface

Retrieves information about a guild, with an option to include approximate member and presence counts.

````APIDOC
## GET /guilds

### Description
Retrieves information about a guild. The `with_counts` parameter can be used to include approximate member and presence counts.

### Method
GET

### Endpoint
`/guilds`

### Query Parameters
- **with_counts** (boolean) - Optional - When `true`, will return approximate member and presence counts for the guild. Defaults to `false`.

### Response
#### Success Response (200)
- **approximate_member_count** (integer) - Approximate number of members in the guild.
- **approximate_presence_count** (integer) - Approximate number of users present in the guild.

#### Response Example
```json
{
  "approximate_member_count": 1000,
  "approximate_presence_count": 500
}
````

````

--------------------------------

### Modals and Activities

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserSelectMenuInteraction%3Aclass

Methods for showing modal components and launching application activities.

```APIDOC
## Modals and Activities

### Description
Methods for interacting with modals and launching application activities.

### Methods

- **showModal(modal: JSONEncodable<APIModalInteractionResponseCallbackData> | ModalComponentData | APIModalInteractionResponseCallbackData, options: ShowModalOptions & { withResponse: true } = {}) : Promise<InteractionCallbackResponse<BooleanCache<Cached>>>**
  - **Description**: Shows a modal component to the user.

- **launchActivity(options: LaunchActivityOptions & { withResponse: true } = {}) : Promise<InteractionCallbackResponse<BooleanCache<Cached>>>**
  - **Description**: Launches this application's activity, if enabled.
````

---

### Example Usage of IntegrationApplication toString() in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/IntegrationApplication%3AClass

Demonstrates how the toString() method of the IntegrationApplication class can be used. When concatenated with a string, it automatically returns the application's name.

```javascript
// Logs: Application name: My App
console.log(`Application name: ${application}`);
```

---

### login(token?)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Logs the client into Discord using the provided token, establishing a WebSocket connection.

````APIDOC
## POST /login

### Description
Logs the client in, establishing a WebSocket connection to Discord.

### Method
POST

### Endpoint
/login

### Parameters
#### Request Body
- **token** (string) - Optional - The token to log in with. If not provided, the client's existing token will be used.

### Request Example
```javascript
client.login('my token');
````

### Response

#### Success Response (200)

- **token** (string) - The token of the account used for login.

````

--------------------------------

### Message Thread API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIBaseMessage%3AInterface

Retrieves information about a thread started from a message.

```APIDOC
## GET /websites/discord_js/thread

### Description
Retrieves information about a thread that was started from this message.

### Method
GET

### Endpoint
/websites/discord_js/thread

### Parameters
#### Query Parameters
- **thread** (APIChannel) - Optional - The channel object representing the thread.

### Request Example
```json
{
  "thread": {
    "id": "987654321098765432",
    "name": "Discussion Thread",
    "type": 11
  }
}
````

### Response

#### Success Response (200)

- **thread** (APIChannel) - The channel object for the thread.

````

--------------------------------

### ChatInputApplicationCommandData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChatInputApplicationCommandData%3AInterface

Documentation for the ChatInputApplicationCommandData interface, which extends BaseApplicationCommandData and defines properties specific to chat input commands.

```APIDOC
## Interface: ChatInputApplicationCommandData

### Description
Represents the data structure for chat input application commands in discord.js. It extends `BaseApplicationCommandData` and includes properties specific to slash commands.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A (Interface definition)

### Request Example
N/A (Interface definition)

### Response
#### Success Response (200)
N/A (Interface definition)

#### Response Example
N/A (Interface definition)

### Properties

- **contexts** (readonly InteractionContextType[] | null) - Optional - The contexts in which the command can be used. Inherited from `BaseApplicationCommandData`.
- **defaultMemberPermissions** (PermissionResolvable | null) - Optional - The default permissions for members to use this command. Inherited from `BaseApplicationCommandData`.
- **description** (string) - The description of the command.
- **descriptionLocalizations** (LocalizationMap) - Optional - Localized descriptions for the command.
- **dmPermission** (boolean) - Optional - Whether the command can be used in DMs. Inherited from `BaseApplicationCommandData`.
- **integrationTypes** (readonly ApplicationIntegrationType[] | null) - Optional - The integration types supported by the command. Inherited from `BaseApplicationCommandData`.
- **name** (string) - The name of the command. Inherited from `BaseApplicationCommandData`.
- **nameLocalizations** (LocalizationMap) - Optional - Localized names for the command. Inherited from `BaseApplicationCommandData`.
- **nsfw** (boolean) - Optional - Whether the command is NSFW. Inherited from `BaseApplicationCommandData`.
- **options** (readonly ApplicationCommandOptionData[]) - Optional - The options available for the command.
- **type** (ApplicationCommandType.ChatInput) - Optional - The type of the command, specifically `ChatInput`.
````

---

### RPCSpeakingStartDispatchData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSpeakingStartDispatchData%3AInterface

This interface defines the data structure for events where a user starts or stops speaking in Discord's Rich Presence (RPC). It includes the channel ID and user ID associated with the speaking event.

````APIDOC
## Interface RPCSpeakingStartDispatchData

### Description
This interface represents the data structure for Discord RPC events indicating when a user starts or stops speaking. It provides the necessary identifiers to track the context of the speaking activity.

### Method
Not Applicable (Interface Definition)

### Endpoint
Not Applicable (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "channel_id": "123456789012345678",
  "user_id": "987654321098765432"
}
````

### Response

#### Success Response (200)

- **channel_id** (Snowflake) - The ID of the channel where the user is speaking.
- **user_id** (Snowflake) - The ID of the user who started speaking.

#### Response Example

```json
{
  "channel_id": "123456789012345678",
  "user_id": "987654321098765432"
}
```

### See Also

- [Discord RPC Speaking Dispatch Data Structure](https://discord.com/developers/docs/topics/rpc#speakingstart-speakingstop-speaking-dispatch-data-structure)

````

--------------------------------

### Get Gateway Info

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the Discord gateway, including connection URLs and recommended shard counts.

```javascript
external.gateway() : "/gateway"
````

---

### Create a New Role (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleManager%3AClass

Demonstrates how to create a new role in a Discord guild using the RoleManager. It shows examples of creating a basic role, a role with specific data and a reason, and a role with holographic colors.

```javascript
// Create a new role
guild.roles.create().then(console.log).catch(console.error);
```

```javascript
// Create a new role with data and a reason
guild.roles
  .create({
    name: "Super Cool Blue People",
    reason: "we needed a role for Super Cool People",
    colors: {
      primaryColor: Colors.Blue,
    },
  })
  .then(console.log)
  .catch(console.error);
```

```javascript
// Create a role with holographic colors
guild.roles
  .create({
    name: "Holographic Role",
    reason: "Creating a role with holographic effect",
    colors: {
      primaryColor: Constants.HolographicStyle.Primary,
      secondaryColor: Constants.HolographicStyle.Secondary,
      tertiaryColor: Constants.HolographicStyle.Tertiary,
    },
  })
  .then(console.log)
  .catch(console.error);
```

---

### GET /oauth2/@me

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the current authorization. This endpoint provides details about the current user's authorization.

````APIDOC
## GET /oauth2/@me

### Description
Retrieves information about the current authorization.

### Method
GET

### Endpoint
/oauth2/@me

### Response
#### Success Response (200)
- **user** (object) - The user object.

#### Response Example
```json
{
  "id": "user_id",
  "username": "username"
}
````

````

--------------------------------

### RPCGetSkusResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetSkusResult%3AInterface

Defines the structure for the result of an RPC command to get SKUs.

```APIDOC
## Interface RPCGetSkusResult

### Description
Represents the result of an RPC command to retrieve SKU information.

### Properties

#### cmd
- **cmd** (Cmd) - The command type.
  Inherited from: BaseRPCMessage

#### data
- **data** (RPCGetSkusResultData) - The data payload containing SKU information.

#### nonce
- **nonce** (string) - A unique identifier for the command.
  Inherited from: RPCCommandMessage

### Request Example
```json
{
  "cmd": "GET_SKUS",
  "data": {},
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (200)

- **cmd** (Cmd) - The command type, expected to be 'GET_SKUS_RESPONSE'.
- **data** (RPCGetSkusResultData) - An object containing SKU details.
- **nonce** (string) - The nonce corresponding to the request.

#### Response Example

```json
{
  "cmd": "GET_SKUS_RESPONSE",
  "data": {
    " 1234567890": {
      "name": "Example SKU",
      "price": 1000,
      "currency": "USD"
    }
  },
  "nonce": "some-unique-nonce"
}
```

````

--------------------------------

### Launch Activity with Response (Discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ModalSubmitInteraction%3Aclass

The `launchActivity()` method initiates an application's activity, with an option to receive a response. This is used for starting specific in-app processes. It requires `LaunchActivityOptions` and returns a `Promise`.

```javascript
interaction.launchActivity({ withResponse: true })
  .then((response) => console.log('Activity launched with response:', response))
  .catch(console.error);
````

---

### SimpleShardingStrategy API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/SimpleShardingStrategy%3AClass

This section details the methods available for the SimpleShardingStrategy class, used for managing WebSocket shards.

```APIDOC
## Class: SimpleShardingStrategy

### Description

A simple strategy that spawns shards in the current process.

### Methods

#### `connect()`

- **Description**: Initializes all the shards.
- **Method**: `connect`
- **Returns**: `Promise<void>`

#### `destroy(options?: Omit<WebSocketShardDestroyOptions, 'recover'>)`

- **Description**: Destroys all the shards.
- **Method**: `destroy`
- **Parameters**:
  - `options` (Omit<WebSocketShardDestroyOptions, 'recover'>) - Optional - Options for destroying shards.
- **Returns**: `Promise<void>`

#### `fetchStatus()`

- **Description**: Fetches the status of all the shards.
- **Method**: `fetchStatus`
- **Returns**: `Promise<Collection<number, WebSocketShardStatus>>`

#### `send(shardId: number, payload: GatewaySendPayload)`

- **Description**: Sends a payload to a specific shard.
- **Method**: `send`
- **Parameters**:
  - `shardId` (number) - Required - The ID of the shard to send the payload to.
  - `payload` (GatewaySendPayload) - Required - The payload to send.
- **Returns**: `Promise<void>`

#### `spawn(shardIds: number[])`

- **Description**: Spawns all the specified shards.
- **Method**: `spawn`
- **Parameters**:
  - `shardIds` (number[]) - Required - An array of shard IDs to spawn.
- **Returns**: `Promise<void>`
```

---

### LimitedCollection.ensure() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Demonstrates the use of the ensure() method to retrieve a value by key or set a default value if the key does not exist, using a provided generator function.

```javascript
collection.ensure(guildId, () => defaultGuildConfig);
```

---

### Get Current User API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPICurrentUserResult%3ATypeAlias

Retrieves information about the currently authenticated user.

````APIDOC
## GET /users/@me

### Description
Retrieves the current user's data.

### Method
GET

### Endpoint
/users/@me

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **APIUser** (object) - The current user's data.

#### Response Example
```json
{
  "id": "123456789012345678",
  "username": "ExampleUser",
  "discriminator": "1234",
  "public_flags": 1,
  "flags": 0,
  "locale": "en-US",
  "mfa_enabled": false,
  "premium_type": 0
}
````

````

--------------------------------

### RPCGetSelectedVoiceChannelArgs Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetSelectedVoiceChannelArgs%3AInterface

Defines the arguments structure for the RPC method to get the currently selected voice channel.

```APIDOC
## Interface RPCGetSelectedVoiceChannelArgs

### Description
This interface defines the structure for arguments used when calling the RPC method to retrieve the user's currently selected voice channel.

### Method
N/A (This is an interface definition, not an API endpoint)

### Endpoint
N/A

### Parameters
This interface does not define parameters directly, but it represents the expected arguments for an RPC call.

### Request Example
```json
{
  "command": "GET_SELECTED_VOICE_CHANNEL",
  "args": {},
  "evt_id": 1
}
````

### Response

#### Success Response (200)

This interface is for the request arguments, the response structure would be defined separately for the `GET_SELECTED_VOICE_CHANNEL` command.

#### Response Example

```json
{
  "cmd": "GET_SELECTED_VOICE_CHANNEL",
  "evt_id": 1,
  "data": {
    "channel_id": "123456789012345678",
    "guild_id": "987654321098765432"
  }
}
```

### See Also

- https://discord.com/developers/docs/topics/rpc#getselectedvoicechannel

````

--------------------------------

### Guild Onboarding Structure

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildOnboarding%3AInterface

Details the structure of the Guild Onboarding object in the Discord API, as represented by discord.js.

```APIDOC
## Interface APIGuildOnboarding

### Description
Represents the Guild Onboarding object structure within the Discord API.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Properties
#### default_channel_ids (Snowflake[]) - Required - Channel ids that members get opted into automatically.
#### enabled (boolean) - Required - Whether onboarding is enabled in the guild.
#### guild_id (Snowflake) - Required - Id of the guild this onboarding is part of.
#### mode (GuildOnboardingMode) - Required - Current mode of onboarding.
#### prompts (APIGuildOnboardingPrompt[]) - Required - Prompts shown during onboarding and in customize community.

### Request Example
```json
{
  "default_channel_ids": [
    "123456789012345678",
    "987654321098765432"
  ],
  "enabled": true,
  "guild_id": "112233445566778899",
  "mode": 1,
  "prompts": [
    {
      "id": "111111111111111111",
      "title": "What do you want to do?",
      "options": [
        {
          "id": "222222222222222222",
          "title": "Create a project",
          "description": "Let us know what you want to build!",
          "emoji": {
            "name": "🚀",
            "id": null
          }
        }
      ],
      "type": 0,
      "single_select": false,
      "required": false
    }
  ]
}
````

### Response

#### Success Response (200)

- **default_channel_ids** (Snowflake[]) - Channel ids that members get opted into automatically.
- **enabled** (boolean) - Whether onboarding is enabled in the guild.
- **guild_id** (Snowflake) - Id of the guild this onboarding is part of.
- **mode** (GuildOnboardingMode) - Current mode of onboarding.
- **prompts** (APIGuildOnboardingPrompt[]) - Prompts shown during onboarding and in customize community.

#### Response Example

```json
{
  "default_channel_ids": ["123456789012345678", "987654321098765432"],
  "enabled": true,
  "guild_id": "112233445566778899",
  "mode": 1,
  "prompts": [
    {
      "id": "111111111111111111",
      "title": "What do you want to do?",
      "options": [
        {
          "id": "222222222222222222",
          "title": "Create a project",
          "description": "Let us know what you want to build!",
          "emoji": {
            "name": "🚀",
            "id": null
          }
        }
      ],
      "type": 0,
      "single_select": false,
      "required": false
    }
  ]
}
```

````

--------------------------------

### createInvite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Creates an invite to this guild channel.

```APIDOC
## createInvite

### Description
Creates an invite to this guild channel.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (InviteCreateOptions) - Optional - Options for creating the invite.
  - **temporary** (boolean) - Optional - Whether the invite should be temporary.
  - **maxAge** (number) - Optional - The maximum age of the invite in seconds.
  - **maxUses** (number) - Optional - The maximum number of uses for the invite.
  - **unique** (boolean) - Optional - Whether the invite should be unique.
  - **reason** (string) - Optional - The reason for creating the invite.

### Request Example
```javascript
// Create an invite to a channel
channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<Invite>)

- **Invite** - The created invite object.

#### Response Example

```json
{
  "code": "AbCdEf",
  "guildId": "guildId",
  "channelId": "channelId"
}
```

````

--------------------------------

### Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Utility methods for channel objects.

```APIDOC
## Utility Methods

### toJSON(...props)

**Description**: Converts the channel object to a JSON representation.

**Method**: N/A (Method Call)

**Endpoint**: N/A

**Parameters**:

*   **...props** (Record<string, boolean | string>[]) - Optional - Properties to include in the JSON output.

### toString()

**Description**: When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.

**Method**: N/A (Method Call)

**Endpoint**: N/A

### valueOf()

**Description**: Returns the primitive value of the channel object.

**Method**: N/A (Method Call)

**Endpoint**: N/A
````

---

### Manage Webhooks - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Provides routes for managing webhooks, including getting, updating, and deleting them. Supports webhooks with or without tokens.

```javascript
function webhook(webhookId, webhookToken) {
  if (webhookToken) {
    return `/webhooks/${webhookId}/${webhookToken}`;
  } else {
    return `/webhooks/${webhookId}`;
  }
}
```

---

### RESTAPIGuildOnboardingPrompt Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTAPIGuildOnboardingPrompt%3AInterface

Documentation for the RESTAPIGuildOnboardingPrompt interface, which defines the structure of a guild onboarding prompt in the Discord API.

````APIDOC
## Interface RESTAPIGuildOnboardingPrompt

### Description
Defines the structure of a guild onboarding prompt in the Discord API. It extends a partial, undefined-added version of `APIGuildOnboardingPrompt` (excluding certain properties) and picks specific properties.

### Properties

#### options
- **options** (RESTAPIGuildOnboardingPromptOption[]) - Required - Options available within the prompt.

### Request Example
```json
{
  "options": [
    {
      "title": "Welcome Channel",
      "description": "Direct new members to a welcome channel.",
      "channel_id": "123456789012345678"
    }
  ]
}
````

### Response

#### Success Response (200)

- **options** (RESTAPIGuildOnboardingPromptOption[]) - Options available within the prompt.

#### Response Example

```json
{
  "options": [
    {
      "title": "Welcome Channel",
      "description": "Direct new members to a welcome channel.",
      "channel_id": "123456789012345678"
    }
  ]
}
```

````

--------------------------------

### Fetch Guild Soundboard Sounds (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildManager%3AClass

An example demonstrating how to fetch soundboard sounds for specified guilds using the GuildManager. It takes an object with guildIds and returns a Promise resolving to a Collection of soundboard sounds.

```javascript
// Fetch soundboard sounds for multiple guilds
const soundboardSounds = await client.guilds.fetchSoundboardSounds({
 guildIds: ['123456789012345678', '987654321098765432'],
})

console.log(soundboardSounds.get('123456789012345678'));

````

---

### GatewayTypingStartDispatch

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayTypingStartDispatch%3ATypeAlias

Represents the GatewayTypingStartDispatch type from discord.js, which is used for handling typing start events in Discord.

````APIDOC
## GatewayTypingStartDispatch

### Description
This type alias represents the data payload for the `TypingStart` event in the Discord Gateway API, as implemented by discord.js.

### Method
N/A (This is a type definition, not an API endpoint)

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
#### Success Response (N/A)
- **_DataPayload** (object) - The data structure for the typing start event.
  - **op** (number) - The opcode for the event.
  - **d** (object) - The event data.
    - **channel_id** (string) - The ID of the channel where typing started.
    - **user_id** (string) - The ID of the user who started typing.
    - **guild_id** (string) - Optional. The ID of the guild where typing started.
    - **member** (object) - Optional. The member object for the user in the guild.
    - **user** (object) - Optional. The user object.

#### Response Example
```json
{
  "op": 0,
  "d": {
    "channel_id": "123456789012345678",
    "user_id": "987654321098765432",
    "guild_id": "112233445566778899",
    "member": {
      "user": {
        "username": "ExampleUser",
        "discriminator": "1234",
        "id": "987654321098765432",
        "avatar": null
      },
      "roles": [],
      "premium_since": null,
      "nick": null,
      "mute": false,
      "joined_at": "2023-01-01T00:00:00.000Z",
      "deaf": false
    },
    "user": {
      "username": "ExampleUser",
      "discriminator": "1234",
      "id": "987654321098765432",
      "avatar": null
    }
  }
}
````

See also: https://discord.com/developers/docs/topics/gateway-events#typing-start

````

--------------------------------

### Execute Webhook Query Parameters

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIWebhookWithTokenQuery%3AInterface

This section details the query parameters available for executing a webhook with a token.

```APIDOC
## GET /webhooks/:webhook.token

### Description
This endpoint allows for the execution of a webhook using its token. It supports various query parameters to control message sending behavior and thread interaction.

### Method
GET

### Endpoint
/webhooks/:webhook.token

### Parameters
#### Query Parameters
- **thread_id** (Snowflake) - Optional - Send a message to the specified thread within a webhook's channel. The thread will automatically be unarchived. Available only if the `thread_name` JSON body property is not specified.
- **wait** (boolean) - Optional - Waits for server confirmation of message send before response, and returns the created message body (when `false` a message that is not saved does not return an error). Defaults to `false`.
- **with_components** (boolean) - Optional - Whether to allow sending (non-interactive) components for non-application-owned webhooks (ignored for application-owned webhooks). Defaults to `false`.

### Request Example
```json
{
  "example": "No request body for GET request"
}
````

### Response

#### Success Response (200)

- **message** (object) - The created message body if `wait` is true.

#### Response Example

```json
{
  "example": "{\"id\": \"...\", \"channel_id\": \"...\", \"author\": { ... }, \"content\": \"...\", ... }"
}
```

````

--------------------------------

### Get Soundboard Sound

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches a soundboard sound file. Requires sound ID.

```javascript
soundboardSound: (soundId: Snowflake) => `/soundboard-sounds/${soundId}`
````

---

### Get Gateway Information

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGatewayInfo%3AInterface

Retrieves information about the Discord API Gateway, including the WSS URL for establishing a WebSocket connection.

````APIDOC
## GET /gateway

### Description
Retrieves the gateway information, including the WebSocket URL for connecting to the Discord gateway.

### Method
GET

### Endpoint
/gateway

### Parameters
#### Query Parameters
None

### Request Example
None

### Response
#### Success Response (200)
- **url** (string) - The WSS URL that can be used for connecting to the gateway.

#### Response Example
```json
{
  "url": "wss://gateway.discord.gg/?v=9&encoding=json"
}
````

````

--------------------------------

### ShowModalOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ShowModalOptions%3AInterface

Documentation for the ShowModalOptions interface, used for displaying modals in response to interactions.

```APIDOC
## Interface: ShowModalOptions

### Description
Options for showing a modal in response to a BaseInteraction.

### Properties

#### withResponse (boolean) - Optional
Whether to return an InteractionCallbackResponse as the response.
````

---

### GatewayActivityTimestamps Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayActivityTimestamps%3AInterface

Defines the structure for timestamps within a Gateway Activity object, used to indicate when an activity starts or ends.

````APIDOC
## Interface GatewayActivityTimestamps

### Description
Represents the timestamps for an activity in Discord, indicating when it started and ended.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **end** (number) - Optional - Unix time (in milliseconds) of when the activity ends.
- **start** (number) - Optional - Unix time (in milliseconds) of when the activity started.

### Request Example
```json
{
  "end": 1678886400000,
  "start": 1678882800000
}
````

### Response

#### Success Response (N/A - Interface Definition)

- **end** (number) - Unix time (in milliseconds) of when the activity ends.
- **start** (number) - Unix time (in milliseconds) of when the activity started.

#### Response Example

```json
{
  "end": 1678886400000,
  "start": 1678882800000
}
```

````

--------------------------------

### Launch Activity

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChatInputCommandInteraction%3Aclass

Launches the application's activity if it is enabled.

```APIDOC
## Launch Activity

### Description
Launches this application's activity, if enabled.

### Method

- **launchActivity(options: LaunchActivityOptions & { withResponse: true } = {}) : Promise<InteractionCallbackResponse<BooleanCache<Cached>>>**
  - **Description**: Launches this application's activity, if enabled.
````

---

### Get Guild Bans

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of all banned users from a guild. This is useful for moderation and reviewing ban history.

```javascript
external.guildBans(
  guildId: Snowflake
) : `/guilds/${string}/bans`
```

---

### RESTGetAPIStageInstanceResult Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIStageInstanceResult%3ATypeAlias

Defines the structure for the result of a GET request to retrieve a stage instance.

````APIDOC
## Type Alias: RESTGetAPIStageInstanceResult

### Description
This type alias represents the result of the `GET /stage-instances` endpoint, which retrieves information about a stage instance.

### Method
GET

### Endpoint
`/stage-instances`

### Parameters
#### Query Parameters
- **guild_id** (Snowflake) - Required - The ID of the guild for which to retrieve the stage instance.
- **channel_id** (Snowflake) - Required - The ID of the channel for which to retrieve the stage instance.

### Response
#### Success Response (200)
- **id** (Snowflake) - The ID of the stage instance.
- **guild_id** (Snowflake) - The ID of the guild.
- **channel_id** (Snowflake) - The ID of the channel.
- **topic** (string) - The topic of the stage instance.
- **privacy_level** (integer) - The privacy level of the stage instance.
- **discoverable_disabled** (boolean) - Whether discoverability is disabled for the stage instance.

#### Response Example
```json
{
  "id": "123456789012345678",
  "guild_id": "987654321098765432",
  "channel_id": "112233445566778899",
  "topic": "Discussion about API documentation",
  "privacy_level": 1,
  "discoverable_disabled": false
}
````

### See Also

- https://discord.com/developers/docs/resources/stage-instance#get-stage-instance

````

--------------------------------

### FetchGuildSoundboardSoundsOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildSoundboardSoundsOptions%3AInterface

Defines the options available when fetching soundboard sounds for a guild.

```APIDOC
## Interface: FetchGuildSoundboardSoundsOptions

### Description
Options used to fetch soundboard sounds from Discord.

### Properties

#### cache : boolean
Whether to cache the fetched soundboard sounds.
````

---

### Define RPCCommandGetVoiceSettingsPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetVoiceSettingsPayload%3AInterface

Defines the interface for the RPCCommandGetVoiceSettingsPayload in discord.js. This interface extends RPCCommandMessage and specifies the structure for arguments and commands related to getting voice settings.

```typescript
export interface RPCCommandGetVoiceSettingsPayload extends RPCCommandMessage<RPCCommands.GetVoiceSettings>

```

---

### MakeURLOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MakeURLOptions%3AInterface

Details the options available for constructing CDN URLs within the discord.js library.

```APIDOC
## Interface MakeURLOptions

The options to use when making a CDN URL.

### Properties

#### `allowedExtensions` (readonly string[]) - Optional

The allowed extensions that can be used.

#### `animated` (boolean) - Optional

Whether to use the `animated` query parameter.

#### `base` (string) - Optional

The base URL. Defaults to `DefaultRestOptions.cdn`.

#### `extension` (string | undefined) - Optional

The extension to use for the image URL. Defaults to 'webp'.

#### `size` (ImageSize) - Optional

The size specified in the image URL.
```

---

### isReady()

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Checks if the client has logged in and is ready to interact with the Discord API.

````APIDOC
## GET /isReady

### Description
Returns whether the client has logged in, indicative of being able to access properties such as `user` and `application`.

### Method
GET

### Endpoint
/isReady

### Parameters
None

### Request Example
```javascript
if (client.isReady()) {
  console.log('Client is ready!');
} else {
  console.log('Client is not ready yet.');
}
````

### Response

#### Success Response (200)

- **ready** (boolean) - True if the client is ready, false otherwise.

````

--------------------------------

### RPCGetUserResultData Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetUserResultData%3ATypeAlias

Defines the structure for the result data when getting a user via RPC.

```APIDOC
## Type Alias: RPCGetUserResultData

### Description
Represents the data structure returned when retrieving user information through an RPC call. This type is an alias for `APIUser`.

### Method
N/A (Type definition)

### Endpoint
N/A (Type definition)

### Parameters
N/A (Type definition)

### Request Example
N/A (Type definition)

### Response
#### Success Response (N/A)
- **APIUser** (object) - The user object conforming to the APIUser structure.

#### Response Example
```json
{
  "id": "123456789012345678",
  "username": "ExampleUser",
  "discriminator": "0001",
  "avatar": "a_abcdef1234567890abcdef1234567890",
  "public_flags": 1
}
````

````

--------------------------------

### Define RPCCommandStartPurchasePayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandStartPurchasePayload%3AInterface

Defines the TypeScript interface for the RPCCommandStartPurchasePayload, which extends RPCCommandMessage. This interface specifies the structure for arguments, command type, and nonce required for starting a purchase via RPC.

```typescript
export interface RPCCommandStartPurchasePayload extends RPCCommandMessage<RPCCommands.StartPurchase>

````

---

### Fetch Guild Application Command Options Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildApplicationCommandFetchOptions%3AInterface

Defines the options for fetching guild application commands, extending base application command options.

````APIDOC
## Interface: FetchGuildApplicationCommandFetchOptions

### Description
Defines the options for fetching guild application commands. This interface extends `Omit<FetchApplicationCommandOptions, 'guildId'>`, meaning it includes all properties of `FetchApplicationCommandOptions` except for `guildId`.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
```json
{
  "example": "Interface definition, no direct request example"
}
````

### Response

#### Success Response (200)

N/A (Interface Definition)

#### Response Example

```json
{
  "example": "Interface definition, no direct response example"
}
```

````

--------------------------------

### Get Guild Invites

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of all active invites for a guild. This is useful for tracking invite sources and managing server access.

```javascript
external.guildInvites(
  guildId: Snowflake
) : `/guilds/${string}/invites`
````

---

### RPCOpenOverlayVoiceSettingsArgs Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCOpenOverlayVoiceSettingsArgs%3AInterface

Defines the arguments for opening overlay voice settings in the Discord API.

````APIDOC
## Interface RPCOpenOverlayVoiceSettingsArgs

### Description
Represents the arguments required to open overlay voice settings.

### Properties

#### Path Parameters

* None

#### Query Parameters

* None

#### Request Body

* **pid** (number) - Required - The process ID for the overlay.

### Request Example
```json
{
  "pid": 12345
}
````

### Response

#### Success Response (200)

- **pid** (number) - The process ID associated with the voice settings.

#### Response Example

```json
{
  "pid": 12345
}
```

````

--------------------------------

### Get Guild Widget Image

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildWidgetImageQuery%3AInterface

Retrieves the widget image for a guild. The widget image can be customized by style.

```APIDOC
## GET /guilds/{guild.id}/widget.png

### Description
Retrieves the widget image for a guild. The widget image can be customized by style.

### Method
GET

### Endpoint
`/guilds/{guild.id}/widget.png`

### Parameters
#### Query Parameters
- **style** (GuildWidgetStyle) - Optional - Style of the widget image returned. Defaults to "shield".

### Request Example
```json
{
  "example": "GET /guilds/1234567890/widget.png?style=banner"
}
````

### Response

#### Success Response (200)

- **image** (Buffer) - The widget image data.

#### Response Example

```json
{
  "example": "[Binary image data]"
}
```

````

--------------------------------

### GuildTemplate toString() Method Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildTemplate%3AClass

Demonstrates the usage of the toString() method for the GuildTemplate class. When concatenated with a string, it automatically returns the template's code.

```javascript
// Logs: Template: FKvmczH2HyUf
console.log(`Template: ${guildTemplate}!`);
````

---

### Iterating Through a Collection (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Provides an example of iterating over a collection using the `each` method, similar to `Map.forEach`. It allows performing an action for each key-value pair and returns the collection itself for chaining.

```javascript
collection
  .each((user) => console.log(user.username))
  .filter((user) => user.bot)
  .each((user) => console.log(user.username));
```

---

### RPCReadyDispatch Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCReadyDispatch%3AInterface

Documentation for the RPCReadyDispatch interface, which extends BaseRPCMessage and is used for dispatching ready events.

````APIDOC
## Interface: RPCReadyDispatch

### Description
Represents a dispatch event for when the RPC client is ready. It extends the base RPC message structure with specific data for the ready event.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Properties
- **cmd** (Cmd) - Required - The command type, expected to be `RPCCommands.Dispatch`.
- **data** (RPCReadyDispatchData) - Required - The data payload specific to the ready event.
- **evt** (RPCEvents.Ready) - Required - The event type, expected to be `RPCEvents.Ready`.

### Request Example
```json
{
  "cmd": "DISPATCH",
  "data": { ... },
  "evt": "READY"
}
````

### Response

#### Success Response (N/A for interface definition)

#### Response Example

```json
{
  "cmd": "DISPATCH",
  "data": {
    "v": 1,
    "config": { ... },
    "user": { ... },
    "guilds": [ ... ],
    "session_id": "...",
    "heartbeat_interval": 30000
  },
  "evt": "READY"
}
```

````

--------------------------------

### RESTPostAPIChannelThreadsResult Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelThreadsResult%3ATypeAlias

Defines the possible return types for starting a thread without a message in a channel.

```APIDOC
## Type Alias: RESTPostAPIChannelThreadsResult

### Description
This type alias represents the possible results when starting a thread without sending an initial message in a Discord channel. It can be one of several thread channel types.

### Method
N/A (Type definition)

### Endpoint
N/A (Type definition)

### Parameters
N/A (Type definition)

### Request Example
N/A (Type definition)

### Response
#### Union Members
- **APIAnnouncementThreadChannel** (object) - Represents an announcement thread channel.
- **APIPrivateThreadChannel** (object) - Represents a private thread channel.
- **APIPublicThreadChannel** (object) - Represents a public thread channel.

### Response Example
```json
{
  "id": "123456789012345678",
  "guild_id": "876543210987654321",
  "owner_id": "112233445566778899",
  "name": "my-thread",
  "is_archived": false,
  "is_locked": false,
  "is_private": false,
  "auto_archive_duration": 60,
  "created_timestamp": "2023-10-27T10:00:00.000Z",
  "thread_metadata": {
    "archived_at": null,
    "archive_duration": 60,
    "locked": false
  }
}
````

See also: https://discord.com/developers/docs/resources/channel#start-thread-without-message

````

--------------------------------

### GET /guilds/{guild.id}/widget.png

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the widget image for a specific guild. This endpoint provides a visual representation of the guild's widget.

```APIDOC
## GET /guilds/{guild.id}/widget.png

### Description
Retrieves the widget image for a guild.

### Method
GET

### Endpoint
/guilds/{guild.id}/widget.png

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

### Response
#### Success Response (200)
- **image** (image) - The widget image.

#### Response Example
(image data)
````

---

### Get Guild Roles API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildRolesResult%3ATypeAlias

Retrieves a list of all roles for a given guild.

````APIDOC
## GET /guilds/{guild.id}/roles

### Description
Retrieves a list of all roles for a given guild.

### Method
GET

### Endpoint
/guilds/{guild.id}/roles

### Parameters
#### Path Parameters
- **guild.id** (snowflake) - Required - The ID of the guild to retrieve roles from.

### Response
#### Success Response (200)
- **APIRole[]** (array) - An array of APIRole objects representing the roles in the guild.

#### Response Example
```json
[
  {
    "id": "123456789012345678",
    "name": "Admin",
    "color": 16711680,
    "hoist": true,
    "position": 1,
    "permissions": "8",
    "managed": false,
    "mentionable": false,
    "tags": {}
  }
]
````

See also: https://discord.com/developers/docs/resources/guild#get-guild-roles

````

--------------------------------

### Create Application Command

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIContextMenuApplicationCommandsJSONBody%3AInterface

This section details the structure for creating application commands, specifically context menu commands for messages and users.

```APIDOC
## POST /applications/:application/commands

### Description
Creates a new application command, including context menu commands for messages and users.

### Method
POST

### Endpoint
/applications/:application/commands

### Parameters
#### Path Parameters
- **application** (string) - Required - The ID of the application.

#### Query Parameters
None

#### Request Body
- **type** (ApplicationCommandType) - Required - The type of the application command. Can be `ApplicationCommandType.Message` or `ApplicationCommandType.User` for context menu commands.

### Request Example
```json
{
  "name": "User Info",
  "type": 2
}
````

### Response

#### Success Response (200)

- **id** (Snowflake) - The ID of the application command.
- **application_id** (Snowflake) - The ID of the application the command belongs to.
- **name** (string) - The name of the application command.
- **type** (ApplicationCommandType) - The type of the application command.

#### Response Example

```json
{
  "id": "123456789012345678",
  "application_id": "987654321098765432",
  "name": "User Info",
  "type": 2
}
```

````

--------------------------------

### Fetch all application commands in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildApplicationCommandManager%3AClass

Shows how to fetch all application commands for a guild by calling the `fetch` method without an ID. This returns a Promise resolving to a Collection of ApplicationCommand objects.

```javascript
// Fetch all commands
guild.commands.fetch()
  .then(commands => console.log(`Fetched ${commands.size} commands`))
  .catch(console.error);

````

---

### Define APIGuildOnboardingPromptOption Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildOnboardingPromptOption%3AInterface

Defines the TypeScript interface for an onboarding prompt option within a Discord guild. This interface specifies the structure and data types for each property of the option, including channel IDs, description, emoji, role IDs, and title.

```typescript
export interface APIGuildOnboardingPromptOption
```

---

### Get Guild Active Threads

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves all active threads within a specific guild. This is useful for monitoring ongoing conversations.

```javascript
external.guildActiveThreads(
  guildId: Snowflake
) : `/guilds/${string}/threads/active`
```

---

### GET /app-assets/{application.id}/store/{asset.id}.{png|jpeg|webp}}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves an asset from an application's store page. Supports PNG, JPEG, and WebP formats. Defaults to PNG.

```APIDOC
## GET /app-assets/{application.id}/store/{asset.id}.{format}

### Description
Retrieves an asset from an application's store page. This route supports PNG, JPEG, and WebP formats. The default format is PNG.

### Method
GET

### Endpoint
`/app-assets/{applicationId}/store/{assetId}.{format}`

### Parameters
#### Path Parameters
- **applicationId** (Snowflake) - Required - The ID of the application.
- **assetId** (string) - Required - The ID of the asset.
- **format** (Format) - Optional - The desired image format (e.g., png, jpeg, webp). Defaults to PNG.

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested store asset image.

#### Response Example
(Binary image data)
```

---

### Get Guild Prune Count

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildPruneCountQuery%3AInterface

Retrieves the number of members that would be pruned from a guild based on the provided parameters.

```APIDOC
## GET /guilds/:guild/prune

### Description
Retrieves the number of members that would be pruned from a guild. This endpoint is useful for estimating the impact of a prune operation before executing it.

### Method
GET

### Endpoint
`/guilds/:guild/prune`

### Parameters
#### Path Parameters
- **guild** (snowflake) - Required - The ID of the guild to get prune count for.

#### Query Parameters
- **days** (number) - Optional - Defaults to 7. The number of days to count prune for (1 or more).
- **include_roles** (string) - Optional - A comma-delimited string of role IDs to include in the prune count. If not provided, all members will be considered.

### Request Example
```

GET /guilds/123456789012345678/prune?days=30&include_roles=987654321098765432,112233445566778899

````

### Response
#### Success Response (200)
- **prune_count** (number) - The number of members that would be pruned from the guild.

#### Response Example
```json
{
  "prune_count": 150
}
````

````

--------------------------------

### createInvite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Creates an invite to this guild channel.

```APIDOC
## createInvite

### Description
Creates an invite to this guild channel.

### Method
`createInvite`

### Parameters
#### Query Parameters
- **options** (InviteCreateOptions) - Optional - Options for creating the invite.

### Request Example
```javascript
// Create an invite to a channel
channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<Invite>)

- **Invite**: The created invite object.

#### Response Example

```json
{
  "code": "AbCdEf"
}
```

````

--------------------------------

### RESTGetAPIGuildResult Type Alias

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildResult%3ATypeAlias

Defines the type for the result of a REST GET request for a guild, aliasing it to APIGuild.

```APIDOC
## Type Alias: RESTGetAPIGuildResult

### Description
This type alias represents the structure of the data returned when fetching guild information via the Discord REST API.

### Method
N/A (Type definition)

### Endpoint
N/A (Type definition)

### Parameters
N/A

### Request Example
N/A

### Response
#### Success Response (200)
- **APIGuild** (object) - The guild object returned by the API.

### Response Example
```json
{
  "id": "123456789012345678",
  "name": "Example Guild",
  "icon": "a_hash",
  "features": ["COMMUNITY"],
  "member_count": 100
}
````

See also: https://discord.com/developers/docs/resources/guild#get-guild

````

--------------------------------

### REST API - Get Webhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIWebhookResult%3ATypeAlias

Retrieves information about a specific webhook using its ID.

```APIDOC
## GET /webhooks/{webhook.id}

### Description
Retrieves a webhook by its ID.

### Method
GET

### Endpoint
`/webhooks/{webhook.id}`

### Parameters
#### Path Parameters
- **webhook.id** (snowflake) - Required - The ID of the webhook to retrieve.

### Response
#### Success Response (200)
- **APIWebhook** (object) - The webhook object.

#### Response Example
```json
{
  "id": "123456789012345678",
  "name": "My Webhook",
  "type": 1,
  "guild_id": "987654321098765432",
  "channel_id": "112233445566778899",
  "token": "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789"
}
````

````

--------------------------------

### Get Sticker

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a sticker. Supports PNG, Lottie, and GIF formats. Requires sticker ID and format.

```javascript
sticker: (stickerId: Snowflake, format: Format) => `/stickers/${stickerId}.${format}`
````

---

### fetchStickerPacks(options?)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches available sticker packs. Can fetch all packs or a specific pack by ID.

````APIDOC
## GET /fetchStickerPacks

### Description
Obtains the list of available sticker packs.

### Method
GET

### Endpoint
/fetchStickerPacks

### Parameters
#### Query Parameters
- **packId** (Snowflake) - Optional - The ID of the specific sticker pack to fetch.

### Request Example
```javascript
// Fetch all sticker packs
client.fetchStickerPacks()
  .then(packs => console.log(`Available sticker packs are: ${packs.map(pack => pack.name).join(', ')}`))
  .catch(console.error);

// Fetch a specific sticker pack
client.fetchStickerPacks({ packId: '751604115435421716' })
  .then(pack => console.log(`Sticker pack name: ${pack.name}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **packs** (Collection<Snowflake, StickerPack> | StickerPack) - A collection of sticker packs, or a single sticker pack if a packId was provided.

````

--------------------------------

### Message Thread Information

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayMessageUpdateDispatchData%3AInterface

Indicates if a thread was started from a specific message and provides the thread's channel object.

```APIDOC
## GET /messages/{channel.id}/{message.id}

### Description
Retrieves message data, including optional thread information if a thread was initiated from the message.

### Method
GET

### Endpoint
`/messages/{channel.id}/{message.id}`

### Parameters
#### Path Parameters
- **channel.id** (Snowflake) - Required - The ID of the channel the message is in.
- **message.id** (Snowflake) - Required - The ID of the message.

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **thread** (APIChannel) - Optional - Sent if a thread was started from this message.

#### Response Example
```json
{
  "thread": {
    "id": "4444444444",
    "name": "Discussion Thread",
    "type": 11,
    "guild_id": "5555555555"
  }
}
````

````

--------------------------------

### Fetch all channels from a guild in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Illustrates fetching all channels within a Discord guild using the GuildChannelManager. This example logs the total number of channels found, excluding threads.

```javascript
message.guild.channels.fetch()
  .then(channels => console.log(`There are ${channels.size} channels.`))
  .catch(console.error);

````

---

### RESTPostAPIChannelMessagesThreadsResult Type Alias

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelMessagesThreadsResult%3ATypeAlias

Defines the result type for starting a thread from a message in the Discord API.

````APIDOC
## Type Alias: RESTPostAPIChannelMessagesThreadsResult

### Description
This type alias represents the structure of the response when starting a new thread from an existing message in a Discord channel.

### Method
N/A (This is a type definition, not an API endpoint)

### Endpoint
N/A

### Parameters
N/A

### Request Example
N/A

### Response
#### Success Response (200)
- **APIChannel** (object) - Represents the channel object of the newly created thread.

### Response Example
```json
{
  "id": "123456789012345678",
  "guild_id": "876543210987654321",
  "name": "my-new-thread",
  "type": 10, // GuildThread
  "topic": null,
  "last_message_id": null,
  "rate_limit_per_user": null,
  "position": 0,
  "permission_overwrites": [],
  "nsfw": false,
  "owner_id": "112233445566778899",
  "thread_metadata": {
    "archived": false,
    "auto_archive_duration": 60,
    "archive_timestamp": "2023-10-27T10:00:00.000Z",
    "locked": false,
    "invitable": true,
    "create_timestamp": "2023-10-27T10:00:00.000Z"
  },
  "parent_id": "987654321098765432",
  "message_count": 0,
  "flags": 0,
  "last_pin_timestamp": null
}
````

See also: https://discord.com/developers/docs/resources/channel#start-thread-from-message

````

--------------------------------

### RPCCommandGetVoiceSettingsPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetVoiceSettingsPayload%3AInterface

This interface extends RPCCommandMessage and is used to retrieve voice settings. It defines properties like args, cmd, and nonce.

```APIDOC
## RPCCommandGetVoiceSettingsPayload

### Description
This interface extends RPCCommandMessage and is used to retrieve voice settings. It defines properties like args, cmd, and nonce.

### Properties
- **args**: RPCGetVoiceSettingsArgs
- **cmd**: Cmd (Inherited from: BaseRPCMessage)
- **nonce**: string (Inherited from: RPCCommandMessage)
````

---

### GET /stage-instances/{channel.id} & PATCH /stage-instances/{channel.id} & DELETE /stage-instances/{channel.id}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves, modifies, or deletes a stage instance. This endpoint allows you to manage stage instances.

````APIDOC
## GET /stage-instances/{channel.id} & PATCH /stage-instances/{channel.id} & DELETE /stage-instances/{channel.id}

### Description
Retrieves, modifies, or deletes a stage instance.

### Method
GET, PATCH, DELETE

### Endpoint
/stage-instances/{channel.id}

### Parameters
#### Path Parameters
- **channelId** (Snowflake) - Required - The ID of the channel.

#### Request Body (PATCH)
- **topic** (string) - Optional - The topic of the stage instance.

### Request Example (PATCH)
```json
{
  "topic": "New Topic"
}
````

### Response

#### Success Response (200) (GET & PATCH)

- **stage_instance** (object) - The stage instance object.

#### Response Example (GET & PATCH)

```json
{
  "id": "stage_instance_id",
  "topic": "Topic"
}
```

#### Success Response (204) (DELETE)

- No content.

#### Response Example (DELETE)

{}

````

--------------------------------

### Create Channel Invite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelInviteJSONBody%3AInterface

This section details the request body parameters for creating a channel invite. It outlines the optional fields such as max_age, max_uses, target_application_id, target_type, target_user_id, temporary, and unique, along with their types and descriptions.

```APIDOC
## POST /channels/{channel.id}/invites

### Description
Creates an invite for a specific channel.

### Method
POST

### Endpoint
`/channels/{channel.id}/invites`

### Parameters
#### Query Parameters
- **channel.id** (Snowflake) - Required - The ID of the channel to create an invite for.

#### Request Body
- **max_age** (number | undefined) - Optional - Duration of invite in seconds before expiry, or 0 for never. Defaults to 86400 (24 hours).
- **max_uses** (number | undefined) - Optional - Max number of uses or 0 for unlimited. Defaults to 0.
- **target_type** (InviteTargetType | undefined) - Optional - The type of target for this voice channel invite.
- **temporary** (boolean | undefined) - Optional - Whether this invite only grants temporary membership. Defaults to false.
- **unique** (boolean | undefined) - Optional - If true, don't try to reuse a similar invite. Defaults to false.
- **target_user_id** (Snowflake | undefined) - Optional - The id of the user whose stream to display for this invite. Required if `target_type` is 1. The user must be streaming in the channel.
- **target_application_id** (Snowflake | undefined) - Optional - The id of the embedded application to open for this invite. Required if `target_type` is 2. The application must have the `EMBEDDED` flag.

### Request Example
```json
{
  "max_age": 86400,
  "max_uses": 5,
  "temporary": true,
  "unique": false,
  "target_type": 1,
  "target_user_id": "123456789012345678",
  "target_application_id": "987654321098765432"
}
````

### Response

#### Success Response (200)

- **code** (string) - The invite code.
- **guild** (Guild | APIGuild) - The guild associated with the invite.
- **channel** (Channel | APIChannel) - The channel associated with the invite.
- **inviter** (User | APIUser | null) - The user that created the invite.
- **target_user** (User | APIUser | null) - The user being invited if it is a DMs invite.
- **target_application** (Application | APIApplication | null) - The application associated with the invite.
- **approximate_presence_count** (number | null) - Approximate count of online members in the guild.
- **approximate_member_count** (number | null) - Approximate count of total members in the guild.
- **expires_at** (string | null) - The expiration date of the invite.
- **created_at** (string) - The creation date of the invite.

#### Response Example

```json
{
  "code": "AbCdEfG",
  "guild": {
    "id": "111111111111111111",
    "name": "Example Guild"
  },
  "channel": {
    "id": "222222222222222222",
    "name": "general"
  },
  "inviter": {
    "id": "333333333333333333",
    "username": "ExampleUser",
    "discriminator": "0001",
    "avatar": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
  },
  "expires_at": "2023-10-27T10:00:00.000Z",
  "created_at": "2023-10-26T10:00:00.000Z"
}
```

````

--------------------------------

### GET /guilds/{guild.id}/webhooks

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves webhooks for a specific guild. This endpoint allows you to fetch information about existing webhooks within a guild.

```APIDOC
## GET /guilds/{guild.id}/webhooks

### Description
Retrieves a list of webhooks for a given guild.

### Method
GET

### Endpoint
/guilds/{guild.id}/webhooks

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

### Response
#### Success Response (200)
- **webhooks** (array) - An array of webhook objects.

#### Response Example
```json
[
  {
    "id": "webhook_id",
    "name": "Webhook Name",
    "avatar": "webhook_avatar",
    "channel_id": "channel_id",
    "guild_id": "guild_id"
  }
]
````

````

--------------------------------

### GET /app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a sticker pack banner asset. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{format}

### Description
Retrieves a sticker pack banner asset. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/app-assets/710982414301790216/store/{stickerPackBannerAssetId}.{format}`

### Parameters
#### Path Parameters
- **stickerPackBannerAssetId** (Snowflake) - Required - The asset ID of the sticker pack banner.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested sticker pack banner image.

#### Response Example
(Binary image data)
````

---

### GuildPreview toString Method Example in JavaScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildPreview%3AClass

Demonstrates the usage of the toString method for the GuildPreview class. When concatenated with a string, this method automatically returns the guild's name, simplifying logging and string interpolations.

```javascript
// Logs: Hello from My Guild!
console.log(`Hello from ${previewGuild}!`);
```

---

### Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ButtonInteraction%3AClass

Utility methods for converting interaction objects to their JSON representation or getting their string value.

```APIDOC
## Utility Methods

### Description
Utility methods for interaction objects.

### Methods

- **toJSON(...props: Record<string, boolean | string>[]) : unknown**
  - **Description**: Converts the interaction object to its JSON representation.
  - **Inherited from**: Base
  - **Method**: Any (Overloads available)
  - **Endpoint**: N/A (Method on interaction object)

- **valueOf() : string**
  - **Description**: Returns the string representation of the interaction.
  - **Inherited from**: Base
  - **Method**: Any (Overloads available)
  - **Endpoint**: N/A (Method on interaction object)
```

---

### InviteCreateOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/InviteCreateOptions%3AInterface

This section details the options available when creating an invite to a Discord guild channel using discord.js.

````APIDOC
## Interface InviteCreateOptions

### Description
Options used to create an invite to a guild channel.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Properties
- **maxAge** (number) - Optional - How long the invite should last (in seconds, 0 for forever).
- **maxUses** (number) - Optional - Maximum number of uses.
- **reason** (string) - Optional - The reason for creating the invite.
- **targetApplication** (ApplicationResolvable) - Optional - The embedded application to open for this invite, required if `targetType` is InviteTargetType.Stream, the application must have the InviteTargetType.EmbeddedApplication flag.
- **targetType** (InviteTargetType) - Optional - The type of the target for this voice channel invite.
- **targetUser** (UserResolvable) - Optional - The user whose stream to display for this invite, required if `targetType` is InviteTargetType.Stream, the user must be streaming in the channel.
- **temporary** (boolean) - Optional - Whether members that joined via the invite should be automatically kicked after 24 hours if they have not yet received a role.
- **unique** (boolean) - Optional - Create a unique invite, or use an existing one with similar settings.

### Request Example
```json
{
  "maxAge": 86400,
  "maxUses": 5,
  "reason": "Testing invite creation",
  "temporary": true,
  "unique": false
}
````

### Response

#### Success Response (N/A for interface definition)

This is an interface definition, not an endpoint with a direct response.

#### Response Example

N/A

````

--------------------------------

### REST API: Get Archived Threads

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelUsersThreadsArchivedResult%3AInterface

Retrieves a list of archived public or private threads in a channel that the current user can access.

```APIDOC
## GET /channels/{channel.id}/threads/archived/public

### Description
Retrieves a list of archived public threads in a channel.

### Method
GET

### Endpoint
`/channels/{channel.id}/threads/archived/public`

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to fetch threads from.

#### Query Parameters
- **before** (snowflake) - Optional - Get threads before this ID.
- **after** (snowflake) - Optional - Get threads after this ID.
- **limit** (integer) - Optional - The maximum number of threads to return.

### Response
#### Success Response (200)
- **has_more** (boolean) - Indicates if there are potentially more threads to fetch.
- **members** (APIThreadMember[]) - An array of thread members for the client user in each of the fetched threads.
- **threads** (APIChannel[]) - An array of the threads that were fetched.

#### Response Example
```json
{
  "has_more": false,
  "members": [
    {
      "id": "123456789012345678",
      "user_id": "987654321098765432",
      "join_timestamp": "2023-01-01T12:00:00.000Z",
      "flags": 0
    }
  ],
  "threads": [
    {
      "id": "111111111111111111",
      "guild_id": "222222222222222222",
      "last_message_id": "333333333333333333",
      "name": "Archived Thread",
      "icon_member": null,
      "message_count": 10,
      "parent_id": "444444444444444444",
      "owner_id": "555555555555555555",
      "thread_metadata": {
        "archived": true,
        "archive_timestamp": "2023-01-01T12:00:00.000Z",
        "auto_archive_duration": 60,
        "locked": false,
        "invitable": false,
        "create_timestamp": "2023-01-01T10:00:00.000Z"
      },
      "type": 10,
      "flags": 0,
      "last_pin_timestamp": null
    }
  ]
}
````

## GET /channels/{channel.id}/threads/archived/private

### Description

Retrieves a list of archived private threads in a channel that the current user can access.

### Method

GET

### Endpoint

`/channels/{channel.id}/threads/archived/private`

### Parameters

#### Path Parameters

- **channel.id** (snowflake) - Required - The ID of the channel to fetch threads from.

#### Query Parameters

- **before** (snowflake) - Optional - Get threads before this ID.
- **after** (snowflake) - Optional - Get threads after this ID.
- **limit** (integer) - Optional - The maximum number of threads to return.

### Response

#### Success Response (200)

- **has_more** (boolean) - Indicates if there are potentially more threads to fetch.
- **members** (APIThreadMember[]) - An array of thread members for the client user in each of the fetched threads.
- **threads** (APIChannel[]) - An array of the threads that were fetched.

#### Response Example

```json
{
  "has_more": false,
  "members": [
    {
      "id": "123456789012345678",
      "user_id": "987654321098765432",
      "join_timestamp": "2023-01-01T12:00:00.000Z",
      "flags": 0
    }
  ],
  "threads": [
    {
      "id": "111111111111111111",
      "guild_id": "222222222222222222",
      "last_message_id": "333333333333333333",
      "name": "Archived Private Thread",
      "icon_member": null,
      "message_count": 10,
      "parent_id": "444444444444444444",
      "owner_id": "555555555555555555",
      "thread_metadata": {
        "archived": true,
        "archive_timestamp": "2023-01-01T12:00:00.000Z",
        "auto_archive_duration": 60,
        "locked": false,
        "invitable": false,
        "create_timestamp": "2023-01-01T10:00:00.000Z"
      },
      "type": 11,
      "flags": 0,
      "last_pin_timestamp": null
    }
  ]
}
```

## GET /channels/{channel.id}/users/@me/threads/archived/private

### Description

Retrieves all the private threads in a channel that the current user can access.

### Method

GET

### Endpoint

`/channels/{channel.id}/users/@me/threads/archived/private`

### Parameters

#### Path Parameters

- **channel.id** (snowflake) - Required - The ID of the channel to fetch threads from.

#### Query Parameters

- **before** (snowflake) - Optional - Get threads before this ID.
- **after** (snowflake) - Optional - Get threads after this ID.
- **limit** (integer) - Optional - The maximum number of threads to return.

### Response

#### Success Response (200)

- **has_more** (boolean) - Indicates if there are potentially more threads to fetch.
- **members** (APIThreadMember[]) - An array of thread members for the client user in each of the fetched threads.
- **threads** (APIChannel[]) - An array of the threads that were fetched.

#### Response Example

```json
{
  "has_more": false,
  "members": [
    {
      "id": "123456789012345678",
      "user_id": "987654321098765432",
      "join_timestamp": "2023-01-01T12:00:00.000Z",
      "flags": 0
    }
  ],
  "threads": [
    {
      "id": "111111111111111111",
      "guild_id": "222222222222222222",
      "last_message_id": "333333333333333333",
      "name": "Archived Private Thread for Me",
      "icon_member": null,
      "message_count": 10,
      "parent_id": "444444444444444444",
      "owner_id": "555555555555555555",
      "thread_metadata": {
        "archived": true,
        "archive_timestamp": "2023-01-01T12:00:00.000Z",
        "auto_archive_duration": 60,
        "locked": false,
        "invitable": false,
        "create_timestamp": "2023-01-01T10:00:00.000Z"
      },
      "type": 11,
      "flags": 0,
      "last_pin_timestamp": null
    }
  ]
}
```

````

--------------------------------

### Get Voice Regions - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of available voice regions for Discord. This information is useful for selecting optimal voice server locations.

```javascript
const voiceRegionsRoute = "/voice/regions";
````

---

### Login to Discord (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Logs the client in, establishing a WebSocket connection to Discord. This method requires a token and returns a Promise that resolves with the token upon successful login.

```javascript
client.login("my token");
```

---

### Create a webhook for a channel in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Provides an example of creating an incoming webhook for a specific Discord channel using discord.js. It includes setting the channel ID, webhook name, avatar, and a reason for creation.

```javascript
guild.channels
  .createWebhook({
    channel: "222197033908436994",
    name: "Snek",
    avatar: "https://i.imgur.com/mI8XcpG.jpg",
    reason: "Needed a cool new Webhook",
  })
  .then(console.log)
  .catch(console.error);
```

---

### \_BaseBasePayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/_BaseBasePayload%3AInterface

Documentation for the \_BaseBasePayload interface, detailing its properties and their types.

```APIDOC
## Interface _BaseBasePayload

### Description
Represents a base payload structure used in Discord API interactions.

### Properties

#### d? (unknown) - Optional
Event data associated with the payload.

#### op (GatewayOpcodes) - Required
Opcode for the payload, indicating the type of gateway event.
```

---

### GET /invites/:invite_code

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIInviteQuery%3AInterface

Retrieves information about a specific invite code. This endpoint allows for optional query parameters to include additional details in the response.

````APIDOC
## GET /invites/:invite_code

### Description
Retrieves information about a specific invite code. This endpoint allows for optional query parameters to include additional details in the response.

### Method
GET

### Endpoint
/invites/:invite_code

### Parameters
#### Query Parameters
- **guild_scheduled_event_id** (Snowflake) - Optional - The guild scheduled event to include with the invite.
- **with_counts** (boolean) - Optional - Whether the invite should contain approximate member counts.
- **with_expiration** (boolean) - Optional - Deprecated. Whether the invite should contain the expiration date. The expiration date is always returned, regardless of this query parameter.

### Request Example
```json
{
  "example": "GET /invites/discord.gg/example?with_counts=true&guild_scheduled_event_id=123456789012345678"
}
````

### Response

#### Success Response (200)

- **guild_scheduled_event_id** (Snowflake) - The guild scheduled event associated with the invite.
- **with_counts** (boolean) - Indicates if approximate member counts are included.
- **with_expiration** (boolean) - Indicates if the expiration date is included (always true).

#### Response Example

```json
{
  "example": {
    "guild_scheduled_event_id": "123456789012345678",
    "with_counts": true,
    "with_expiration": true
  }
}
```

````

--------------------------------

### GET /guilds/{guild.id}/widget.json

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the widget JSON data for a specific guild. This endpoint provides structured data about the guild's widget.

```APIDOC
## GET /guilds/{guild.id}/widget.json

### Description
Retrieves the widget JSON data for a guild.

### Method
GET

### Endpoint
/guilds/{guild.id}/widget.json

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

### Response
#### Success Response (200)
- **widget** (object) - The widget data.

#### Response Example
```json
{
  "name": "Guild Name",
  "members": [
    {
      "id": "user_id",
      "username": "username",
      "discriminator": "1234"
    }
  ]
}
````

````

--------------------------------

### Get Guild Audit Logs

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the audit logs for a specific guild. This log contains records of all actions performed within the guild.

```javascript
external.guildAuditLog(
  guildId: Snowflake
) : `/guilds/${string}/audit-logs`
````

---

### Fetch Application Commands Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchApplicationCommandOptions%3AInterface

Defines the options available when fetching application commands from Discord.

````APIDOC
## Interface: FetchApplicationCommandOptions

### Description
Options used to fetch Application Commands from Discord.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Properties
- **cache** (boolean) - Optional - Whether to cache the fetched data if it wasn't already. Defaults to `true`.
- **force** (boolean) - Optional - Whether to skip the cache check and request the API. Defaults to `false`.
- **guildId** (Snowflake) - Optional - The guild's id to fetch commands for, for when the guild is not cached.
- **locale** (Locale) - Optional - The locale to use when fetching this command.
- **withLocalizations** (boolean) - Optional - Whether to fetch all localization data.

### Request Example
```json
{
  "cache": true,
  "force": false,
  "guildId": "123456789012345678",
  "locale": "en-US",
  "withLocalizations": true
}
````

### Response

#### Success Response (N/A for interface)

N/A

#### Response Example

N/A

````

--------------------------------

### Get Interaction Value

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ContextMenuCommandInteraction%3Aclass

Returns the string value of the interaction. This is a base method inherited from the Base class.

```typescript
interaction.valueOf()
````

---

### Gateway Hello Event

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayHello%3AInterface

Details the structure and properties of the GatewayHello event, which is sent by Discord when a client successfully connects to the gateway.

````APIDOC
## Gateway Hello Event

### Description
This event is sent immediately after the WebSocket connection is established. It contains a heartbeat interval that the client should use to keep the connection alive.

### Method
N/A (WebSocket Event)

### Endpoint
N/A (WebSocket Event)

### Parameters
#### Properties
- **d** (GatewayHelloData) - The data payload for the Hello event.
- **op** (GatewayOpcodes.Hello) - The opcode for the Hello event, always set to 10.
- **s** (null) - Sequence number, always null for this event.
- **t** (null) - Event name, always null for this event.

### Request Example
```json
{
  "op": 10,
  "d": {
    "heartbeat_interval": 41250
  }
}
````

### Response

#### Success Response (N/A - WebSocket Event)

- **d** (GatewayHelloData) - Contains the `heartbeat_interval` in milliseconds.

#### Response Example

```json
{
  "op": 10,
  "d": {
    "heartbeat_interval": 41250
  }
}
```

````

--------------------------------

### REST API: Get Current User Guilds

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPICurrentUserGuildsQuery%3AInterface

Retrieves a list of guilds the current user is a member of. This endpoint supports pagination and filtering.

```APIDOC
## GET /users/@me/guilds

### Description
Retrieves a list of guilds the current user is a member of. This endpoint supports pagination and filtering.

### Method
GET

### Endpoint
/users/@me/guilds

### Parameters
#### Query Parameters
- **after** (Snowflake) - Optional - Get guilds after this guild ID
- **before** (Snowflake) - Optional - Get guilds before this guild ID
- **limit** (number) - Optional - Max number of guilds to return (1-200). Defaults to 200.
- **with_counts** (boolean) - Optional - Include approximate member and presence counts in response. Defaults to false.

### Response
#### Success Response (200)
- **guilds** (array) - An array of guild objects the user is a member of.
  - **id** (Snowflake) - The ID of the guild.
  - **name** (string) - The name of the guild.
  - **icon** (string | null) - The icon hash of the guild.
  - **owner** (boolean) - Whether the current user is the owner of the guild.
  - **permissions** (string) - The permissions represented as a bitwise integer.
  - **features** (array<string>) - An array of enabled guild features.
  - **approximate_member_count** (number) - Approximate number of members in the guild (if `with_counts` is true).
  - **approximate_presence_count** (number) - Approximate number of users present in the guild (if `with_counts` is true).

#### Response Example
```json
[
  {
    "id": "123456789012345678",
    "name": "My Awesome Guild",
    "icon": "a_hash_string",
    "owner": true,
    "permissions": "2147483647",
    "features": ["PARTNERED", "VERIFIED"],
    "approximate_member_count": 1000,
    "approximate_presence_count": 500
  }
]
````

````

--------------------------------

### GET /role-icons/{role.id}/{role.icon}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a role's icon. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /role-icons/{role.id}/{role.icon}.{format}

### Description
Retrieves a role's icon. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/role-icons/{roleId}/{roleIcon}.{format}`

### Parameters
#### Path Parameters
- **roleId** (Snowflake) - Required - The ID of the role.
- **roleIcon** (string) - Required - The icon hash for the role.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested role icon image.

#### Response Example
(Binary image data)
````

---

### Set all application commands for a guild in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildApplicationCommandManager%3AClass

Illustrates how to set all application commands for a guild using the `set` method. This can be used to add new commands or clear existing ones by passing an empty array.

```javascript
// Set all commands to just this one
client.application.commands
  .set([
    {
      name: "test",
      description: "A test command",
    },
  ])
  .then(console.log)
  .catch(console.error);
```

```javascript
// Remove all commands
guild.commands.set([]).then(console.log).catch(console.error);
```

---

### Define IntegrationTypesConfigurationParameters Type Alias (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/IntegrationTypesConfigurationParameters%3ATypeAlias

Defines a TypeScript type alias `IntegrationTypesConfigurationParameters` that extends `ClientApplicationInstallParams`. This is used for OAuth2 installation parameters.

```typescript
export type IntegrationTypesConfigurationParameters =
  ClientApplicationInstallParams;
```

---

### Get User Guilds - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of guilds the user is a part of. This route is typically used for authenticated users to fetch their guild memberships.

```javascript
const userGuildsRoute = "/users/@me/guilds";
```

---

### Webhook Creation Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChannelWebhookCreateOptions%3AInterface

This section details the properties available when creating a new webhook, including name, avatar, and reason.

```APIDOC
## Interface: ChannelWebhookCreateOptions

### Description
Options used to create a Webhook.

### Properties

#### avatar
- **avatar** (BufferResolvable | Base64Resolvable | null) - Optional - Avatar for the webhook. Allows setting a custom avatar using a Buffer or Base64 string, or null to remove it.

#### name
- **name** (string) - Required - The name of the webhook. Must be between 2 and 32 characters long.

#### reason
- **reason** (string) - Optional - Reason for creating the webhook. This will be shown in the audit log.
```

---

### Get Guild Preview

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a preview of a guild's information, typically used for unauthenticated requests or to display basic guild details. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/preview
```

---

### Get Guild Widget Settings

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildWidgetSettingsResult%3ATypeAlias

Retrieves the widget settings for a specific guild.

````APIDOC
## GET /guilds/{guild.id}/widget

### Description
Retrieves the widget settings for a specific guild.

### Method
GET

### Endpoint
`/guilds/{guild.id}/widget`

### Parameters
#### Path Parameters
- **guild.id** (snowflake) - Required - The ID of the guild to retrieve the widget settings for.

### Response
#### Success Response (200)
- **type** (APIGuildWidgetSettings) - The widget settings for the guild.

#### Response Example
```json
{
  "enabled": true,
  "channel_id": "123456789012345678"
}
````

````

--------------------------------

### Following Up on Discord Interactions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ContextMenuCommandInteraction%3AClass

Demonstrates sending a follow-up message to a Discord interaction. This method is used to send additional messages after the initial reply or deferral. The example shows the basic usage for sending a follow-up.

```typescript
interaction.followUp(options: string | MessagePayload | InteractionReplyOptions)
````

---

### Presence and Ready Events

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Events related to user presence updates and client readiness.

````APIDOC
## presenceUpdate

### Description
Emitted whenever a guild member's presence (e.g. status, activity) is changed.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **oldPresence** (Presence | null) - The previous presence state, or null if the user was not cached.
*   **newPresence** (Presence) - The new presence state.

### Request Example
```json
{
  "oldPresence": { ... } | null,
  "newPresence": { ... }
}
````

### Response

#### Success Response (200)

None (Event-based)

#### Response Example

None (Event-based)

````

```APIDOC
## ready (Deprecated)

### Description
Emitted when the client becomes ready to start working. Use `clientReady` instead.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **client** (Client) - The client instance.

### Request Example
```json
{
  "client": { ... }
}
````

### Response

#### Success Response (200)

None (Event-based)

#### Response Example

None (Event-based)

````

--------------------------------

### Fetch webhooks for a channel in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Provides an example of fetching all webhooks associated with a specific Discord channel using the GuildChannelManager. It logs the number of webhooks found for the given channel ID.

```javascript
guild.channels.fetchWebhooks('769862166131245066')
  .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
  .catch(console.error);

````

---

### REST API: Get Application Commands

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIApplicationCommandsQuery%3AInterface

Retrieves a list of global application commands for a Discord application. This endpoint allows fetching commands with or without localization details.

````APIDOC
## GET /applications/:application.guild.id/commands

### Description
Retrieves a list of global application commands for a Discord application. You can optionally include full localization dictionaries for command names and descriptions.

### Method
GET

### Endpoint
`/applications/:application.guild.id/commands`

### Query Parameters
- **with_localizations** (boolean) - Optional - Defaults to `false`. Whether to include full localization dictionaries (name_localizations and description_localizations) in the returned objects, instead of the name_localized and description_localized fields.

### Response
#### Success Response (200)
- **id** (string) - The unique ID of the command.
- **name** (string) - The name of the command.
- **name_localized** (string) - The localized name of the command.
- **name_localizations** (object) - An object containing localized names for the command.
- **description** (string) - The description of the command.
- **description_localized** (string) - The localized description of the command.
- **description_localizations** (object) - An object containing localized descriptions for the command.

#### Response Example
```json
{
  "id": "123456789012345678",
  "name": "help",
  "name_localized": "help",
  "name_localizations": {
    "es-ES": "ayuda"
  },
  "description": "Displays information about the bot.",
  "description_localized": "Displays information about the bot.",
  "description_localizations": {
    "es-ES": "Muestra información sobre el bot."
  }
}
````

````

--------------------------------

### Create a new application command in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildApplicationCommandManager%3AClass

Demonstrates how to create a new application command for a guild using the `create` method of the GuildApplicationCommandManager. This requires the command name and description.

```javascript
// Create a new command
client.application.commands.create({
  name: 'test',
  description: 'A test command',
})
  .then(console.log)
  .catch(console.error);

````

---

### Get Guild Bans API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildBansQuery%3AInterface

Retrieves a list of banned users from a guild, with options to filter by user ID and limit the number of results.

````APIDOC
## GET /guilds/{guild.id}/bans

### Description
Retrieves a list of banned users from a guild. You can filter the results using `after` and `before` parameters to paginate through bans, and `limit` to specify the number of bans to return.

### Method
GET

### Endpoint
`/guilds/{guild.id}/bans`

### Parameters
#### Query Parameters
- **after** (Snowflake) - Optional - Consider only users after the given user ID.
- **before** (Snowflake) - Optional - Consider only users before the given user ID.
- **limit** (number) - Optional - Number of users to return (1-1000). Defaults to 1000.

### Request Example
```json
{
  "example": "GET /guilds/1234567890/bans?limit=50&after=0987654321"
}
````

### Response

#### Success Response (200)

- **bans** (Array<APIUserBans>) - An array of ban objects.
- **cursor** (string) - A cursor for use in pagination.

#### Response Example

```json
{
  "example": "{\"bans\": [{\"user\": {\"id\": \"1234567890\", \"username\": \"TestUser\", \"discriminator\": \"1234\", \"public_flags\": 0, \"avatar\": null, \"bot\": false, \"system\": false, \"banner\": null, \"accent_color\": null, \"locale\": \"en-US\", \"flags\": 0}, \"reason\": \"Violated community guidelines\"}], \"cursor\": \"some_cursor_string\"}"
}
```

````

--------------------------------

### GET /team-icons/{team.id}/{team.icon}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a team's icon. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /team-icons/{team.id}/{team.icon}.{format}

### Description
Retrieves a team's icon. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/team-icons/{teamId}/{teamIcon}.{format}`

### Parameters
#### Path Parameters
- **teamId** (Snowflake) - Required - The ID of the team.
- **teamIcon** (string) - Required - The icon hash for the team.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested team icon image.

#### Response Example
(Binary image data)
````

---

### fetchInvites

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Fetches a collection of invites to this guild channel.

```APIDOC
## fetchInvites

### Description
Fetches a collection of invites to this guild channel.

### Method
`fetchInvites`

### Parameters
#### Query Parameters
- **cache** (boolean) - Optional - Defaults to `true`. Whether to cache the fetched invites.

### Response
#### Success Response (Promise<Collection<string, Invite>>)
- **Collection**: A collection of invites to the channel.
```

---

### Get Current Authorization Information

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIOAuth2CurrentAuthorizationResult%3AInterface

Retrieves information about the current user's authorization for the application. This endpoint requires an access token.

```APIDOC
## GET /oauth2/@me

### Description
Retrieves information about the current user's authorization for the application. This endpoint requires an access token.

### Method
GET

### Endpoint
/oauth2/@me

### Parameters
#### Query Parameters
- **access_token** (string) - Required - The access token for the user.

### Request Example
```

GET /oauth2/@me?access_token=YOUR_ACCESS_TOKEN

````

### Response
#### Success Response (200)
- **application** (Partial<APIApplication>) - The current application.
- **expires** (string) - When the access token expires.
- **scopes** (OAuth2Scopes[]) - The scopes the user has authorized the application for.
- **user** (APIUser) - Optional - The user who has authorized, if the user has authorized with the `identify` scope.

#### Response Example
```json
{
  "application": {
    "id": "123456789012345678",
    "name": "My Awesome App",
    "icon": "a_icon_hash",
    "description": "An awesome application",
    "hook": false,
    "bot_public": false,
    "bot_require_code_grant": false,
    "verify_checksum": null
  },
  "expires": "2023-10-27T10:00:00.000Z",
  "scopes": [
    "identify",
    "guilds"
  ],
  "user": {
    "id": "987654321098765432",
    "username": "TestUser",
    "discriminator": "1234",
    "avatar": "a_user_avatar_hash",
    "public_flags": 1
  }
}
````

````

--------------------------------

### Fetch Application Data (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Fetches the application's data from Discord. This method returns a promise that resolves with the `ClientApplication` object, providing access to application-specific information.

```javascript
async fetch(): Promise<ClientApplication> {
  // Implementation details...
}
````

---

### Fetch Roles (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleManager%3AClass

Shows how to fetch roles from a Discord guild using the RoleManager. Examples include fetching all roles to count them and fetching a specific role to access its properties like color.

```javascript
// Fetch all roles from the guild
message.guild.roles
  .fetch()
  .then((roles) => console.log(`There are ${roles.size} roles.`))
  .catch(console.error);
```

```javascript
// Fetch a single role
message.guild.roles
  .fetch("222078108977594368")
  .then((role) => console.log(`The role color is: ${role.colors.primaryColor}`))
  .catch(console.error);
```

---

### GatewayRequestSoundboardSounds Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayRequestSoundboardSounds%3AInterface

Defines the structure for requesting soundboard sounds via the Discord Gateway.

```APIDOC
## Interface GatewayRequestSoundboardSounds

### Description
Represents the data structure for a Gateway event related to requesting soundboard sounds.

### See Also
- https://discord.com/developers/docs/topics/gateway-events#request-soundboard-sounds

### Properties

#### d (GatewayRequestSoundboardSoundsData)
- **Type**: `GatewayRequestSoundboardSoundsData`
- **Description**: The data payload for the request.

#### op (GatewayOpcodes.RequestSoundboardSounds)
- **Type**: `GatewayOpcodes.RequestSoundboardSounds`
- **Description**: The opcode indicating the type of gateway request.
```

---

### Define RPCSubscribeSpeakingStart Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeSpeakingStart%3AInterface

Defines the TypeScript interface for RPCSubscribeSpeakingStart, which extends RPCSubscribeMessage and is used for Discord voice speaking start events. It specifies the structure of arguments, command, event type, and nonce.

```typescript
export interface RPCSubscribeSpeakingStart extends RPCSubscribeMessage<RPCEvents.SpeakingStart>

```

---

### RPCCommandGetGuildsPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetGuildsPayload%3AInterface

Documentation for the RPCCommandGetGuildsPayload interface, which extends RPCCommandMessage and is used for fetching guild information.

````APIDOC
## Interface RPCCommandGetGuildsPayload

### Description
Represents the payload for an RPC command to get guilds. It extends the base `RPCCommandMessage` and includes specific arguments for the guild retrieval command.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **args** (RPCGetGuildsArgs) - Required - The arguments for the `GetGuilds` command.
- **cmd** (Cmd) - Required - The command identifier, inherited from `BaseRPCMessage`.
- **nonce** (string) - Required - A unique identifier for the command, inherited from `RPCCommandMessage`.

### Request Example
```json
{
  "args": { ... },
  "cmd": "GET_GUILDS",
  "nonce": "unique-nonce-123"
}
````

### Response

#### Success Response (200)

This interface defines the request payload structure. The actual response structure would depend on the specific RPC command implementation.

#### Response Example

N/A (Interface Definition)

````

--------------------------------

### Fetch Starter Message (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ThreadChannel%3Aclass

Fetches the message that initiated the thread. Returns null if the message is deleted or unavailable. Rejects if the original message in a forum post or parent channel is deleted. Requires the discord.js library.

```javascript
const starterMessage = await thread.fetchStarterMessage();
if (starterMessage) {
  console.log(`Starter message ID: ${starterMessage.id}`);
}
````

---

### Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserSelectMenuInteraction%3Aclass

Utility methods inherited from base classes.

```APIDOC
## Utility Methods

### Description
Utility methods inherited from base classes.

### Methods

- **toJSON(...props: Record<string, boolean | string>[]) : unknown**
  - **Description**: Converts the interaction object to a JSON representation.
  - **Inherited from**: Base

- **valueOf() : string**
  - **Description**: Returns the primitive value of the interaction object.
  - **Inherited from**: Base
```

---

### GET /splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a guild's splash image. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /splashes/{guild.id}/{guild.splash}.{format}

### Description
Retrieves a guild's splash image. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/splashes/{guildId}/{guildSplash}.{format}`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.
- **guildSplash** (string) - Required - The splash image hash for the guild.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested splash image.

#### Response Example
(Binary image data)
```

---

### Define RPCSpeakingStartDispatch Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSpeakingStartDispatch%3AInterface

Defines the RPCSpeakingStartDispatch interface, which extends BaseRPCMessage for handling Discord RPC dispatch events. This interface specifies the command, data, and event type for speaking start actions.

```typescript
export interface RPCSpeakingStartDispatch extends BaseRPCMessage<RPCCommands.Dispatch>

```

---

### RESTGetAPIGatewayResult Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGatewayResult%3ATypeAlias

Defines the structure for the result of a GET /gateway API request, which provides information about the Discord Gateway.

````APIDOC
## Type Alias: RESTGetAPIGatewayResult

### Description
This type alias represents the data structure returned when fetching gateway information from the Discord API. It is an alias for `APIGatewayInfo`.

### Method
N/A (Type definition)

### Endpoint
N/A (Type definition)

### Parameters
N/A (Type definition)

### Request Example
N/A (Type definition)

### Response
#### Success Response (N/A)
This type defines the structure of the response, not a specific success code.
- **APIGatewayInfo** (object) - An object containing gateway-related information.

### Response Example
```json
{
  "url": "wss://gateway.discord.gg/?v=10&encoding=json"
}
````

### See Also

- https://discord.com/developers/docs/topics/gateway#get-gateway

````

--------------------------------

### RPC Authenticate Arguments

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCAuthenticateArgs%3AInterface

Details the structure and properties required for authenticating RPC connections with Discord.

```APIDOC
## Interface RPCAuthenticateArgs

### Description
Represents the arguments required for authenticating a Discord Rich Presence (RPC) connection.

### Method
Not Applicable (Interface Definition)

### Endpoint
Not Applicable (Interface Definition)

### Parameters
#### Properties
- **access_token** (string) - Required - An OAuth2 access token used to authenticate the RPC connection.
````

---

### Get Guild RPC Response Structure

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetGuildResultData%3AInterface

This section describes the data structure returned when requesting guild information via the Discord RPC.

````APIDOC
## Get Guild RPC Response Structure

### Description
This endpoint returns data about a specific Discord guild.

### Method
GET (Implied by RPC)

### Endpoint
`/rpc/getGuild` (Implied by RPC)

### Parameters
This RPC method does not take explicit parameters in the request body, but the guild ID is implicitly known by the RPC client.

### Response
#### Success Response (200)
- **icon_url** (string | null) - The URL of the guild's icon. Can be null if no icon is set.
- **id** (Snowflake) - The unique identifier for the guild.
- **members** ([]) - This field is deprecated and will always be an empty array.
- **name** (string) - The name of the guild.

#### Response Example
```json
{
  "icon_url": "https://cdn.discordapp.com/icons/123456789012345678/a_abcdef1234567890abcdef1234567890.png",
  "id": "123456789012345678",
  "members": [],
  "name": "Example Guild"
}
````

````

--------------------------------

### RPCSubscribeVoiceSettingsUpdate Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeVoiceSettingsUpdate%3AInterface

Documentation for the RPCSubscribeVoiceSettingsUpdate interface, which extends RPCSubscribeMessage for voice settings updates.

```APIDOC
## Interface: RPCSubscribeVoiceSettingsUpdate

### Description
Represents a subscription message for Discord voice settings updates. It extends the base RPCSubscribeMessage to include specific arguments and event types related to voice settings.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **args** (RPCSubscribeVoiceSettingsUpdateArgs) - The arguments associated with the voice settings update subscription.
- **cmd** (Cmd) - The command type, inherited from BaseRPCMessage.
- **evt** (RPCEvents.VoiceSettingsUpdate) - The event type, specifically indicating a voice settings update.
- **nonce** (string) - A unique identifier for the message, inherited from RPCCommandMessage.

### Request Example
N/A (Interface Definition)

### Response
#### Success Response (N/A)
N/A (Interface Definition)

#### Response Example
N/A (Interface Definition)
````

---

### fetchRoleConnectionMetadataRecords

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Gets this application's role connection metadata records. This endpoint retrieves all currently configured metadata records for the application's role connections.

````APIDOC
## GET /applications/@me/role-connections/metadata

### Description
Gets this application's role connection metadata records.

### Method
GET

### Endpoint
`/applications/@me/role-connections/metadata`

### Response
#### Success Response (200)
- **records** (array[object]) - An array of `ApplicationRoleConnectionMetadata` objects representing the application's role connection metadata.

#### Response Example
```json
{
  "records": [
    {
      "type": " Armenia",
      "key": "premium_subscriber",
      "name": {
        "en": "Premium Subscriber"
      },
      "description": {
        "en": "Is a premium subscriber"
      },
      "platforms": [
        "discord"
      ]
    }
  ]
}
````

````

--------------------------------

### Get User Guild Member - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Fetches a specific guild member associated with a user. Requires the guild ID to identify the target guild.

```javascript
function userGuildMember(guildId) {
  return `/users/@me/guilds/${guildId}/member`;
}
````

---

### Collection.reduceRight()

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Applies a function to produce a single value from the collection, starting from the rightmost element. It's identical in behavior to Array.reduceRight().

````APIDOC
## reduceRight()

### Description
Applies a function to produce a single value. Identical in behavior to Array.reduceRight().

### Method
`reduceRight`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **fn** (function) - Required - The function to execute on each element in the collection, starting from the right. It accepts `accumulator`, `value`, `key`, and `collection`.
*   **initialValue** (any) - Optional - The initial value to use as the first argument to the first call of the `fn`.

### Request Example
```javascript
// Example usage for reduceRight
````

### Response

#### Success Response (200)

- **Value** (any) - The single value resulting from the reduction.

#### Response Example

```json
{
  "example": "number"
}
```

````

--------------------------------

### APIGuildPreview Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildPreview%3AInterface

This section details the properties of the APIGuildPreview interface, which represents a preview of a Discord guild.

```APIDOC
## Interface APIGuildPreview

Represents a preview of a Discord guild, containing essential information without full guild access.

### Properties

- **approximate_member_count** (number) - Approximate number of members in this guild.
- **approximate_presence_count** (number) - Approximate number of online members in this guild.
- **description** (string) - The description for the guild.
- **discovery_splash** (string | null) - Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature. See also: https://discord.com/developers/docs/reference#image-formatting
- **emojis** (APIEmoji[]) - Custom guild emojis. See also: https://discord.com/developers/docs/resources/emoji#emoji-object
- **features** (GuildFeature[]) - Enabled guild features. See also: https://discord.com/developers/docs/resources/guild#guild-object-guild-features
- **icon** (string | null) - Icon hash. See also: https://discord.com/developers/docs/reference#image-formatting
- **id** (Snowflake) - Guild id.
- **name** (string) - Guild name (2-100 characters).
- **splash** (string | null) - Splash hash. See also: https://discord.com/developers/docs/reference#image-formatting
- **stickers** (APISticker[]) - Custom guild stickers.
````

---

### BaseFetchOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseFetchOptions%3AInterface

Details the options available for fetching data from Discord, including caching and forcing a re-fetch.

```APIDOC
## Interface BaseFetchOptions

### Description
Options used to fetch data from Discord.

### Properties

#### cache
- **cache** (boolean) - Optional - Whether to cache the fetched data if it wasn't already. Defaults to `true`.

#### force
- **force** (boolean) - Optional - Whether to skip the cache check and request the API. Defaults to `false`.
```

---

### GET /guilds/{guild.id}/widget & PATCH /guilds/{guild.id}/widget

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves or modifies the widget settings for a specific guild. This endpoint allows you to view and update the widget configuration.

````APIDOC
## GET /guilds/{guild.id}/widget & PATCH /guilds/{guild.id}/widget

### Description
Retrieves or modifies the widget settings for a guild.

### Method
GET, PATCH

### Endpoint
/guilds/{guild.id}/widget

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

#### Request Body (PATCH)
- **enabled** (boolean) - Optional - Whether the widget is enabled.
- **channel_id** (Snowflake) - Optional - The ID of the widget channel.

### Request Example (PATCH)
```json
{
  "enabled": true,
  "channel_id": "channel_id"
}
````

### Response

#### Success Response (200)

- **widget** (object) - The widget object.

#### Response Example

```json
{
  "enabled": true,
  "channel_id": "channel_id"
}
```

````

--------------------------------

### OAuth2 Current Authorization API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves information about the current user's OAuth2 authorization. This endpoint is used to get details about the token owner.

```javascript
function oauth2CurrentAuthorization() {
  return "/oauth2/@me";
}
````

---

### Client Ready Event in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Emitted when the Discord.js client has successfully connected and is ready to start processing events and commands. The event handler receives the client instance.

```javascript
client.on("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
});
```

---

### ThreadChannel Permissions API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PublicThreadChannel%3Ainterface

Gets the overall set of permissions for a member or role in this thread's parent channel, taking overwrites into account.

````APIDOC
## GET /channels/{channel.id}/permissions

### Description
Gets the overall set of permissions for a member or role in this thread's parent channel, taking overwrites into account.

### Method
GET

### Endpoint
/channels/{channel.id}/permissions

### Parameters
#### Path Parameters
- **channel.id** (Snowflake) - Required - The ID of the thread to check permissions for.

#### Query Parameters
- **memberOrRole** (GuildMember | Role) - Required - The member or role to check permissions for.
- **checkAdmin** (boolean) - Optional - Whether to check for administrator permissions. Defaults to true.

### Response
#### Success Response (200)
- **permissions** (Readonly<PermissionsBitField>) - A read-only PermissionsBitField object representing the permissions.

#### Response Example
```json
{
  "bitfield": "137439277777"
}
````

````

--------------------------------

### clone

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Clones this channel.

```APIDOC
## clone

### Description
Clones this channel.

### Method
`clone`

### Parameters
#### Query Parameters
- **options** (GuildChannelCloneOptions) - Optional - Options for cloning the channel.

### Response
#### Success Response (Promise<this>)
- **this**: The cloned channel.

### Inherited from
GuildChannel
````

---

### Get Guild Voice Regions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildVoiceRegionsResult%3ATypeAlias

Retrieves a list of all voice regions used by the Discord API that can be set for a guild. This endpoint is unauthenticated.

````APIDOC
## GET /guilds/:guild/voice-regions

### Description
Retrieves a list of all voice regions used by the Discord API that can be set for a guild.

### Method
GET

### Endpoint
/guilds/:guild/voice-regions

### Parameters
#### Path Parameters
- **guild** (snowflake) - Required - The ID of the guild to get voice regions for.

### Request Example
```json
{
  "example": "No request body needed for this endpoint."
}
````

### Response

#### Success Response (200)

- **APIVoiceRegion[]** (array) - An array of voice region objects.

#### Response Example

```json
[
  {
    "id": "us-east",
    "name": "U.S. East",
    "optimal": true,
    "deprecated": false,
    "custom": false,
    "vip_only": false,
    "url": "wss://voice-1.discord.gg",
    "Shards": 1
  }
]
```

````

--------------------------------

### GET /guild-tag-badges/{guild.id}/{badge}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a guild's tag badge. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /guild-tag-badges/{guild.id}/{badge}.{format}

### Description
Retrieves a guild's tag badge. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/guild-tag-badges/{guildId}/{guildTagBadge}.{format}`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.
- **guildTagBadge** (string) - Required - The tag badge hash for the guild.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested tag badge image.

#### Response Example
(Binary image data)
````

---

### POST /stage-instances

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Creates a stage instance. This endpoint allows you to create a new stage instance.

````APIDOC
## POST /stage-instances

### Description
Creates a stage instance.

### Method
POST

### Endpoint
/stage-instances

### Parameters
#### Request Body
- **channel_id** (Snowflake) - Required - The ID of the channel.
- **topic** (string) - Required - The topic of the stage instance.

### Request Example
```json
{
  "channel_id": "channel_id",
  "topic": "Stage Topic"
}
````

### Response

#### Success Response (201)

- **stage_instance** (object) - The stage instance object.

#### Response Example

```json
{
  "id": "stage_instance_id",
  "channel_id": "channel_id",
  "topic": "Stage Topic"
}
```

````

--------------------------------

### Example RGB Color Array

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ColorResolvable%3ATypeAlias

Demonstrates how to represent a color using an RGB array format. This is one of the accepted formats for the ColorResolvable type in discord.js.

```javascript
[255, 0, 255] // purple
````

---

### APIApplicationCommand Object

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIApplicationCommand%3AInterface

Details the properties of an application command object used in the Discord API.

````APIDOC
## Interface APIApplicationCommand

### Description
Represents an application command object in the Discord API.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **application_id** (Snowflake) - Required - Unique id of the parent application.
- **contexts** (InteractionContextType[] | null) - Optional - Interaction context(s) where the command can be used, only for globally-scoped commands. Defaults to `[InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel]`.
- **default_member_permissions** (Permissions | null) - Required - Set of permissions represented as a bitset.
- **default_permission** (boolean) - Optional - Deprecated. Use `dm_permission` and/or `default_member_permissions` instead. Indicates whether the command is enabled by default when the app is added to a guild. If missing, this property should be assumed as `true`.
- **description_localizations** (LocalizationMap | null) - Optional - Localization dictionary for the description field. Values follow the same restrictions as description.
- **description_localized** (string) - Optional - The localized description.
- **description** (string) - Required - 1-100 character description for `CHAT_INPUT` commands, empty string for `USER` and `MESSAGE` commands.
- **dm_permission** (boolean) - Optional - Deprecated. Use `contexts` instead. Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
- **guild_id** (Snowflake) - Optional - Guild id of the command, if not global.
- **handler** (EntryPointCommandHandlerType) - Optional - Determines whether the interaction is handled by the app's interactions handler or by Discord.
- **id** (Snowflake) - Required - Unique id of the command.
- **integration_types** (ApplicationIntegrationType[]) - Optional - Installation context(s) where the command is available, only for globally-scoped commands. Defaults to `[ApplicationIntegrationType.GuildInstall]`.
- **name_localizations** (LocalizationMap | null) - Optional - Localization dictionary for the name field. Values follow the same restrictions as name.
- **name_localized** (string) - Optional - The localized name.
- **name** (string) - Required - 1-32 character name; `CHAT_INPUT` command names must be all lowercase matching `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$`.
- **nsfw** (boolean) - Optional - Indicates whether the command is age-restricted. Defaults to `false`.
- **options** (APIApplicationCommandOption[]) - Optional - The parameters for the `CHAT_INPUT` command, max 25.
- **type** (ApplicationCommandType) - Required - Type of the command.
- **version** (Snowflake) - Required - Autoincrementing version identifier updated during substantial record changes.

### Request Example
```json
{
  "application_id": "123456789012345678",
  "description": "A sample command",
  "name": "sample",
  "type": 1,
  "version": "1"
}
````

### Response

#### Success Response (200)

- **application_id** (Snowflake) - Unique id of the parent application.
- **contexts** (InteractionContextType[] | null) - Interaction context(s) where the command can be used.
- **default_member_permissions** (Permissions | null) - Set of permissions represented as a bitset.
- **description_localizations** (LocalizationMap | null) - Localization dictionary for the description field.
- **description_localized** (string) - The localized description.
- **description** (string) - Description of the command.
- **dm_permission** (boolean) - Indicates whether the command is available in DMs.
- **guild_id** (Snowflake) - Guild id of the command, if not global.
- **handler** (EntryPointCommandHandlerType) - Determines interaction handling.
- **id** (Snowflake) - Unique id of the command.
- **integration_types** (ApplicationIntegrationType[]) - Installation context(s) where the command is available.
- **name_localizations** (LocalizationMap | null) - Localization dictionary for the name field.
- **name_localized** (string) - The localized name.
- **name** (string) - Name of the command.
- **nsfw** (boolean) - Indicates if the command is age-restricted.
- **options** (APIApplicationCommandOption[]) - Parameters for the command.
- **type** (ApplicationCommandType) - Type of the command.
- **version** (Snowflake) - Version identifier.

#### Response Example

```json
{
  "application_id": "123456789012345678",
  "description": "A sample command",
  "name": "sample",
  "type": 1,
  "version": "1",
  "id": "987654321098765432",
  "default_member_permissions": null,
  "dm_permission": true,
  "nsfw": false
}
```

````

--------------------------------

### RPCBrowserResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCBrowserResult%3AInterface

Documentation for the RPCBrowserResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCBrowserResult

### Description
Represents the result of an RPC browser handoff command.

### Extends
`RPCCommandMessage<RPCCommands.BrowserHandoff>`

### Properties

#### cmd
- **cmd** (`Cmd`) - The command type.
  - Inherited from: `BaseRPCMessage`

#### data
- **data** (`RPCBrowserHandoffResultData`) - The data associated with the browser handoff result.

#### nonce
- **nonce** (`string`) - A unique identifier for the message.
  - Inherited from: `RPCCommandMessage`
````

---

### GET /channels/{channel.id}/thread-members

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelThreadMemberQuery%3AInterface

Retrieves a thread member from a channel. This endpoint allows for optional inclusion of guild member data.

````APIDOC
## GET /channels/{channel.id}/thread-members

### Description
Retrieves a thread member from a channel. Optionally includes guild member data.

### Method
GET

### Endpoint
`/channels/{channel.id}/thread-members`

### Parameters
#### Query Parameters
- **with_member** (boolean) - Optional - Whether to include a guild member object for the thread member.

### Request Example
```json
{
  "with_member": true
}
````

### Response

#### Success Response (200)

- **(structure depends on API response)** - Description of the thread member object, potentially including guild member details if `with_member` is true.

#### Response Example

```json
{
  "id": "123456789012345678",
  "username": "ExampleUser",
  "discriminator": "0000",
  "public_flags": 0,
  "flags": 0,
  "avatar": null,
  "bot": false,
  "system": false,
  "mfa_enabled": false,
  "member": {
    "user": {
      "id": "123456789012345678",
      "username": "ExampleUser",
      "discriminator": "0000",
      "public_flags": 0,
      "flags": 0,
      "avatar": null,
      "bot": false,
      "system": false,
      "mfa_enabled": false
    },
    "nick": null,
    "roles": [],
    "joined_at": "2023-01-01T00:00:00.000Z"
  }
}
```

````

--------------------------------

### Fetch a single channel by ID in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Demonstrates how to fetch a specific Discord channel by its ID using the GuildChannelManager. The example logs the name of the fetched channel.

```javascript
message.guild.channels.fetch('222197033908436994')
  .then(channel => console.log(`The channel name is: ${channel.name}`))
  .catch(console.error);

````

---

### ApplicationCommandBooleanOptionData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandBooleanOptionData%3AInterface

Documentation for the ApplicationCommandBooleanOptionData interface, detailing its properties and inheritance.

```APIDOC
## Interface: ApplicationCommandBooleanOptionData

### Description
Represents the data structure for a boolean option within an application command in discord.js.

### Extends
`BaseApplicationCommandOptionsData`

### Properties

#### `autocomplete` (never) - Optional
Inherited from: `BaseApplicationCommandOptionsData`

#### `description` (string) - Required
Inherited from: `BaseApplicationCommandOptionsData`

#### `descriptionLocalizations` (LocalizationMap) - Optional
Inherited from: `BaseApplicationCommandOptionsData`

#### `name` (string) - Required
Inherited from: `BaseApplicationCommandOptionsData`

#### `nameLocalizations` (LocalizationMap) - Optional
Inherited from: `BaseApplicationCommandOptionsData`

#### `required` (boolean) - Optional
Inherited from: `BaseApplicationCommandOptionsData`

#### `type` (ApplicationCommandOptionType.Boolean) - Required
Specifies the type of the option as a boolean.
```

---

### Get GuildMember Value

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMember%3AClass

Returns the primitive string value of the GuildMember object. This is often equivalent to the user's ID.

```javascript
const memberId = guildMember.valueOf();
```

---

### Get String Representation of Interaction

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChatInputCommandInteraction%3Aclass

Returns a string representation of the interaction. This string can be used to reconstruct and re-execute the command, preserving option order.

```typescript
const commandString = interaction.toString();
```

---

### generateInvite(options?)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Generates an OAuth2 invite link for the bot to be invited to a guild.

````APIDOC
## GET /generateInvite

### Description
Generates a link that can be used to invite the bot to a guild.

### Method
GET

### Endpoint
/generateInvite

### Parameters
#### Query Parameters
- **options** (InviteGenerationOptions) - Optional - Options for generating the invite link, such as scopes and permissions.

### Request Example
```javascript
// Generate an application commands invite link
const link = client.generateInvite({
  scopes: [OAuth2Scopes.ApplicationsCommands]
});
console.log(`Generated application invite link: ${link}`);

// Generate a bot invite link with specific permissions
const link = client.generateInvite({
  permissions: [
    PermissionFlagsBits.SendMessages,
    PermissionFlagsBits.ManageGuild,
    PermissionFlagsBits.MentionEveryone
  ],
  scopes: [OAuth2Scopes.Bot]
});
console.log(`Generated bot invite link: ${link}`);
````

### Response

#### Success Response (200)

- **link** (string) - The generated invite link.

````

--------------------------------

### Formatting Utility: blockQuote

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/blockQuote%3AFunction

This utility function formats a given string to be displayed as a block quote in Discord. It requires the block quote syntax to be at the start of a line.

```APIDOC
## Function blockQuote

### Description

Formats the content into a block quote. This needs to be at the start of the line for Discord to format it.

### Method

`declare function blockQuote<Content extends string>(content: Content): `>>> ${Content}`;`

### Parameters

#### Type Parameters

- **Content** (string) - The type of the content string.

#### Parameters

- **content** (Content) - Required - The content to wrap in a block quote.

### Request Example

```javascript
blockQuote('This is a quote');
````

### Response

#### Success Response (200)

- **string** - The formatted block quote string (e.g., `>>> This is a quote`).

#### Response Example

```json
{
  "example": ">>> This is a quote"
}
```

````

--------------------------------

### Get Guild Vanity URL

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the vanity invite URL for a guild, if one is set. This is often used for custom invite links. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/vanity-url
````

---

### GuildTextThreadCreateOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildTextThreadCreateOptions%3Ainterface

Documentation for the GuildTextThreadCreateOptions interface, which extends StartThreadOptions and defines properties for creating threads in Discord.

````APIDOC
## Interface GuildTextThreadCreateOptions

### Description
Options for creating a thread. Only one of `startMessage` or `type` can be defined.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **autoArchiveDuration** (ThreadAutoArchiveDuration) - Optional - The amount of time after which the thread should automatically archive in case of no recent activity. Inherited from: StartThreadOptions.
- **invitable** (boolean) - Optional - Whether non-moderators can add other non-moderators to the thread. Can only be set when type will be ChannelType.PrivateThread. Applicable only when AllowedThreadType extends ChannelType.PrivateThread.
- **name** (string) - Required - The name of the new thread. Inherited from: StartThreadOptions.
- **rateLimitPerUser** (number) - Optional - The rate limit per user (slowmode) for the thread in seconds. Inherited from: StartThreadOptions.
- **reason** (string) - Optional - Reason for creating the thread. Inherited from: StartThreadOptions.
- **startMessage** (MessageResolvable) - Optional - The message to start a thread from. If this is defined, then the `type` of thread gets inferred automatically and cannot be changed.
- **type** (AllowedThreadType) - Optional - The type of thread to create. Defaults to ChannelType.PublicThread if created in a TextChannel. When creating threads in a NewsChannel, this is ignored and is always ChannelType.AnnouncementThread.

### Request Example
```json
{
  "name": "my-thread",
  "autoArchiveDuration": 60,
  "rateLimitPerUser": 5,
  "reason": "Creating a new thread for discussion"
}
````

### Response

#### Success Response (N/A for Interface Definition)

N/A

#### Response Example

N/A

````

--------------------------------

### Create a new text channel using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Shows how to create a new text channel within a Discord guild using the GuildChannelManager. This example highlights the basic usage of the create method with minimal options.

```javascript
guild.channels.create({ name: 'new-general', reason: 'Needed a cool new channel' })
  .then(console.log)
  .catch(console.error);

````

---

### Get User Agent Appendix (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/getUserAgentAppendix%3AFunction

Resolves the user agent appendix string for the current environment. This function is part of the discord.js utility module.

```typescript
declare function getUserAgentAppendix(): string;
```

---

### Send Activity Join Invite Arguments

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSendActivityJoinInviteArgs%3AInterface

Defines the structure for arguments used when sending a join invite for a Discord activity.

````APIDOC
## Interface RPCSendActivityJoinInviteArgs

### Description
This interface defines the structure for arguments used when sending a join invite for a Discord activity via the RPC API.

### Method
Not Applicable (This is an interface definition, not an endpoint)

### Endpoint
Not Applicable

### Parameters
#### Properties
- **user_id** (Snowflake) - Required - The id of the requesting user.

### Request Example
```json
{
  "user_id": "123456789012345678"
}
````

### Response

#### Success Response (200)

This interface defines the request payload, not a direct response.

#### Response Example

Not Applicable

````

--------------------------------

### Define APIGuildOnboardingPrompt Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildOnboardingPrompt%3AInterface

Defines the TypeScript interface for an API Guild Onboarding Prompt. This interface specifies the structure of data used for onboarding prompts within a Discord guild, including properties like ID, title, options, and selection constraints.

```typescript
export interface APIGuildOnboardingPrompt
````

---

### Application Integration Type Enum (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationIntegrationType%3AEnum

Defines the types of integrations an application can have on Discord. This enum is used to specify whether an app is installable to guilds or users.

```typescript
export declare enum ApplicationIntegrationType
```

---

### RPCCommandGetApplicationTicketPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetApplicationTicketPayload%3AInterface

Documentation for the RPCCommandGetApplicationTicketPayload interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCCommandGetApplicationTicketPayload

### Description
Represents the payload for the `GetApplicationTicket` RPC command.

### Extends
`RPCCommandMessage<RPCCommands.GetApplicationTicket>`

### Properties

#### args
- **args** (RPCGetApplicationTicketArgs) - The arguments for the RPC command.

#### cmd
- **cmd** (Cmd) - The command identifier. Inherited from `BaseRPCMessage`.

#### nonce
- **nonce** (string) - A unique identifier for the message. Inherited from `RPCCommandMessage`.
```

---

### GET /guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves the cover image for a guild scheduled event. Supports PNG, JPEG, and WebP formats.

```APIDOC
## GET /guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{format}

### Description
Retrieves the cover image for a guild scheduled event. This route supports PNG, JPEG, and WebP formats.

### Method
GET

### Endpoint
`/guild-events/{guildScheduledEventId}/{guildScheduledEventCoverImage}.{format}`

### Parameters
#### Path Parameters
- **guildScheduledEventId** (Snowflake) - Required - The ID of the guild scheduled event.
- **guildScheduledEventCoverImage** (string) - Required - The cover image hash for the guild scheduled event.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested cover image.

#### Response Example
(Binary image data)
```

---

### Create Ephemeral Reply with Embed

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChatInputCommandInteraction%3Aclass

Sends an ephemeral reply to an interaction, which is only visible to the user who invoked the command. This example includes an EmbedBuilder for rich content.

```typescript
const embed = new EmbedBuilder().setDescription("Pong!");

interaction
  .reply({ embeds: [embed], flags: MessageFlags.Ephemeral })
  .then(() => console.log("Reply sent."))
  .catch(console.error);
```

---

### UserEntitlementCreateOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserEntitlementCreateOptions%3AInterface

Defines the options for creating user entitlements.

```APIDOC
## Interface UserEntitlementCreateOptions

### Description
Defines the options required for creating user entitlements within the discord.js library.

### Properties

#### sku
- **sku** (SKUResolvable) - Description of the SKU resolvable.

#### user
- **user** (UserResolvable) - Description of the user resolvable.
```

---

### StageInstanceCreateOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/StageInstanceCreateOptions%3AInterface

Defines the options for creating a stage instance in discord.js.

```APIDOC
## Interface: StageInstanceCreateOptions

### Description
Options used to create a stage instance.

### Properties

#### guildScheduledEvent
- **guildScheduledEvent** (GuildScheduledEventResolvable) - Optional - The guild scheduled event associated with the stage instance.

#### privacyLevel
- **privacyLevel** (StageInstancePrivacyLevel) - Optional - The privacy level of the stage instance.

#### sendStartNotification
- **sendStartNotification** (boolean) - Optional - Whether to notify `@everyone` that the stage instance has started.

#### topic
- **topic** (string) - Required - The topic of the stage instance.
```

---

### iconURL

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Generates a URL for the application's icon. You can specify different size and format options.

````APIDOC
## GET /applications/@me/icon

### Description
A link to the application's icon.

### Method
GET

### Endpoint
`/applications/@me/icon`

### Query Parameters
- **size** (number) - Optional - The desired size of the icon (e.g., 128, 256, 512, 1024). Defaults to the optimal size.
- **format** (string) - Optional - The desired image format (e.g., 'png', 'jpg', 'webp'). Defaults to 'png'.

### Response
#### Success Response (200)
- **url** (string) - The URL to the application's icon.

#### Response Example
```json
{
  "url": "https://cdn.discordapp.com/application-icons/123456789012345678/a_valid_icon_hash.png?size=128"
}
````

````

--------------------------------

### Get Subscription Cache using SubscriptionManager in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/SubscriptionManager%3AClass

Provides the method to retrieve the entire cache of subscriptions managed by the SubscriptionManager. The cache is stored as a Collection.

```typescript
valueOf() : Collection<Key, Holds>

````

---

### fetchGuildTemplate

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches a guild template from Discord using a resolvable template identifier.

````APIDOC
## GET /fetchGuildTemplate

### Description
Obtains a template from Discord.

### Method
GET

### Endpoint
/fetchGuildTemplate

### Parameters
#### Path Parameters
- **template** (GuildTemplateResolvable) - The template identifier to fetch.

### Request Example
```javascript
client.fetchGuildTemplate('https://discord.new/FKvmczH2HyUf')
  .then(template => console.log(template.code))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **GuildTemplate** - An object representing the fetched guild template.

````

--------------------------------

### Get Application Icon URL (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Generates a URL for the application's icon. It accepts optional `ImageURLOptions` to customize the icon's size and format. Returns `null` if the application has no icon.

```javascript
iconURL(options?: ImageURLOptions = {}): string | null {
  // Implementation details...
}
````

---

### HTTP Request Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/REST%3AClass

These methods allow you to perform standard HTTP requests (DELETE, GET, PATCH, POST, PUT) to specified API routes.

````APIDOC
## HTTP Request Methods

### DELETE

#### Description
Runs a delete request from the api.

#### Method
DELETE

#### Endpoint
`fullRoute: RouteLike`

#### Parameters
- **fullRoute** (RouteLike) - Required - The full route to send the request to.
- **options** (RequestData) - Optional - Additional options for the request.

### GET

#### Description
Runs a get request from the api.

#### Method
GET

#### Endpoint
`fullRoute: RouteLike`

#### Parameters
- **fullRoute** (RouteLike) - Required - The full route to send the request to.
- **options** (RequestData) - Optional - Additional options for the request.

### PATCH

#### Description
Runs a patch request from the api.

#### Method
PATCH

#### Endpoint
`fullRoute: RouteLike`

#### Parameters
- **fullRoute** (RouteLike) - Required - The full route to send the request to.
- **options** (RequestData) - Optional - Additional options for the request.

### POST

#### Description
Runs a post request from the api.

#### Method
POST

#### Endpoint
`fullRoute: RouteLike`

#### Parameters
- **fullRoute** (RouteLike) - Required - The full route to send the request to.
- **options** (RequestData) - Optional - Additional options for the request.

### PUT

#### Description
Runs a put request from the api.

#### Method
PUT

#### Endpoint
`fullRoute: RouteLike`

#### Parameters
- **fullRoute** (RouteLike) - Required - The full route to send the request to.
- **options** (RequestData) - Optional - Additional options for the request.

### Request Example (Generic)
```json
{
  "example": "request body"
}
````

### Response (Generic)

#### Success Response (200)

- **example** (unknown) - The response from the api request.

````

--------------------------------

### GET /guilds/{guild.id}/scheduled-events

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildScheduledEventQuery%3AInterface

Retrieves a list of scheduled events for a guild. This endpoint supports a query parameter to include the number of users subscribed to each event.

```APIDOC
## GET /guilds/{guild.id}/scheduled-events

### Description
Retrieves a list of scheduled events for a guild. This endpoint supports a query parameter to include the number of users subscribed to each event.

### Method
GET

### Endpoint
`/guilds/{guild.id}/scheduled-events`

### Parameters
#### Query Parameters
- **with_user_count** (boolean) - Optional - Whether to include the number of users subscribed to this event.

### Request Example
```json
{
  "example": "No request body for GET request"
}
````

### Response

#### Success Response (200)

- **name** (string) - The name of the event.
- **user_count** (integer) - The number of users subscribed to the event (only if `with_user_count` is true).

#### Response Example

```json
{
  "example": "{\n  \"id\": \"1234567890\",\n  \"name\": \"Community Meetup\",\n  \"user_count\": 50\n}"
}
```

````

--------------------------------

### Delete ApplicationCommand using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommand%3AClass

Demonstrates how to delete an application command using the `delete()` method provided by the ApplicationCommand class in discord.js. It includes an example of handling the promise returned by the method.

```javascript
// Delete this command
command.delete()
  .then(console.log)
  .catch(console.error);
````

---

### Get Guild Voice Regions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the voice regions available for a guild. This information can be useful for optimizing voice connection performance. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/regions
```

---

### fetchInvites

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Fetches a collection of invites to this guild channel. Resolves with a collection mapping invites by their codes.

````APIDOC
## fetchInvites

### Description
Fetches a collection of invites to this guild channel. Resolves with a collection mapping invites by their codes.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **cache** (boolean) - Optional - Defaults to `true`. Whether to cache the fetched invites.

### Request Example
```javascript
// Fetch invites for the channel
channel.fetchInvites()
  .then(invites => {
    invites.forEach(invite => {
      console.log(`Invite code: ${invite.code}`);
    });
  })
  .catch(console.error);
````

### Response

#### Success Response (Promise<Collection<string, Invite>>)

- **Collection<string, Invite>** - A collection mapping invite codes to invite objects.

#### Response Example

```json
{
  "size": 2,
  "invites": {
    "AbCdEf": {
      "code": "AbCdEf",
      "guildId": "guildId",
      "channelId": "channelId"
    },
    "123456": {
      "code": "123456",
      "guildId": "guildId",
      "channelId": "channelId"
    }
  }
}
```

````

--------------------------------

### Register Slash Commands with discord.js

Source: https://discord.js.org/docs/index

Registers application (/) commands with the Discord API using discord.js. This example uses the REST API to send command definitions, requiring a bot token and client ID.

```javascript
import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
````

---

### Define IntegrationTypesConfigurationContext Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/IntegrationTypesConfigurationContext%3AInterface

Defines the TypeScript interface for IntegrationTypesConfigurationContext, representing the application's supported installation context data. This interface is part of the discord.js library.

```typescript
export interface IntegrationTypesConfigurationContext
```

---

### Handle Ready Event in Discord.js (Deprecated)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientEvents%3AInterface

The 'ready' event is emitted when the client has successfully connected to Discord and is ready to start processing events. Note: This event is deprecated and 'ClientEvents.ClientReady' should be used instead.

```javascript
// Deprecated usage:
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
```

---

### RPCCommandSetActivityPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandSetActivityPayload%3AInterface

Documentation for the RPCCommandSetActivityPayload interface, which extends RPCCommandMessage.

````APIDOC
## Interface RPCCommandSetActivityPayload

### Description
Represents the payload for setting an activity in the Discord RPC.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "args": { ... },
  "cmd": "SET_ACTIVITY",
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (200)

N/A (Interface definition)

#### Response Example

N/A (Interface definition)

### Properties

#### args

- **args** (RPCSetActivityArgs) - The arguments for setting the activity.

#### cmd

- **cmd** (Cmd) - The command type, expected to be `RPCCommands.SetActivity`.
  Inherited from: BaseRPCMessage

#### nonce

- **nonce** (string) - A unique identifier for the command.
  Inherited from: RPCCommandMessage

````

--------------------------------

### Fetch Channel Owner in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialGroupDMChannel%3AClass

This example demonstrates how to fetch the owner of a Group DM Channel using the fetchOwner method. It returns a Promise that resolves with the User object of the channel owner.

```javascript
// Fetch the owner of the Group DM Channel
channel.fetchOwner()
  .then(owner => console.log(`Channel owner: ${owner.tag}`))
  .catch(console.error);
````

---

### Channel Creation and Management

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MediaChannel%3AClass

Methods for creating invites, webhooks, and managing channel settings.

````APIDOC
## POST /channels/{channel.id}/invites

### Description
Creates an invite to this guild channel.

### Method
POST

### Endpoint
/channels/{channel.id}/invites

### Parameters
#### Query Parameters
- **options** (InviteCreateOptions) - Optional - Options for creating the invite.

### Request Example
```javascript
// Create an invite to a channel
channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **invite** (Invite) - The created invite object.

#### Response Example

```json
{
  "code": "aBcDeF",
  "guild_id": "123456789012345678",
  "channel_id": "987654321098765432",
  "inviter": { ... },
  "target_type": null,
  "target_user": null,
  "uses": 0,
  "max_uses": 0,
  "max_age": 86400,
  "temporary": false,
  "created_at": "2023-10-27T10:00:00.000Z"
}
```

## POST /channels/{channel.id}/webhooks

### Description

Creates a webhook for the channel.

### Method

POST

### Endpoint

/channels/{channel.id}/webhooks

### Parameters

#### Query Parameters

- **options** (ChannelWebhookCreateOptions) - Optional - Options for creating the webhook.

### Request Example

```javascript
// Create a webhook for the current channel
channel
  .createWebhook({
    name: "Snek",
    avatar: "https://i.imgur.com/mI8XcpG.jpg",
    reason: "Needed a cool new Webhook",
  })
  .then(console.log)
  .catch(console.error);
```

### Response

#### Success Response (200)

- **webhook** (Webhook) - The created webhook object.

#### Response Example

```json
{
  "id": "112233445566778899",
  "name": "Snek",
  "avatar": "mI8XcpG.jpg",
  "token": "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789",
  "channel_id": "987654321098765432",
  "guild_id": "123456789012345678",
  "url": "https://discord.com/api/webhooks/112233445566778899/aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789"
}
```

## DELETE /channels/{channel.id}

### Description

Deletes this channel.

### Method

DELETE

### Endpoint

/channels/{channel.id}

### Parameters

#### Query Parameters

- **reason** (string) - Optional - The reason for deleting the channel.

### Request Example

```javascript
// Delete the channel
channel
  .delete("making room for new channels")
  .then(console.log)
  .catch(console.error);
```

### Response

#### Success Response (200)

- **channel** (this) - The deleted channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "general",
  "type": 0,
  "position": 1,
  "guild_id": "123456789012345678"
}
```

## PATCH /channels/{channel.id}

### Description

Edits the channel.

### Method

PATCH

### Endpoint

/channels/{channel.id}

### Parameters

#### Request Body

- **options** (GuildChannelEditOptions) - Required - Options for editing the channel.

### Request Example

```javascript
// Edit a channel
channel.edit({ name: "new-channel" }).then(console.log).catch(console.error);
```

### Response

#### Success Response (200)

- **channel** (this) - The edited channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "new-channel",
  "type": 0,
  "position": 1,
  "guild_id": "123456789012345678"
}
```

## GET /channels/{channel.id}/invites

### Description

Fetches a collection of invites to this guild channel.

### Method

GET

### Endpoint

/channels/{channel.id}/invites

### Parameters

#### Query Parameters

- **cache** (boolean) - Optional - Whether to cache the invites. Defaults to true.

### Response

#### Success Response (200)

- **invites** (Collection<string, Invite>) - A collection mapping invites by their codes.

#### Response Example

```json
{
  "invite_code_1": {
    "code": "aBcDeF",
    "guild_id": "123456789012345678",
    "channel_id": "987654321098765432"
  },
  "invite_code_2": {
    "code": "xYzAbC",
    "guild_id": "123456789012345678",
    "channel_id": "987654321098765432"
  }
}
```

## GET /channels/{channel.id}/webhooks

### Description

Fetches all webhooks for the channel.

### Method

GET

### Endpoint

/channels/{channel.id}/webhooks

### Response

#### Success Response (200)

- **webhooks** (Collection<Snowflake, Webhook>) - A collection of webhooks for the channel.

#### Response Example

```json
[
  {
    "id": "112233445566778899",
    "name": "Snek",
    "avatar": "mI8XcpG.jpg",
    "token": "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789",
    "channel_id": "987654321098765432",
    "guild_id": "123456789012345678"
  }
]
```

## PUT /channels/{channel.id}/webhooks/{webhook.id}

### Description

Edits a webhook for the channel.

### Method

PUT

### Endpoint

/channels/{channel.id}/webhooks/{webhook.id}

### Parameters

#### Query Parameters

- **options** (WebhookEditOptions) - Required - Options for editing the webhook.

### Response

#### Success Response (200)

- **webhook** (Webhook) - The edited webhook object.

#### Response Example

```json
{
  "id": "112233445566778899",
  "name": "Updated Snek",
  "avatar": "new_avatar.jpg",
  "token": "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789",
  "channel_id": "987654321098765432",
  "guild_id": "123456789012345678"
}
```

## DELETE /webhooks/{webhook.id}

### Description

Deletes a webhook.

### Method

DELETE

### Endpoint

/webhooks/{webhook.id}

### Parameters

#### Query Parameters

- **token** (string) - Required - The token of the webhook.

### Response

#### Success Response (204)

No Content.

## PUT /channels/{channel.id}/webhooks/{webhook.id}/{webhook.token}

### Description

Executes a webhook.

### Method

POST

### Endpoint

/webhooks/{webhook.id}/{webhook.token}

### Parameters

#### Query Parameters

- **options** (WebhookMessageOptions) - Required - Options for the webhook message.

### Request Example

```javascript
// Send a message using a webhook
channel
  .send("Hello from webhook!", {
    username: "My Webhook",
    avatarURL: "https://i.imgur.com/mI8XcpG.jpg",
  })
  .then(console.log)
  .catch(console.error);
```

### Response

#### Success Response (200 or 204)

- **message** (object) - The message sent by the webhook.

#### Response Example

```json
{
  "id": "111111111111111111",
  "content": "Hello from webhook!",
  "channel_id": "987654321098765432",
  "author": {
    "id": "112233445566778899",
    "username": "My Webhook",
    "avatar": "mI8XcpG.jpg"
  }
}
```

## PUT /channels/{channel.id}/tags

### Description

Sets the available tags for this forum channel.

### Method

PUT

### Endpoint

/channels/{channel.id}/tags

### Parameters

#### Request Body

- **availableTags** (readonly GuildForumTagData[]) - Required - The tags to set.
- **reason** (string) - Optional - The reason for setting the tags.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "forum-channel",
  "type": 15,
  "available_tags": [
    {
      "id": "tag1",
      "name": "Bug Report",
      "moderated": false,
      "emoji_name": null
    }
  ]
}
```

## PUT /channels/{channel.id}/threads/default-archive-duration

### Description

Sets the default auto archive duration for all newly created threads in this channel.

### Method

PUT

### Endpoint

/channels/{channel.id}/threads/default-archive-duration

### Parameters

#### Request Body

- **defaultAutoArchiveDuration** (ThreadAutoArchiveDuration) - Required - The default auto archive duration.
- **reason** (string) - Optional - The reason for setting the duration.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "general",
  "default_auto_archive_duration": 60
}
```

## PUT /channels/{channel.id}/default-reaction-emoji

### Description

Sets the default reaction emoji for this channel.

### Method

PUT

### Endpoint

/channels/{channel.id}/default-reaction-emoji

### Parameters

#### Request Body

- **defaultReactionEmoji** (DefaultReactionEmoji | null) - Required - The default reaction emoji.
- **reason** (string) - Optional - The reason for setting the emoji.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "general",
  "default_reaction_emoji": {
    "emoji_id": null,
    "emoji_name": "👍"
  }
}
```

## PUT /channels/{channel.id}/default-sort-order

### Description

Sets the default sort order mode used to order posts.

### Method

PUT

### Endpoint

/channels/{channel.id}/default-sort-order

### Parameters

#### Request Body

- **defaultSortOrder** (SortOrderType | null) - Required - The default sort order.
- **reason** (string) - Optional - The reason for setting the sort order.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "forum-channel",
  "default_sort_order": "creation_date"
}
```

## PUT /channels/{channel.id}/default-thread-rate-limit-per-user

### Description

Sets the default rate limit per user (slowmode) for new threads in this channel.

### Method

PUT

### Endpoint

/channels/{channel.id}/default-thread-rate-limit-per-user

### Parameters

#### Request Body

- **defaultThreadRateLimitPerUser** (number) - Required - The default rate limit per user.
- **reason** (string) - Optional - The reason for setting the rate limit.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "general",
  "default_thread_rate_limit_per_user": 5
}
```

## PUT /channels/{channel.id}

### Description

Sets a new name for the guild channel.

### Method

PUT

### Endpoint

/channels/{channel.id}

### Parameters

#### Request Body

- **name** (string) - Required - The new name for the channel.
- **reason** (string) - Optional - The reason for changing the name.

### Request Example

```javascript
// Set a new channel name
channel
  .setName("not_general")
  .then((newChannel) => console.log(`Channel's new name is ${newChannel.name}`))
  .catch(console.error);
```

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "not_general",
  "type": 0,
  "position": 1,
  "guild_id": "123456789012345678"
}
```

## PATCH /channels/{channel.id}

### Description

Sets whether this channel is flagged as NSFW.

### Method

PATCH

### Endpoint

/channels/{channel.id}

### Parameters

#### Request Body

- **nsfw** (boolean) - Optional - Whether the channel is NSFW. Defaults to true.
- **reason** (string) - Optional - The reason for setting NSFW status.

### Response

#### Success Response (200)

- **channel** (this) - The updated channel object.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "nsfw-channel",
  "type": 0,
  "nsfw": true,
  "guild_id": "123456789012345678"
}
```

````

--------------------------------

### REST API Get Poll Answer Voters

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIPollAnswerVotersQuery%3AInterface

Retrieves a list of users who voted for a specific answer in a poll. This endpoint allows for pagination using `after` and `limit` parameters.

```APIDOC
## GET /channels/{channel.id}/messages/{message.id}/answers/{answer.id}/voters

### Description
Retrieves a list of users who voted for a specific answer in a poll.

### Method
GET

### Endpoint
`/channels/{channel.id}/messages/{message.id}/answers/{answer.id}/voters`

### Parameters
#### Query Parameters
- **after** (Snowflake) - Optional - Get users after this user ID
- **limit** (number) - Optional - Max number of users to return (1-100). Defaults to 25.

### Request Example
```json
{
  "example": "No request body needed for GET request."
}
````

### Response

#### Success Response (200)

- **users** (Array<User>) - A list of user objects who voted for the answer.

#### Response Example

```json
{
  "example": "[
  {
    "id": "123456789012345678",
    "username": "ExampleUser",
    "discriminator": "1234",
    "public_flags": 1
  }
]"
}
```

````

--------------------------------

### Delete a Role (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleManager%3AClass

Provides an example of how to delete a role from a Discord guild using the RoleManager. It includes the role's ID and an optional reason for deletion.

```javascript
// Delete a role
guild.roles.delete('222079219327434752', 'The role needed to go')
  .then(() => console.log('Deleted the role'))
  .catch(console.error);

````

---

### Edit ApplicationCommand using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommand%3AClass

Illustrates how to edit an existing application command with new data using the `edit()` method in discord.js. The example shows updating the command's description and handling the promise.

```javascript
// Edit the description of this command
command
  .edit({
    description: "New description",
  })
  .then(console.log)
  .catch(console.error);
```

---

### RPCSetUserVoiceSettings2Result Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSetUserVoiceSettings2Result%3AInterface

Documentation for the RPCSetUserVoiceSettings2Result interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCSetUserVoiceSettings2Result

### Description
Represents the result of setting user voice settings in the Discord RPC.

### Extends
`RPCCommandMessage<RPCCommands.SetUserVoiceSettings2>`

### Properties

#### cmd
- **cmd** (Cmd) - The command type.
  - Inherited from: `BaseRPCMessage`

#### data
- **data** (RPCSetUserVoiceSettings2ResultData) - The data associated with the result.

#### nonce
- **nonce** (string) - A unique identifier for the message.
  - Inherited from: `RPCCommandMessage`
```

---

### Get Guild Prune Count

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildPruneCountResult%3AInterface

Retrieves the count of members that would be pruned in a guild. This endpoint is useful for estimating the impact of a prune operation before executing it.

```APIDOC
## GET /guilds/{guild.id}/prune

### Description
Retrieves the count of members that would be pruned in a guild.

### Method
GET

### Endpoint
`/guilds/{guild.id}/prune`

### Parameters
#### Path Parameters
- **guild.id** (snowflake) - Required - The ID of the guild to get prune count for.

#### Query Parameters
- **days** (integer) - Optional - Minimum number of days since last activity to be considered for pruning.
- **include_roles** (boolean) - Optional - Whether to include role data in the prune count.

### Request Example
```

GET /guilds/123456789012345678/prune?days=7

```

### Response
#### Success Response (200)
- **pruned** (number) - The number of members that would be pruned.
```

---

### Finding an Item in a Collection (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Demonstrates the `find` method for locating the first element in a collection that satisfies a given condition. It's comparable to `Array.find()`, but note that `get` is preferred for finding by ID.

```javascript
collection.find((user) => user.username === "Bob");
```

---

### RPCCommandOpenOverlayVoiceSettingsPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandOpenOverlayVoiceSettingsPayload%3AInterface

Defines the structure for the payload used in the OpenOverlayVoiceSettings RPC command.

````APIDOC
## Interface RPCCommandOpenOverlayVoiceSettingsPayload

### Description
Represents the payload for the `OpenOverlayVoiceSettings` command in the Discord RPC.

### Extends
`RPCCommandMessage<RPCCommands.OpenOverlayVoiceSettings>`

### Properties

#### args
- **args** (`RPCOpenOverlayVoiceSettingsArgs`) - The arguments for the voice settings command.

#### cmd
- **cmd** (`Cmd`) - The command type, inherited from `BaseRPCMessage`.

#### nonce
- **nonce** (`string`) - A unique identifier for the command, inherited from `RPCCommandMessage`.

### Request Example
```json
{
  "cmd": "OPEN_OVERLAY_VOICE_SETTINGS",
  "nonce": "some-unique-nonce",
  "args": {
    // ... RPCOpenOverlayVoiceSettingsArgs properties
  }
}
````

### Response

#### Success Response (200)

This command typically does not return a specific success response body, but rather an acknowledgment or error.

#### Response Example

```json
{
  "nonce": "some-unique-nonce",
  "evt": "OVERLAY_VOICE_SETTINGS_UPDATE",
  "data": {
    // ... voice settings data
  }
}
```

````

--------------------------------

### Get Application Name as String in JavaScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Application%3AClass

Demonstrates how the toString method of the Application class can be used to automatically return the application's name when the object is concatenated with a string. This is useful for logging or displaying the application's name.

```javascript
// Logs: Application name: My App
console.log(`Application name: ${application}`);
````

---

### Define RPCCommandGetSelectedVoiceChannelPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetSelectedVoiceChannelPayload%3AInterface

Defines the interface for the RPCCommandGetSelectedVoiceChannelPayload in discord.js. This interface extends RPCCommandMessage and specifies the structure for commands related to getting the selected voice channel.

```typescript
export interface RPCCommandGetSelectedVoiceChannelPayload extends RPCCommandMessage<RPCCommands.GetSelectedVoiceChannel>

```

---

### isReady

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Checks if the client has logged in and is ready to interact with the Discord API.

````APIDOC
## GET /isReady

### Description
Returns whether the client has logged in, indicative of being able to access properties such as `user` and `application`.

### Method
GET

### Endpoint
/isReady

### Parameters
None

### Request Example
```javascript
if (client.isReady()) {
  console.log('Client is ready!');
}
````

### Response

#### Success Response (200)

- **boolean** - `true` if the client is ready, `false` otherwise.

````

--------------------------------

### Fetch Guilds Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildsOptions%3AInterface

Provides options for fetching multiple guilds, including parameters for pagination and limiting results.

```APIDOC
## Interface FetchGuildsOptions

### Description
Options used to fetch multiple guilds.

### Properties

#### after
- **after** (Snowflake) - Optional - Get guilds after this guild id.

#### before
- **before** (Snowflake) - Optional - Get guilds before this guild id.

#### limit
- **limit** (number) - Optional - Maximum number of guilds to request (1-200).

### Request Example
```json
{
  "after": "123456789012345678",
  "before": "987654321098765432",
  "limit": 100
}
````

### Response

#### Success Response (200)

- **guilds** (Array<Guild>) - A list of guilds.

#### Response Example

```json
{
  "guilds": [
    {
      "id": "111111111111111111",
      "name": "Example Guild 1"
    },
    {
      "id": "222222222222222222",
      "name": "Example Guild 2"
    }
  ]
}
```

````

--------------------------------

### WebSocketManager Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RequiredWebSocketManagerOptions%3AInterface

Defines the required options for initializing the WebSocketManager, including intents, REST instance, and authentication token.

```APIDOC
## interface RequiredWebSocketManagerOptions

### Description
Required options for the WebSocketManager.

### Properties

#### intents
- **intents** (GatewayIntentBits | 0) - Required - The intents to request.

#### rest
- **rest** (REST) - Required - The REST instance to use for fetching gateway information.

#### token
- **token** (string) - Required - The token to use for identifying with the gateway.

### Request Example
```json
{
  "intents": "GUILDS | GUILD_MESSAGES",
  "rest": "<REST instance>",
  "token": "YOUR_DISCORD_BOT_TOKEN"
}
````

### Response

#### Success Response (200)

This interface defines options, not a direct API response.

#### Response Example

N/A

````

--------------------------------

### Delete GuildChannel Example (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannel%3AClass

Demonstrates how to delete a GuildChannel using its delete() method in JavaScript. This asynchronous operation requires the channel object and logs success or errors.

```javascript
// Delete the channel
channel.delete('making room for new channels')
  .then(console.log)
  .catch(console.error);

````

---

### Define RPCGetVoiceSettingsResult Interface in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetVoiceSettingsResult%3AInterface

This TypeScript code defines the `RPCGetVoiceSettingsResult` interface, which extends `RPCCommandMessage`. It specifies the structure for results related to getting voice settings in the Discord RPC.

```typescript
export interface RPCGetVoiceSettingsResult extends RPCCommandMessage<RPCCommands.GetVoiceSettings>

```

---

### RPCCreateChannelInviteResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCreateChannelInviteResult%3AInterface

Details about the RPCCreateChannelInviteResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCCreateChannelInviteResult

### Description
Represents the result of creating a channel invite in the Discord API via RPC.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A

### Properties

- **cmd** (Cmd) - The command type.
- **data** (RPCCreateChannelInviteResultData) - The data associated with the create channel invite result.
- **nonce** (string) - A unique identifier for the RPC message.
```

---

### Get Permissions: permissionsFor()

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildVoiceChannel%3AClass

Retrieves the overall permissions for a member or role within a specific channel, considering channel overwrites. The 'checkAdmin' parameter defaults to true.

```javascript
channel.permissionsFor(memberOrRole, (checkAdmin = true));
```

---

### FetchRecommendedShardCountOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchRecommendedShardCountOptions%3AInterface

Details about the options available when fetching recommended shard counts for Discord bots.

```APIDOC
## Interface: FetchRecommendedShardCountOptions

### Description
Options for fetching the recommended shard count.

### Properties

#### guildsPerShard (number, optional)
- **Default:** `1000`
- Description: The number of guilds to assign per shard. This helps in calculating the optimal number of shards required for your bot based on its guild count.

#### multipleOf (number, optional)
- **Default:** `1`
- Description: The multiple to which the shard count should be rounded up. A value of `16` is recommended for large bot sharding to ensure efficient distribution.
```

---

### Create a new voice channel with permission overwrites in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Illustrates creating a new voice channel with specific permission overwrites using discord.js. This example demonstrates how to deny channel view permissions for a specific user.

```javascript
guild.channels.create({
  name: "new-general",
  type: ChannelType.GuildVoice,
  permissionOverwrites: [
    {
      id: message.author.id,
      deny: [PermissionFlagsBits.ViewChannel],
    },
  ],
});
```

---

### Fetch all active threads in a guild using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Shows how to retrieve all active thread channels within a Discord guild using the GuildChannelManager. The example logs the total number of threads found.

```javascript
message.guild.channels
  .fetchActiveThreads()
  .then((fetched) => console.log(`There are ${fetched.threads.size} threads.`))
  .catch(console.error);
```

---

### ThreadChannel FetchStarterMessage API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PublicThreadChannel%3Ainterface

Fetches the message that started this thread, if any. The Promise will reject if the original message in a forum post is deleted or when the original message in the parent channel is deleted. If you just need the id of that message, use id instead.

````APIDOC
## GET /channels/{channel.id}/message

### Description
Fetches the message that started this thread, if any. The Promise will reject if the original message in a forum post is deleted or when the original message in the parent channel is deleted. If you just need the id of that message, use id instead.

### Method
GET

### Endpoint
/channels/{channel.id}/message

### Parameters
#### Path Parameters
- **channel.id** (Snowflake) - Required - The ID of the thread to fetch the starter message for.

#### Query Parameters
- **options** (BaseFetchOptions) - Optional - Options for fetching the starter message.
  - **cacheOnly** (boolean) - Optional - Whether to only fetch from cache.

### Response
#### Success Response (200)
- **message** (Message | null) - The message object that started the thread, or null if not found.

#### Response Example
```json
{
  "id": "998877665544332211",
  "channel_id": "112233445566778899",
  "guild_id": "987654321098765432",
  "author": {
    "id": "101010101010101010",
    "username": "ExampleUser",
    "discriminator": "1234",
    "avatar": "a_avatar_hash",
    "public_flags": 0
  },
  "content": "This is the first message of the thread.",
  "timestamp": "2023-10-27T09:00:00.000Z",
  "edited_timestamp": null,
  "tts": false,
  "mention_everyone": false,
  "pinned": false,
  "webhook_id": null,
  "type": 0,
  "flags": 0,
  "components": [],
  "attachments": [],
  "embeds": [],
  "mentions": [],
  "mention_roles": [],
  "mention_channels": [],
  "reactions": [],
  "nonce": null,
  "application_id": null,
  "thread": {
    "id": "123456789012345678",
    "name": "general-discussion",
    "type": 10,
    "guild_id": "987654321098765432",
    "parent_id": "112233445566778899",
    "owner_id": "101010101010101010",
    "last_message_id": "998877665544332211",
    "last_pin_timestamp": null,
    "rate_limit_per_user": 0,
    "newly_created": false,
    "archived": false,
    "locked": false,
    "invitable": null,
    "creator_id": "101010101010101010",
    "message_count": 50,
    "member_count": 5,
    "thread_metadata": {
      "archived": false,
      "auto_archive_duration": 60,
      "archive_timestamp": "2023-10-27T10:00:00.000Z",
      "locked": false,
      "invitable": null,
      "create_timestamp": "2023-10-27T09:00:00.000Z"
    },
    "guild_scheduled_event_id": null
  }
}
````

````

--------------------------------

### Get User Mention String

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMember%3AClass

Provides a string representation of the GuildMember that, when concatenated with a string, automatically formats as a user mention (e.g., "<@123456789012345678>").

```javascript
// Logs: Hello from <@123456789012345678>!
console.log(`Hello from ${member}!`);
````

---

### RPCActivityInviteUserArgs Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCActivityInviteUserArgs%3AInterface

Defines the arguments for inviting a user to an RPC activity.

```APIDOC
## Interface: RPCActivityInviteUserArgs

### Description
This interface defines the structure for arguments used when inviting a user to an RPC activity within discord.js.

### Properties

#### `pid`
- **Type**: `number`
- **Description**: The process ID associated with the activity.

#### `type`
- **Type**: `1`
- **Description**: The type of invite. Currently fixed to `1`.

#### `user_id`
- **Type**: `Snowflake`
- **Description**: The unique identifier (Snowflake) of the user to invite.
```

---

### Other Interaction Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/StringSelectMenuInteraction%3Aclass

Includes methods for launching activities and converting interactions to JSON.

```APIDOC
## Other Interaction Methods

### Description
Includes methods for launching activities and converting interactions to JSON.

### Methods

- **launchActivity(options: LaunchActivityOptions & { withResponse: true } = {})**
  - **Description**: Launches this application's activity, if enabled.
  - **Method**: Any
  - **Endpoint**: N/A (Instance Method)
  - **Parameters**: See `LaunchActivityOptions` documentation.
  - **Response**: `Promise<InteractionCallbackResponse<BooleanCache<Cached>>>`

- **toJSON(...props: Record<string, boolean | string>[])**
  - **Description**: Converts the interaction object to its JSON representation.
  - **Method**: Any
  - **Endpoint**: N/A (Instance Method)
  - **Response**: `unknown`
  - **Inherited from**: Base

- **valueOf()**
  - **Description**: Returns the primitive value of the interaction object.
  - **Method**: Any
  - **Endpoint**: N/A (Instance Method)
  - **Response**: `string`
  - **Inherited from**: Base
```

---

### clone

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Clones this channel.

````APIDOC
## clone

### Description
Clones this channel.

### Method
Asynchronous Function

### Endpoint
N/A (Client-side method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **options** (GuildChannelCloneOptions) - Optional - Options for cloning the channel.

### Request Example
```javascript
// Clone the channel
channel.clone()
  .then(newChannel => console.log(`Cloned channel: ${newChannel.name}`))
  .catch(console.error);
````

### Response

#### Success Response (Promise<this>)

- **this** - The cloned channel instance.

#### Response Example

```json
{
  "id": "newChannelId",
  "name": "cloned-channel",
  "type": "text"
}
```

````

--------------------------------

### Define RPCGetChannelsResult Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetChannelsResult%3AInterface

Defines the TypeScript interface for RPCGetChannelsResult, which extends RPCCommandMessage. This interface is used for representing the result of an RPC command to get channels.

```typescript
export interface RPCGetChannelsResult extends RPCCommandMessage<RPCCommands.GetChannels>

````

---

### APIGuildApplicationCommandPermissions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildApplicationCommandPermissions%3AInterface

Details the structure of guild application command permissions in discord.js.

````APIDOC
## Interface APIGuildApplicationCommandPermissions

### Description
Represents the permissions for an application command within a specific guild.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **application_id** (Snowflake) - Required - The id of the application the command belongs to.
- **guild_id** (Snowflake) - Required - The id of the guild.
- **id** (Snowflake) - Required - The id of the command or the application id if that permission applies to all commands.
- **permissions** (APIApplicationCommandPermission[]) - Required - The permissions for the command in the guild.

### Request Example
```json
{
  "application_id": "123456789012345678",
  "guild_id": "987654321098765432",
  "id": "112233445566778899",
  "permissions": [
    {
      "id": "112233445566778899",
      "type": 1, // Role
      "permission": true
    }
  ]
}
````

### Response

#### Success Response (200)

- **application_id** (Snowflake) - The id of the application the command belongs to.
- **guild_id** (Snowflake) - The id of the guild.
- **id** (Snowflake) - The id of the command or the application id if that permission applies to all commands.
- **permissions** (APIApplicationCommandPermission[]) - The permissions for the command in the guild.

#### Response Example

```json
{
  "application_id": "123456789012345678",
  "guild_id": "987654321098765432",
  "id": "112233445566778899",
  "permissions": [
    {
      "id": "112233445566778899",
      "type": 1, // Role
      "permission": true
    }
  ]
}
```

````

--------------------------------

### Define RESTGetAPIApplicationCommandResult Type Alias (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIApplicationCommandResult%3ATypeAlias

Defines a type alias for the result of a REST API call to get an application command. This leverages the APIApplicationCommand type from discord-api-types.

```typescript
export type RESTGetAPIApplicationCommandResult = APIApplicationCommand;
````

---

### fetchInvite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches an invite from Discord using a resolvable invite identifier.

````APIDOC
## GET /fetchInvite

### Description
Obtains an invite from Discord.

### Method
GET

### Endpoint
/fetchInvite

### Parameters
#### Path Parameters
- **invite** (InviteResolvable) - The invite identifier to fetch.
#### Query Parameters
- **options** (ClientFetchInviteOptions) - Optional parameters for fetching the invite.

### Request Example
```javascript
client.fetchInvite('https://discord.gg/djs')
  .then(invite => console.log(invite.code))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **Invite** - An object representing the fetched invite.

````

--------------------------------

### GET /channels/{channel.id}/pins

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelMessagesPinsQuery%3AInterface

Retrieves a list of pinned messages for a specific channel. You can filter the results by a timestamp or limit the number of messages returned.

```APIDOC
## GET /channels/{channel.id}/pins

### Description
Retrieves a list of pinned messages for a specific channel. You can filter the results by a timestamp or limit the number of messages returned.

### Method
GET

### Endpoint
`/channels/{channel.id}/pins`

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to retrieve pinned messages from.

#### Query Parameters
- **before** (string) - Optional - Get messages pinned before this timestamp.
- **limit** (number) - Optional - Maximum number of pins to return (1-50). Defaults to 50.

### Request Example
```json
{
  "example": "No request body needed for GET requests."
}
````

### Response

#### Success Response (200)

- **messages** (array) - An array of message objects.
  - **id** (string) - The ID of the message.
  - **channel_id** (string) - The ID of the channel the message belongs to.
  - **author** (object) - The user who sent the message.
    - **id** (string) - The ID of the user.
    - **username** (string) - The username of the user.
    - **discriminator** (string) - The discriminator of the user.
    - **avatar** (string) - The avatar hash of the user.
  - **content** (string) - The content of the message.
  - **timestamp** (string) - When the message was sent.
  - **edited_timestamp** (string) - When the message was last edited.
  - **tts** (boolean) - Whether the message is text-to-speech.
  - **mention_everyone** (boolean) - Whether the message mentions everyone.
  - **mentions** (array) - An array of user objects mentioned in the message.
  - **mention_roles** (array) - An array of role objects mentioned in the message.
  - **mention_channels** (array) - An array of channel objects mentioned in the message.
  - **attachments** (array) - An array of attachment objects.
  - **embeds** (array) - An array of embed objects.
  - **reactions** (array) - An array of reaction objects.
  - **nonce** (string | number) - Used for client-side message caching.
  - **pinned** (boolean) - Whether this message is pinned.
  - **webhook_id** (string) - If the message is from a webhook, this is the webhook's ID.
  - **type** (number) - The type of message.
  - **flags** (number) - Any message flags.
  - **referenced_message** (object) - The message referenced by this message, if any.

#### Response Example

```json
{
  "example": "[
    {
      "id": "123456789012345678",
      "channel_id": "987654321098765432",
      "author": {
        "id": "112233445566778899",
        "username": "ExampleUser",
        "discriminator": "1234",
        "avatar": "a_hash"
      },
      "content": "This is a pinned message!",
      "timestamp": "2023-10-27T10:00:00.000Z",
      "pinned": true
    }
  ]"
}
```

````

--------------------------------

### RPCVoiceSettingsMode Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCVoiceSettingsMode%3AInterface

Defines the structure for voice activity settings within Discord Rich Presence.

```APIDOC
## Interface RPCVoiceSettingsMode

### Description
Represents the configuration for voice activity settings in Discord Rich Presence, including automatic threshold adjustment, PTT delay, shortcut keys, manual threshold, and mode type.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Properties
#### Auto Threshold
- **auto_threshold** (boolean) - Required - If true, the voice activity threshold is set automatically.

#### Delay
- **delay** (number) - Required - The Push-to-Talk (PTT) release delay in milliseconds. Minimum: 0, Maximum: 2000.

#### Shortcut
- **shortcut** (RPCVoiceShortcutKeyCombo) - Required - Defines the shortcut key combinations for Push-to-Talk.

#### Threshold
- **threshold** (number) - Required - The threshold for voice activity detection in decibels (dB). Minimum: -100.0, Maximum: 0.0.

#### Type
- **type** (RPCVoiceSettingsModeType) - Required - Specifies the type of voice setting mode.

### Request Example
```json
{
  "auto_threshold": true,
  "delay": 100,
  "shortcut": {},
  "threshold": -60.0,
  "type": "voice_activity"
}
````

### Response

#### Success Response (200)

- **auto_threshold** (boolean) - Indicates if the voice activity threshold is set automatically.
- **delay** (number) - The PTT release delay in milliseconds.
- **shortcut** (RPCVoiceShortcutKeyCombo) - The shortcut key combo for PTT.
- **threshold** (number) - The threshold for voice activity in dB.
- **type** (RPCVoiceSettingsModeType) - The voice setting mode type.

#### Response Example

```json
{
  "auto_threshold": true,
  "delay": 100,
  "shortcut": {},
  "threshold": -60.0,
  "type": "voice_activity"
}
```

````

--------------------------------

### WelcomeScreen Class

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/WelcomeScreen%3AClass

Represents a welcome screen for a Discord guild. This class provides access to the welcome screen's description, enabled status, associated guild, and welcome channels.

```APIDOC
## Class: WelcomeScreen

### Description
Represents a welcome screen for a Discord guild. This class provides access to the welcome screen's description, enabled status, associated guild, and welcome channels.

### Properties

#### client
- **client** (Client<true>) - Readonly. The client instance that instantiated this WelcomeScreen.
  * Inherited from: Base

#### description
- **description** (string | null) - The description text for the welcome screen. Can be null if not set.

#### enabled
- **enabled** (boolean) - Readonly. Indicates whether the welcome screen is currently enabled for the guild.

#### guild
- **guild** (Guild | InviteGuild) - The guild object associated with this welcome screen.

#### welcomeChannels
- **welcomeChannels** (Collection<Snowflake, WelcomeChannel>) - A collection of WelcomeChannel objects associated with this welcome screen.

### Methods

#### toJSON
- **toJSON** (...props: Record<string, boolean | string>[]): unknown
  * Converts the WelcomeScreen object to a JSON-serializable format.
  * Inherited from: Base

#### valueOf
- **valueOf** (): string
  * Returns a string representation of the WelcomeScreen object.
  * Inherited from: Base
````

---

### Define RPCCommandGetApplicationTicketPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetApplicationTicketPayload%3AInterface

Defines the TypeScript interface for RPCCommandGetApplicationTicketPayload, extending RPCCommandMessage. This interface is used for commands related to getting application tickets within the RPC system.

```typescript
export interface RPCCommandGetApplicationTicketPayload extends RPCCommandMessage<RPCCommands.GetApplicationTicket>

```

---

### fetchStickerPacks

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches a list of available sticker packs or a specific sticker pack by its ID.

````APIDOC
## GET /fetchStickerPacks

### Description
Obtains the list of available sticker packs.

### Method
GET

### Endpoint
/fetchStickerPacks

### Parameters
#### Query Parameters
- **packId** (Snowflake) - Optional. The ID of a specific sticker pack to fetch.

### Request Example
```javascript
// Fetch all sticker packs
client.fetchStickerPacks()
  .then(packs => console.log(packs.map(pack => pack.name)))
  .catch(console.error);

// Fetch a specific sticker pack
client.fetchStickerPacks({ packId: '751604115435421716' })
  .then(pack => console.log(pack.name))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **StickerPack[] | StickerPack** - A collection of sticker packs, or a single sticker pack if a packId was provided.

````

--------------------------------

### Get Store Page Asset

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves an asset from a store page. Supports PNG, JPEG, and WebP formats. Requires application ID, asset ID, and optionally format (defaults to PNG).

```javascript
storePageAsset: (applicationId: Snowflake, assetId: string, format?: Format) => `/app-assets/${applicationId}/store/${assetId}.${format}`
````

---

### Defer Ephemeral Reply Later (Discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/StringSelectMenuInteraction%3AClass

This example demonstrates deferring a reply to an interaction with the `ephemeral` flag set. This allows for a delayed, private response to the user. The promise resolves upon successful deferral.

```javascript
interaction
  .deferReply({ flags: MessageFlags.Ephemeral })
  .then(console.log)
  .catch(console.error);
```

---

### warn

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Emitted for general warnings.

```APIDOC
## warn

### Description
Emitted for general warnings.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **info** (string) - The warning information.

#### Response Example
None
```

---

### Fetch a Thread by ID (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ThreadManager%3Aclass

Demonstrates how to fetch a specific thread using its ID from the ThreadManager. This example uses a promise to handle the asynchronous operation and logs the thread's name upon successful retrieval.

```javascript
// Fetch a thread by its id
channel.threads
  .fetch("831955138126104859")
  .then((channel) => console.log(channel.name))
  .catch(console.error);
```

---

### POST /api/channels/{channel.id}/threads

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelThreadsJSONBody%3AInterface

Starts a new thread in a channel without an initial message. This endpoint allows for the creation of public or private threads with various configuration options.

````APIDOC
## POST /api/channels/{channel.id}/threads

### Description
Starts a new thread in a channel without an initial message. This endpoint allows for the creation of public or private threads with various configuration options.

### Method
POST

### Endpoint
/api/channels/{channel.id}/threads

### Parameters
#### Path Parameters
- **channel.id** (string) - Required - The ID of the channel to create the thread in.

#### Request Body
- **name** (string) - Required - 1-100 character thread name.
- **auto_archive_duration** (number) - Optional - The amount of time in minutes to wait before automatically archiving the thread.
- **invitable** (boolean) - Optional - Whether non-moderators can add other non-moderators to the thread; only available when creating a private thread.
- **rate_limit_per_user** (number) - Optional - Amount of seconds a user has to wait before sending another message (0-21600).
- **type** (ThreadChannelType) - Optional - The type of thread to create. Defaults to `ChannelType.PrivateThread` in API v9 and v10.

### Request Example
```json
{
  "name": "My Awesome Thread",
  "auto_archive_duration": 60,
  "invitable": true,
  "rate_limit_per_user": 5,
  "type": 1
}
````

### Response

#### Success Response (200)

- **id** (string) - The ID of the created thread.
- **name** (string) - The name of the thread.
- **type** (number) - The type of the thread.
- **auto_archive_duration** (number) - The duration in minutes before the thread is automatically archived.
- **invitable** (boolean) - Indicates if the thread is invitable by non-moderators.
- **rate_limit_per_user** (number) - The rate limit per user for sending messages in the thread.

#### Response Example

```json
{
  "id": "123456789012345678",
  "name": "My Awesome Thread",
  "type": 1,
  "auto_archive_duration": 60,
  "invitable": true,
  "rate_limit_per_user": 5
}
```

````

--------------------------------

### Delete a channel using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildChannelManager%3AClass

Demonstrates how to delete a Discord channel by its ID using the GuildChannelManager in discord.js. This example includes providing a reason for the deletion.

```javascript
guild.channels.delete('858850993013260338', 'making room for new channels')
  .then(console.log)
  .catch(console.error);

````

---

### warn

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Emitted for general warnings.

```APIDOC
## warn

### Description
Emitted for general warnings.

### Method
EVENT

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A
```

---

### Create Application Command using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandManager%3Aclass

Demonstrates how to create a new application command using the `create` method of the ApplicationCommandManager. This method takes command data and an optional guild ID as input and returns a Promise that resolves with the created application command.

```javascript
client.application.commands
  .create({
    name: "test",
    description: "A test command",
  })
  .then(console.log)
  .catch(console.error);
```

---

### Get Guild Members

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of all members within a specific guild. This endpoint is useful for fetching member data for various guild management tasks. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/members
```

---

### Create Permission Overwrites (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PermissionOverwriteManager%3AClass

Example of creating or replacing permission overwrites for a user or role in a discord.js channel. This method returns a Promise that resolves with the updated channel object.

```javascript
// Create or Replace permission overwrites for a message author
message.channel.permissionOverwrites
  .create(message.author, {
    SendMessages: false,
  })
  .then((channel) =>
    console.log(channel.permissionOverwrites.cache.get(message.author.id)),
  )
  .catch(console.error);
```

---

### WebSocketManager Sharding Strategy Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/OptionalWebSocketManagerOptions%3AInterface

Demonstrates how to configure the WebSocketManager with a custom sharding strategy using WorkerShardingStrategy. This is useful for managing multiple shards efficiently, especially in larger bots. It requires the 'token', 'intents', and 'rest' objects, and optionally allows defining 'shardsPerWorker'.

```typescript
const manager = new WebSocketManager({
  token: process.env.DISCORD_TOKEN,
  intents: 0, // for no intents
  rest,
  buildStrategy: (manager) =>
    new WorkerShardingStrategy(manager, { shardsPerWorker: 2 }),
});
```

---

### Other Interaction Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleSelectMenuInteraction%3AClass

Includes methods for launching activities and converting interactions to JSON.

```APIDOC
## Other Interaction Methods

### launchActivity(options)

Launches this application's activity, if enabled.

**Parameters**

*   **options** (LaunchActivityOptions & { withResponse: true }) - Options for launching the activity.

**Returns**

*   `Promise<InteractionCallbackResponse<BooleanCache<Cached>>>`

### toJSON(...props)

Converts the interaction to a JSON object.

**Parameters**

*   **...props** (Record<string, boolean | string>) - Properties to include in the JSON object.

**Returns**

*   `unknown`

### valueOf()

Returns the primitive value of an interaction.
```

---

### Get Sticker Pack Banner

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches a sticker pack banner asset. Supports PNG, JPEG, and WebP formats. Requires banner asset ID and format.

```javascript
stickerPackBanner: (stickerPackBannerAssetId: Snowflake, format: Format) => `/app-assets/710982414301790216/store/${stickerPackBannerAssetId}.${format}`
```

---

### Sending a Message in a Thread with Webhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Webhook%3Aclass

Illustrates sending a message to a specific thread using a discord.js Webhook. This example shows how to specify the `threadId` option within the `send` method.

```javascript
// Send a basic message in a thread
webhook
  .send({ content: "hello!", threadId: "836856309672348295" })
  .then((message) => console.log(`Sent message: ${message.content}`))
  .catch(console.error);
```

---

### Define RPCCommandGetSkusPayload Interface in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetSkusPayload%3AInterface

Defines the RPCCommandGetSkusPayload interface in TypeScript, extending RPCCommandMessage. This interface is used for specifying the payload structure when getting SKUs via RPC commands.

```typescript
export interface RPCCommandGetSkusPayload extends RPCCommandMessage<RPCCommands.GetSkus>

```

---

### Get Random Key(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves unique random key(s) from the collection. Returns a single key if no amount is specified, or an array of keys if an amount is provided.

```javascript
collection.randomKey();
collection.randomKey(3);
```

---

### Define FetchSoundboardSoundsOptions Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchSoundboardSoundsOptions%3AInterface

Defines the options interface for fetching soundboard sounds. It includes optional properties for guild IDs and time.

```typescript
export interface FetchSoundboardSoundsOptions {
  guildIds?: readonly Snowflake[];
  time?: number;
}
```

---

### Gateway Bot Info API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGatewayBotResult%3ATypeAlias

Retrieves information about the Discord Gateway Bot, including recommended shards and session start limit.

````APIDOC
## GET /gateway/bot

### Description
Retrieves information about the Discord Gateway Bot, including recommended shards and session start limit.

### Method
GET

### Endpoint
/gateway/bot

### Parameters
#### Query Parameters
None

#### Path Parameters
None

### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **url** (string) - The WebSocket URL for connecting to the gateway.
- **shards** (integer) - The recommended number of shards to use.
- **session_start_limit** (object) - Information about the session start limit.
  - **total** (integer) - The total number of sessions that can be started per 10 seconds.
  - **remaining** (integer) - The number of remaining sessions that can be started per 10 seconds.
  - **reset_after** (integer) - The number of milliseconds after which the session limit resets.
  - **max_concurrency** (integer) - The maximum number of concurrent sessions allowed per gateway version.

#### Response Example
```json
{
  "url": "wss://gateway.discord.gg/?v=9&encoding=json",
  "shards": 1,
  "session_start_limit": {
    "total": 100,
    "remaining": 99,
    "reset_after": 15000,
    "max_concurrency": 1
  }
}
````

````

--------------------------------

### Define RPCCommandGetRelationshipsPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetRelationshipsPayload%3AInterface

Defines the RPCCommandGetRelationshipsPayload interface, which extends RPCCommandMessage. It specifies the structure for arguments, command type, and nonce for RPC commands related to getting relationships.

```typescript
export interface RPCCommandGetRelationshipsPayload extends RPCCommandMessage<RPCCommands.GetRelationships>

````

---

### Define RPCGetSelectedVoiceChannelResult Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetSelectedVoiceChannelResult%3AInterface

Defines the structure for the result of an RPC command to get the selected voice channel. It extends the base RPCCommandMessage with specific data types.

```typescript
export interface RPCGetSelectedVoiceChannelResult extends RPCCommandMessage<RPCCommands.GetSelectedVoiceChannel>

```

---

### ThumbnailComponentData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ThumbnailComponentData%3AInterface

Documentation for the ThumbnailComponentData interface, detailing its properties and inheritance from BaseComponentData.

```APIDOC
## Interface ThumbnailComponentData

### Description
Represents the data for a thumbnail component.

### Extends
`BaseComponentData`

### Properties

#### `description` (string) - Optional

The description of the thumbnail.

#### `id` (number) - Optional

The ID of the thumbnail component. Inherited from `BaseComponentData`.

#### `media` (UnfurledMediaItemData) - Required

The media associated with the thumbnail.

#### `spoiler` (boolean) - Optional

Indicates whether the thumbnail should be marked as a spoiler.

#### `type` (ComponentType) - Required

The type of the component. Inherited from `BaseComponentData`.
```

---

### Fetch Guild Members (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMemberManager%3AClass

Provides examples for fetching guild members. This can be used to fetch all members, a single member by ID, or multiple members using an array of user IDs, with options for caching and including presences.

```javascript
// Fetch all members from a guild
guild.members.fetch().then(console.log).catch(console.error);
```

```javascript
// Fetch a single member
guild.members.fetch("66564597481480192").then(console.log).catch(console.error);
```

```javascript
// Fetch a single member without checking cache
guild.members
  .fetch({ user: "66564597481480192", force: true })
  .then(console.log)
  .catch(console.error);
```

```javascript
// Fetch a single member without caching
guild.members
  .fetch({ user: "66564597481480192", cache: false })
  .then(console.log)
  .catch(console.error);
```

```javascript
// Fetch by an array of users including their presences
guild.members
  .fetch({
    user: ["66564597481480192", "191615925336670208"],
    withPresences: true,
  })
  .then(console.log)
  .catch(console.error);
```

```javascript
// Fetch by query
guild.members
  .fetch({ query: "hydra", limit: 1 })
  .then(console.log)
  .catch(console.error);
```

---

### Get Random Value/Key from Collection (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3Aclass

Obtains unique random value(s) or key(s) from the collection. If no amount is specified, a single value/key is returned. Otherwise, an array of values/keys is returned.

```javascript
collection.random();
collection.randomKey();
```

---

### RPCSubscribeEntitlementCreate Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeEntitlementCreate%3AInterface

Defines the structure for subscribing to entitlement creation events within the Discord RPC.

````APIDOC
## Interface RPCSubscribeEntitlementCreate

### Description
Represents the structure for subscribing to entitlement creation events using the Discord Rich Presence (RPC) protocol. It extends the base RPCSubscribeMessage and specifies the event type as RPCEvents.EntitlementCreate.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None (This is an interface definition, not an endpoint)

### Request Example
```json
{
  "args": { ... },
  "cmd": "...",
  "evt": "ENTITLEMENT_CREATE",
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (N/A)

N/A (This is an interface definition)

#### Response Example

N/A (This is an interface definition)

## Properties

### args

- **args** (RPCSubscribeEntitlementCreateArgs) - Required - Arguments specific to the entitlement creation subscription.

### cmd

- **cmd** (Cmd) - Required - The command type, inherited from BaseRPCMessage.

### evt

- **evt** (RPCEvents.EntitlementCreate) - Required - The event type, specifically indicating an entitlement creation event.

### nonce

- **nonce** (string) - Required - A unique identifier for the RPC message, inherited from RPCCommandMessage.

````

--------------------------------

### Get Guild Role Member Counts

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves the count of members associated with each role in a guild. This is useful for understanding role distribution and for administrative purposes. Requires guild ID.

```HTTP
GET /guilds/{guild.id}/roles/member-counts
````

---

### RPCCommandGetEntitlementTicketPayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetEntitlementTicketPayload%3AInterface

Documentation for the RPCCommandGetEntitlementTicketPayload interface, which extends RPCCommandMessage.

````APIDOC
## Interface: RPCCommandGetEntitlementTicketPayload

### Description
Represents the payload for the `GetEntitlementTicket` RPC command in discord.js.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Properties
- **args** (RPCGetEntitlementTicketArgs) - Required - The arguments for the `GetEntitlementTicket` command.
- **cmd** (Cmd) - Required - The command identifier, inherited from `BaseRPCMessage`.
- **nonce** (string) - Required - A unique identifier for the command, inherited from `RPCCommandMessage`.

### Request Example
```json
{
  "args": { ... },
  "cmd": "GetEntitlementTicket",
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (200)

- **ticket** (string) - The entitlement ticket string.

#### Response Example

```json
{
  "nonce": "some-unique-nonce",
  "data": {
    "ticket": "your-entitlement-ticket"
  }
}
```

````

--------------------------------

### MediaGalleryItemData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MediaGalleryItemData%3AInterface

Documentation for the MediaGalleryItemData interface, detailing its properties and their types.

```APIDOC
## Interface MediaGalleryItemData

### Description
Represents data for an item within a media gallery.

### Properties

#### description (string) - Optional
The description of the media gallery item.

#### media (UnfurledMediaItemData) - Required
The media content for the media gallery item.

#### spoiler (boolean) - Optional
Indicates whether the media gallery item should be marked as a spoiler.
````

---

### Get First Value/Key from Collection (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3AClass

Obtains the first value or key from a collection. If an amount is provided, it returns an array of values/keys. Negative amounts count from the end of the collection.

```javascript
collection.first();
collection.firstKey();
```

---

### GET /avatar-decorations/{user.id}/{user.avatar_decoration}.png

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's avatar decoration. This endpoint is deprecated and replaced by the avatarDecoration endpoint. Supports PNG format.

```APIDOC
## GET /avatar-decorations/{user.id}/{user.avatar_decoration}.png

### Description
Retrieves a user's avatar decoration. This endpoint is deprecated and should be replaced by the `avatarDecoration` endpoint. This route supports the PNG format.

### Method
GET

### Endpoint
`/avatar-decorations/{userId}/{userAvatarDecoration}.png`

### Parameters
#### Path Parameters
- **userId** (Snowflake) - Required - The ID of the user.
- **userAvatarDecoration** (string) - Required - The avatar decoration hash for the user.

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested avatar decoration image.

#### Response Example
(Binary image data)
```

---

### Fetch Reaction Users Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchReactionUsersOptions%3AInterface

Options used to fetch users who gave a reaction to a message.

```APIDOC
## Interface: FetchReactionUsersOptions

### Description
Options used to fetch users who gave a reaction.

### Properties

#### `after` (Snowflake) - Optional
Limit fetching users to those with an id greater than the supplied id.

#### `limit` (number) - Optional
The maximum amount of users to fetch, defaults to `100`.

#### `type` (ReactionType) - Optional
The reaction type to fetch, defaults to `ReactionType.Normal`.
```

---

### GET /channels/{channel.id}/pins

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelMessagesPinsResult%3AInterface

Retrieves a list of all pinned messages in a given channel. This endpoint is useful for displaying pinned messages in a UI or for moderation purposes.

````APIDOC
## GET /channels/{channel.id}/pins

### Description
Retrieves a list of all pinned messages in a given channel.

### Method
GET

### Endpoint
`/channels/{channel.id}/pins`

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to retrieve pinned messages from.

### Request Example
```json
{}
````

### Response

#### Success Response (200)

- **has_more** (boolean) - Whether there are more items available.
- **items** (APIMessagePin[]) - Array of pinned messages.

#### Response Example

```json
{
  "has_more": false,
  "items": [
    {
      "id": "123456789012345678",
      "channel_id": "987654321098765432",
      "author": {
        "id": "112233445566778899",
        "username": "ExampleUser",
        "discriminator": "0001",
        "avatar": "a1b2c3d4e5f67890a1b2c3d4e5f67890"
      },
      "content": "This is a pinned message!",
      "timestamp": "2023-10-27T10:00:00.000Z",
      "edited_timestamp": null,
      "tts": false,
      "mention_everyone": false,
      "pinned": true,
      "webhook_id": null,
      "type": 0,
      "flags": 0,
      "reference": null
    }
  ]
}
```

````

--------------------------------

### GET /guilds/{guild.id}/users/{user.id}/banners/{guild_member.banner}.{png|jpeg|webp|gif}

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's guild member banner. Supports PNG, JPEG, WebP, and GIF formats.

```APIDOC
## GET /guilds/{guild.id}/users/{user.id}/banners/{guild_member.banner}.{format}

### Description
Retrieves a user's guild member banner. This route supports PNG, JPEG, WebP, and GIF formats.

### Method
GET

### Endpoint
`/guilds/{guildId}/users/{userId}/banners/{guildMemberBanner}.{format}`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.
- **userId** (Snowflake) - Required - The ID of the user.
- **guildMemberBanner** (string) - Required - The banner hash for the guild member.
- **format** (Format) - Required - The desired image format (e.g., png, jpeg, webp, gif).

### Response
#### Success Response (200)
- **Image Data** (binary) - The requested banner image.

#### Response Example
(Binary image data)
````

---

### fetchVoiceRegions()

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches a collection of available voice regions for Discord.

````APIDOC
## GET /fetchVoiceRegions

### Description
Obtains the available voice regions from Discord.

### Method
GET

### Endpoint
/fetchVoiceRegions

### Parameters
None

### Request Example
```javascript
client.fetchVoiceRegions()
  .then(regions => console.log(`Available regions are: ${regions.map(region => region.name).join(', ')}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **regions** (Collection<string, VoiceRegion>) - A collection of available voice regions.

````

--------------------------------

### Fetch Default Soundboard Sounds (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Obtains the list of default soundboard sounds. This method returns a Promise that resolves to a Collection of SoundboardSound objects. It can be used to display available soundboard sounds to the user.

```javascript
client.fetchDefaultSoundboardSounds()
 .then(sounds => console.log(`Available soundboard sounds are: ${sounds.map(sound => sound.name).join(', ')}`))
 .catch(console.error);
````

---

### FetchMembersOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchMembersOptions%3AInterface

Documentation for the FetchMembersOptions interface, used for fetching multiple members from a Discord guild.

````APIDOC
## Interface FetchMembersOptions

```typescript
export interface FetchMembersOptions
````

### Description

Options used to fetch multiple members from a guild.

### Properties

#### limit

- **limit** (number) - Optional - Maximum number of members to request. Defaults to 0.

#### nonce

- **nonce** (string) - Optional - Nonce for this request (32 characters max - default to base 16 now timestamp).

#### query

- **query** (string) - Optional - Limit fetch to members with similar usernames.

#### time

- **time** (number) - Optional - Timeout for receipt of members. Defaults to 120000 (120 seconds).

#### user

- **user** (UserResolvable | readonly UserResolvable[]) - Optional - The user(s) to fetch.

#### withPresences

- **withPresences** (boolean) - Optional - Whether to include the presences. Defaults to false.

````

--------------------------------

### Define RPCCommandGetImagePayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetImagePayload%3AInterface

Defines the structure for the RPCCommandGetImagePayload interface in TypeScript, which extends RPCCommandMessage. This interface is used for commands related to getting images within the RPC system.

```typescript
export interface RPCCommandGetImagePayload extends RPCCommandMessage<RPCCommands.GetImage>

````

---

### Setting Command Description - discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandOptionBase%3AClass

Demonstrates how to set the description for a command option using the setDescription method. This method takes a string argument and returns the builder instance, allowing for method chaining.

```typescript
setDescription(description: string): this
```

---

### Define RPCStartPurchaseResult Interface in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCStartPurchaseResult%3AInterface

Defines the `RPCStartPurchaseResult` interface, which extends `RPCCommandMessage` for Discord's Rich Presence Protocol. This interface specifies the structure for starting a purchase, including command, data, and nonce properties.

```typescript
export interface RPCStartPurchaseResult extends RPCCommandMessage<RPCCommands.StartPurchase> {
  cmd: Cmd;
  data: RPCStartPurchaseResultData;
  nonce: string;
}
```

---

### Add Permissions to a Command (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandPermissionsManager%3Aclass

Demonstrates how to add permissions to an application command using the `add` method. This example shows blocking a specific role from using a command. It requires the command ID, a token, and an array of permission objects.

```javascript
guild.commands.permissions
  .add({
    command: "123456789012345678",
    token: "TotallyRealToken",
    permissions: [
      {
        id: "876543211234567890",
        type: ApplicationCommandPermissionType.Role,
        permission: false,
      },
    ],
  })
  .then(console.log)
  .catch(console.error);
```

---

### Fetching Messages with discord.js MessageManager

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MessageManager%3AClass

Demonstrates how to fetch messages from a channel using the MessageManager's fetch method. Examples show fetching a single message, multiple messages with caching disabled, messages around a specific ID, and filtering messages by author.

```javascript
// Fetch a message
channel.messages
  .fetch("99539446449315840")
  .then((message) => console.log(message.content))
  .catch(console.error);
```

```javascript
// Fetch a maximum of 10 messages without caching
channel.messages
  .fetch({ limit: 10, cache: false })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
```

```javascript
// Fetch a maximum of 10 messages without caching around a message id
channel.messages
  .fetch({ limit: 10, cache: false, around: "99539446449315840" })
  .then((messages) => console.log(`Received ${messages.size} messages`))
  .catch(console.error);
```

```javascript
// Fetch messages and filter by a user id
channel.messages
  .fetch()
  .then((messages) =>
    console.log(
      `${
        messages.filter((message) => message.author.id === "84484653687267328")
          .size
      } messages`,
    ),
  )
  .catch(console.error);
```

---

### AwaitReactionsOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/AwaitReactionsOptions%3AInterface

Documentation for the AwaitReactionsOptions interface, which extends ReactionCollectorOptions and provides additional properties for configuring reaction collection.

````APIDOC
## Interface: AwaitReactionsOptions

### Description
An object containing the same properties as CollectorOptions, but a few more, used for awaiting reactions.

### Properties

#### Path Parameters
None

#### Query Parameters
None

#### Request Body

##### `dispose` (boolean) - Optional
Whether to dispose data when it's deleted. Defaults to `false`.
Inherited from: `CollectorOptions`

##### `errors` (readonly string[]) - Optional
Stop/end reasons that cause the promise to reject.

##### `filter` (CollectorFilter<FilterArguments>) - Optional
The filter applied to this collector.
Inherited from: `CollectorOptions`

##### `idle` (number) - Optional
How long to stop the collector after inactivity in milliseconds.
Inherited from: `CollectorOptions`

##### `max` (number) - Optional
The maximum total amount of reactions to collect.
Inherited from: `ReactionCollectorOptions`

##### `maxEmojis` (number) - Optional
The maximum number of emojis to collect.
Inherited from: `ReactionCollectorOptions`

##### `maxUsers` (number) - Optional
The maximum number of users to react.
Inherited from: `ReactionCollectorOptions`

##### `time` (number) - Optional
How long to run the collector for in milliseconds.
Inherited from: `CollectorOptions`

### Request Example
```json
{
  "dispose": true,
  "errors": ["time", "user"],
  "filter": "(reaction, user) => !user.bot",
  "idle": 60000,
  "max": 10,
  "maxEmojis": 5,
  "maxUsers": 3,
  "time": 300000
}
````

### Response

#### Success Response (200)

This interface defines options for a request, not a direct response.

#### Response Example

N/A

````

--------------------------------

### Reply to Interaction

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ButtonInteraction%3Aclass

Creates a reply to the current interaction. The `withResponse` option can be used to fetch the interaction callback response. Examples show a simple text reply and a reply with an embed.

```typescript
// Reply to the interaction and fetch the response
interaction.reply({ content: 'Pong!', withResponse: true })
  .then((response) => console.log(`Reply sent with content ${response.resource.message.content}`))
  .catch(console.error);
````

```typescript
// Create an ephemeral reply with an embed
const embed = new EmbedBuilder().setDescription("Pong!");

interaction
  .reply({ embeds: [embed], flags: MessageFlags.Ephemeral })
  .then(() => console.log("Reply sent."))
  .catch(console.error);
```

---

### fetchGuildTemplate(template)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches a specific guild template from Discord using its code or URL.

````APIDOC
## GET /fetchGuildTemplate

### Description
Obtains a template from Discord.

### Method
GET

### Endpoint
/fetchGuildTemplate

### Parameters
#### Path Parameters
- **template** (GuildTemplateResolvable) - Required - The template code or URL to fetch.

### Request Example
```javascript
client.fetchGuildTemplate('https://discord.new/FKvmczH2HyUf')
  .then(template => console.log(`Obtained template with code: ${template.code}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **template** (GuildTemplate) - The fetched guild template object.

````

--------------------------------

### Get Role Icon

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a role's icon image. Supports PNG, JPEG, and WebP formats. Requires role ID, icon string, and format.

```javascript
roleIcon: (roleId: Snowflake, roleIcon: string, format: Format) => `/role-icons/${roleId}/${roleIcon}.${format}`
````

---

### Get Team Icon

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches a team's icon image. Supports PNG, JPEG, and WebP formats. Requires team ID, icon string, and format.

```javascript
teamIcon: (teamId: Snowflake, teamIcon: string, format: Format) => `/team-icons/${teamId}/${teamIcon}.${format}`
```

---

### Define RPCCommandGetChannelPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetChannelPayload%3AInterface

Defines the TypeScript interface for RPCCommandGetChannelPayload, which extends RPCCommandMessage. This interface is used for representing a command to get channel information within the Discord RPC system.

```typescript
export interface RPCCommandGetChannelPayload extends RPCCommandMessage<RPCCommands.GetChannel>

```

---

### Create Guild Soundboard Sound with discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildSoundboardSoundManager%3AClass

Demonstrates how to create a new soundboard sound for a Discord guild using the discord.js library. This method requires a file path and a name for the sound. It returns a Promise that resolves with the created GuildSoundboardSound object.

```javascript
guild.soundboardSounds
  .create({ file: "./sound.mp3", name: "sound" })
  .then((sound) =>
    console.log(`Created new soundboard sound with name ${sound.name}!`),
  )
  .catch(console.error);
```

---

### Fetching Pinned Messages with discord.js MessageManager

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MessageManager%3AClass

Provides examples for fetching pinned messages in a channel using the MessageManager. The fetchPins method is used to retrieve pinned messages, returning a paginated result. Note that reaction data is not included and must be fetched separately.

```javascript
// Get pinned messages
channel.messages
  .fetchPins()
  .then((messages) => console.log(`Received ${messages.items.length} messages`))
  .catch(console.error);
```

---

### Define RPCGetEntitlementTicketResult Interface in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetEntitlementTicketResult%3AInterface

This TypeScript code defines the `RPCGetEntitlementTicketResult` interface, which extends `RPCCommandMessage`. It specifies the structure for a result object related to getting an entitlement ticket via RPC.

```typescript
export interface RPCGetEntitlementTicketResult extends RPCCommandMessage<RPCCommands.GetEntitlementTicket>
```

---

### Create Webhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Creates a webhook for the current channel. Accepts a ChannelWebhookCreateOptions object for name, avatar, and reason. Returns a Promise that resolves with the created Webhook object.

```javascript
channel
  .createWebhook({
    name: "Snek",
    avatar: "https://i.imgur.com/mI8XcpG.jpg",
    reason: "Needed a cool new Webhook",
  })
  .then(console.log)
  .catch(console.error);
```

---

### Get Key at Index (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves the key at a specific index within the collection, supporting both positive and negative integers for indexing. Negative integers count from the end of the collection.

```javascript
collection.keyAt(0);
collection.keyAt(-1);
```

---

### discord.js - shouldUseGlobalFetchAndWebSocket

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/shouldUseGlobalFetchAndWebSocket%3AFunction

This function checks if the environment should use global fetch and WebSocket.

````APIDOC
## Function: shouldUseGlobalFetchAndWebSocket

### Description
Checks whether the current environment should utilize global fetch and WebSocket implementations.

### Method
`declare function`

### Endpoint
N/A (Internal function)

### Parameters
None

### Request Example
N/A

### Response
#### Success Response (boolean)
- **Returns** (boolean) - `true` if global fetch and WebSocket should be used, `false` otherwise.

#### Response Example
```json
true
````

````

--------------------------------

### Edit Permission Overwrites (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PermissionOverwriteManager%3AClass

Example of editing or creating permission overwrites for a user or role in a discord.js channel. This method returns a Promise that resolves with the updated channel object.

```javascript
// Edit or Create permission overwrites for a message author
message.channel.permissionOverwrites.edit(message.author, {
  SendMessages: false
})
  .then(channel => console.log(channel.permissionOverwrites.cache.get(message.author.id)))
  .catch(console.error);

````

---

### fetchGuildWidget

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches the widget data of a guild from Discord. This is available for guilds with the widget enabled.

````APIDOC
## GET /fetchGuildWidget

### Description
Obtains the widget data of a guild from Discord, available for guilds with the widget enabled.

### Method
GET

### Endpoint
/fetchGuildWidget

### Parameters
#### Path Parameters
- **guild** (GuildResolvable) - The guild to fetch widget data for.

### Request Example
```javascript
// Assuming 'guildId' is a valid GuildResolvable
client.fetchGuildWidget(guildId)
  .then(widget => console.log(widget.instant_invite))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **Widget** - An object containing the guild's widget data.

````

--------------------------------

### Set Emoji Roles using GuildEmojiRoleManager in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildEmojiRoleManager%3AClass

Demonstrates how to set the roles that can use a specific emoji using the GuildEmojiRoleManager. This includes examples for setting a single role and removing all roles.

```javascript
// Set the emoji's roles to a single role
guildEmoji.roles.set(['391156570408615936'])
  .then(console.log)
  .catch(console.error);

````

```javascript
// Remove all roles from an emoji
guildEmoji.roles.set([]).then(console.log).catch(console.error);
```

---

### TeamMember toString Method Example in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/TeamMember%3AClass

Demonstrates the usage of the toString method for the TeamMember class in discord.js. When concatenated with a string, this method automatically returns the team member's mention, providing a convenient way to reference them in logs or messages.

```javascript
// Logs: Team Member's mention: <@123456789012345678>
console.log(`Team Member's mention: ${teamMember}`);
```

---

### Set Channel Permission Overwrites (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PermissionOverwriteManager%3AClass

Example of replacing all permission overwrites in a discord.js channel with a new set. This method takes an array of overwrite objects and an optional reason for the change.

```javascript
message.channel.permissionOverwrites.set(
  [
    {
      id: message.author.id,
      deny: [PermissionFlagsBits.ViewChannel],
    },
  ],
  "Needed to change permissions",
);
```

---

### Edit a Role (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleManager%3AClass

Illustrates how to edit an existing role in a Discord guild using the RoleManager. The example shows changing the role's name and logs the updated name upon success.

```javascript
// Edit a role
guild.roles
  .edit("222079219327434752", { name: "buddies" })
  .then((updated) => console.log(`Edited role name to ${updated.name}`))
  .catch(console.error);
```

---

### Fetch Guild Scheduled Events Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildScheduledEventsOptions%3AInterface

Options used to fetch multiple guild scheduled events from a guild.

````APIDOC
## Interface: FetchGuildScheduledEventsOptions

### Description
Options used to fetch multiple guild scheduled events from a guild.

### Properties

#### cache
- **cache** (boolean) - Optional - Whether or not to cache the fetched guild scheduled events.

#### withUserCount
- **withUserCount** (boolean) - Optional - Defaults to `true`. Whether to fetch the number of users subscribed to each scheduled event should be returned.

### Request Example
```json
{
  "cache": true,
  "withUserCount": false
}
````

### Response

(Note: This interface defines options, not a direct API response structure. The actual response would be an array of GuildScheduledEvent objects.)

#### Success Response (200)

- **GuildScheduledEvent[]** - An array of guild scheduled event objects.

#### Response Example

```json
[
  {
    "id": "123456789012345678",
    "guild_id": "987654321098765432",
    "channel_id": "112233445566778899",
    "creator_id": "101010101010101010",
    "name": "Awesome Event",
    "description": "Join us for an amazing event!",
    "scheduled_start_time": "2023-10-27T10:00:00.000Z",
    "scheduled_end_time": "2023-10-27T12:00:00.000Z",
    "privacy_level": 2,
    "status": 1,
    "entity_type": 1,
    "user_count": 50
  }
]
```

````

--------------------------------

### GatewayPresenceClientStatus Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayPresenceClientStatus%3AInterface

Defines the structure for a client's presence status across desktop, mobile, and web platforms.

```APIDOC
## Interface GatewayPresenceClientStatus

### Description
Represents the status of a user's presence across different client platforms (desktop, mobile, web).

### Endpoint
N/A (Interface definition)

### Properties

#### desktop (PresenceUpdateReceiveStatus) - Optional
The user's status set for an active desktop (Windows, Linux, Mac) application session.

#### mobile (PresenceUpdateReceiveStatus) - Optional
The user's status set for an active mobile (iOS, Android) application session.

#### web (PresenceUpdateReceiveStatus) - Optional
The user's status set for an active web (browser, bot account) application session.

### See Also
- https://discord.com/developers/docs/topics/gateway-events#client-status-object
````

---

### Define RPCStartPurchaseResultData Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCStartPurchaseResultData%3AInterface

Defines the interface for the result data when starting a purchase via RPC. This is a TypeScript interface used for type checking and code completion within discord.js projects.

```typescript
export interface RPCStartPurchaseResultData

```

---

### WebSocketShardEventsMap 'hello' Event

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/WebSocketShardEventsMap%3AInterface

Documents the 'hello' event for WebSocketShardEventsMap. This event is emitted when the initial 'hello' packet is received from the gateway, typically containing the heartbeat interval. It signifies the start of the WebSocket connection.

```typescript
hello: [];
```

---

### RPCStartPurchaseArgs Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCStartPurchaseArgs%3AInterface

Details for the RPCStartPurchaseArgs interface, including its properties and their types.

```APIDOC
## Interface RPCStartPurchaseArgs

### Description
Represents the arguments for starting a purchase in the RPC.

### Properties
#### sku_id
- **sku_id** (Snowflake) - Required - The ID of the SKU for the purchase.
```

---

### GET /guilds/{guild_id}/events/{event_id}/users

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildScheduledEventUsersQuery%3AInterface

Retrieves a list of users for a specific guild scheduled event. You can filter the results by user ID, limit the number of users returned, and include guild member data.

````APIDOC
## GET /guilds/{guild_id}/events/{event_id}/users

### Description
Retrieves a list of users for a specific guild scheduled event. You can filter the results by user ID, limit the number of users returned, and include guild member data.

### Method
GET

### Endpoint
`/guilds/{guild_id}/events/{event_id}/users`

### Parameters
#### Path Parameters
- **guild_id** (Snowflake) - Required - The ID of the guild.
- **event_id** (Snowflake) - Required - The ID of the scheduled event.

#### Query Parameters
- **after** (Snowflake) - Optional - Consider only users after the given user ID.
- **before** (Snowflake) - Optional - Consider only users before the given user ID.
- **limit** (number) - Optional - The number of users to receive from the event. Defaults to 100.
- **with_member** (boolean) - Optional - Whether to include guild member data if it exists.

### Request Example
```json
{
  "example": "GET /guilds/123456789012345678/events/098765432109876543/users?limit=50&with_member=true"
}
````

### Response

#### Success Response (200)

- **users** (array) - An array of user objects. Each object may include guild member data if `with_member` is true.
- **members** (array) - An array of guild member objects, if `with_member` is true.
- **hasNext** (boolean) - Indicates if there are more users to fetch.

#### Response Example

```json
{
  "example": {
    "users": [
      {
        "id": "123456789012345678",
        "username": "ExampleUser",
        "discriminator": "0001",
        "public_flags": 1
      }
    ],
    "members": [
      {
        "user": {
          "id": "123456789012345678",
          "username": "ExampleUser",
          "discriminator": "0001",
          "public_flags": 1
        },
        "roles": [],
        "premium_since": null,
        "joined_at": "2023-01-01T00:00:00.000Z",
        "nick": null,
        "deaf": false,
        "mute": false
      }
    ],
    "hasNext": true
  }
}
```

````

--------------------------------

### Set Role Position (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoleManager%3AClass

Demonstrates how to change the position of a role within a Discord guild using the RoleManager. The example sets a specific role to position 1 and logs the updated position.

```javascript
// Set the position of the role
guild.roles.setPosition('222197033908436994', 1)
  .then(updated => console.log(`Role position: ${updated.position}`))
  .catch(console.error);

````

---

### Emoji Class

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Emoji%3AClass

Represents an emoji, which can be a custom emoji from a guild or a standard Unicode emoji. Provides methods to get its image URL, string representation, and other properties.

```APIDOC
## Class: Emoji

### Description
Represents an emoji, see ApplicationEmoji, GuildEmoji and ReactionEmoji.

### Properties

#### `animated` (boolean | null)
Whether or not the emoji is animated.

#### `client` (Client<true>)
The client that instantiated this.
Inherited from: Base

#### `createdAt` (Date | null)
The time the emoji was created at, or null if unicode.

#### `createdTimestamp` (number | null)
The timestamp the emoji was created at, or null if unicode.

#### `id` (Snowflake | null)
The emoji's id.

#### `identifier` (string)
The identifier of this emoji, used for message reactions.

#### `name` (string | null)
The emoji's name.

#### `url` (string | null)
Use imageURL instead. Deprecated.
Returns a URL for the emoji or `null` if this is not a custom emoji.

### Methods

#### `imageURL(options?: EmojiURLOptions): string | null`
Returns a URL for the emoji or `null` if this is not a custom emoji.

#### `toJSON(): unknown`

#### `toString(): string`
When concatenated with a string, this automatically returns the text required to form a graphical emoji on Discord instead of the Emoji object.

**Examples:**
```

// Send a custom emoji from a guild:
const emoji = guild.emojis.cache.first();
msg.channel.send(`Hello! ${emoji}`);

```

```

// Send the emoji used in a reaction to the channel the reaction is part of
reaction.message.channel.send(`The emoji used was: ${reaction.emoji}`);

```

#### `valueOf(): string`
Inherited from: Base
```

---

### Interaction Response Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserContextMenuCommandInteraction%3AClass

Methods for responding to interactions, including replying, launching activities, and showing modals.

````APIDOC
## Interaction Response Methods

### launchActivity(options: LaunchActivityOptions & { withResponse: true } = {})

**Description**: Launches this application's activity, if enabled.

**Method**: N/A (Instance method)

**Endpoint**: N/A

### reply(options: InteractionReplyOptions & { withResponse: true })

**Description**: Creates a reply to this interaction. Use the `withResponse` option to get the interaction callback response.

**Parameters**:

#### Query Parameters
- **options** (object) - Required - Options for the reply, including content, embeds, and `withResponse`.
  - **content** (string) - Optional - The content of the reply.
  - **embeds** (Array<EmbedBuilder>) - Optional - Embeds to include in the reply.
  - **flags** (MessageFlags) - Optional - Flags for the reply, e.g., Ephemeral.
  - **withResponse** (boolean) - Required - If true, returns the interaction callback response.

**Request Example**:
```javascript
// Reply to the interaction and fetch the response
interaction.reply({ content: 'Pong!', withResponse: true })
  .then((response) => console.log(`Reply sent with content ${response.resource.message.content}`))
  .catch(console.error);

// Create an ephemeral reply with an embed
const embed = new EmbedBuilder().setDescription('Pong!');
interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral })
  .then(() => console.log('Reply sent.'))
  .catch(console.error);
````

**Response**:

#### Success Response (200)

- **resource** (object) - Contains the interaction callback response if `withResponse` is true.
  - **message** (object) - The message object of the reply.
    - **content** (string) - The content of the sent message.

#### Response Example

```json
{
  "resource": {
    "message": {
      "content": "Pong!"
    }
  }
}
```

### sendPremiumRequired()

**Description**: Responds to the interaction with an upgrade button. Only available for applications with monetization enabled. Deprecated, use a premium-style button instead.

**Method**: N/A (Instance method)

**Endpoint**: N/A

### showModal(modal, options: ShowModalOptions & { withResponse: true } = {})

**Description**: Shows a modal component to the user.

**Parameters**:

#### Query Parameters

- **modal** (JSONEncodable<APIModalInteractionResponseCallbackData> | ModalComponentData | APIModalInteractionResponseCallbackData) - Required - The modal to show.
- **options** (object) - Optional - Options for showing the modal, including `withResponse`.
  - **withResponse** (boolean) - Required - If true, returns the interaction callback response.

**Response**:

#### Success Response (200)

- **resource** (object) - Contains the interaction callback response if `withResponse` is true.

#### Response Example

```json
{
  "resource": {}
}
```

````

--------------------------------

### RangeOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RangeOptions%3AInterface

Documentation for the RangeOptions interface, used for creating ranges within discord.js.

```APIDOC
## Interface: RangeOptions

### Description
Options for creating a range.

### Properties

#### `end` (number) - Required
The end of the range (exclusive)

#### `start` (number) - Required
The start of the range (inclusive)

#### `step` (number) - Optional
The amount to increment by. Defaults to 1.
````

---

### Get Random Value from Collection - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3Aclass

The `random` method returns a unique random value from the Collection. If an amount is specified, it returns an array of unique random values.

```javascript
const randomValue = collection.random();
```

---

### Define FetchGuildSoundboardSoundsOptions Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchGuildSoundboardSoundsOptions%3AInterface

Defines the FetchGuildSoundboardSoundsOptions interface in TypeScript, extending Pick<BaseFetchOptions, 'cache'>. This interface is used to specify options when fetching soundboard sounds from a Discord guild, with the 'cache' property determining whether to cache the results.

```typescript
export interface FetchGuildSoundboardSoundsOptions extends Pick<BaseFetchOptions, 'cache'>

```

---

### Get Random Key from Collection - Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Collection%3Aclass

The `randomKey` method returns a unique random key from the Collection. If an amount is specified, it returns an array of unique random keys.

```javascript
const randomKey = collection.randomKey();
```

---

### Get Guild Splash Image

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a guild's splash image. Supports PNG, JPEG, and WebP formats. Requires guild ID and splash string, and format.

```javascript
guildSplash: (guildId: Snowflake, guildSplash: string, format: Format) => `/splashes/${guildId}/${guildSplash}.${format}`
```

---

### Get Random Value(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves unique random value(s) from the collection. Returns a single value if no amount is specified, or an array of values if an amount is provided.

```javascript
collection.random();
collection.random(3);
```

---

### Edit Permission Overwrites (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PermissionOverwrites%3AClass

Demonstrates how to edit permission overwrites for a user or role within a channel using the 'edit' method. This example shows how to deny message sending permissions and logs the result or any errors.

```javascript
// Update permission overwrites
permissionOverwrites
  .edit({
    SendMessages: false,
  })
  .then((channel) =>
    console.log(channel.permissionOverwrites.get(message.author.id)),
  )
  .catch(console.error);
```

---

### launchActivity

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ModalSubmitInteraction%3AClass

Launches the application's activity if enabled.

````APIDOC
## POST /interactions/{interaction.id}/{interaction.token}/activities

### Description
Launches this application's activity, if enabled.

### Method
POST

### Endpoint
`/interactions/{interaction.id}/{interaction.token}/activities`

### Parameters
#### Query Parameters
- **options** (LaunchActivityOptions & { withResponse: true }) - Required - Options for launching the activity, including `withResponse`.

### Response
#### Success Response (200)
- **InteractionCallbackResponse<BooleanCache<Cached>>** - The response from the interaction callback.

#### Response Example
```json
{
  "type": 4,
  "data": {
    "content": "Activity launched!"
  }
}
````

````

--------------------------------

### Get Guild Tag Badge

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches a guild tag badge image. Supports PNG, JPEG, and WebP formats. Requires guild ID, badge string, and format.

```javascript
guildTagBadge: (guildId: Snowflake, guildTagBadge: string, format: Format) => `/guild-tag-badges/${guildId}/${guildTagBadge}.${format}`
````

---

### Get First Key(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves the first key or keys from a collection. If an amount is specified, it returns an array of keys; otherwise, it returns a single key. Negative amounts retrieve keys from the end.

```javascript
collection.firstKey();
collection.firstKey(5);
collection.firstKey(-3);
```

---

### Manage Entitlements

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of entitlements for a given application or creates a new entitlement. Used for managing user access to application features.

```javascript
external.entitlements(
  applicationId: Snowflake
) : `/applications/${string}/entitlements`
```

---

### RPCSubscribeChannelCreate Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeChannelCreate%3AInterface

Documentation for the RPCSubscribeChannelCreate interface, which extends RPCSubscribeMessage for channel creation events.

````APIDOC
## Interface RPCSubscribeChannelCreate

### Description
Represents a subscription message for the `ChannelCreate` event in the Discord RPC API. It extends the base `RPCSubscribeMessage` with specific event data.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "Not applicable for interface definition"
}
````

### Response

#### Success Response (200)

N/A (Interface Definition)

#### Response Example

```json
{
  "example": "Not applicable for interface definition"
}
```

### Properties

#### args

- **args** (RPCSubscribeChannelCreateArgs) - The arguments specific to the channel create event subscription.

#### cmd

- **cmd** (Cmd) - The command type, inherited from `BaseRPCMessage`.

#### evt

- **evt** (RPCEvents.ChannelCreate) - The event type, specifically `RPCEvents.ChannelCreate`.

#### nonce

- **nonce** (string) - A unique identifier for the message, inherited from `RPCCommandMessage`.

````

--------------------------------

### Range Generator Function

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/range%3AFunction

Generates a sequence of numbers within a specified range. This function can accept a single number for an exclusive upper bound or an object with start, end, and step options.

```APIDOC
## function range

### Description
A generator to yield numbers in a given range.

### Method
N/A (This is a function declaration, not an HTTP endpoint)

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```javascript
// Example using a single number
for (const num of range(5)) {
  console.log(num);
}
// Output: 0, 1, 2, 3, 4

// Example using RangeOptions
for (const num of range({ start: 1, end: 10, step: 2 })) {
  console.log(num);
}
// Output: 1, 3, 5, 7, 9
````

### Response

#### Success Response (N/A)

This is a generator function, it yields numbers.

#### Response Example

N/A

````

--------------------------------

### RESTOptions Property Explanations

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTOptions%3AInterface

Details on the properties of the RESTOptions interface, such as API base URLs, CDN paths, rate limiting configurations, and request timeouts.

```typescript
// Properties for RESTOptions:

// The agent to set globally
agent: Dispatcher | null;

// The base api path, without version
api: string = 'https://discord.com/api';

// The authorization prefix to use for requests
authPrefix: 'Bearer' | 'Bot' = 'Bot';

// The cdn path
cdn: string = 'https://cdn.discordapp.com';

// How many requests to allow sending per second
globalRequestsPerSecond: number = 50;

// The amount of time in milliseconds that passes between each hash sweep.
handlerSweepInterval: number = 3_600_000;

// The maximum amount of time a hash can exist in milliseconds without being hit with a request
hashLifetime: number = 86_400_000;

// The amount of time in milliseconds that passes between each hash sweep.
hashSweepInterval: number = 14_400_000;

// Additional headers to send for all API requests
headers: Record<string, string> = {};

// The number of invalid REST requests in a 10 minute window between emitted warnings
invalidRequestWarningInterval: number = 0;

// The media proxy path
mediaProxy: string = 'https://media.discordapp.net';

// The extra offset to add to rate limits in milliseconds
offset: GetRateLimitOffsetFunction | number = 50;

// Determines how rate limiting and pre-emptive throttling should be handled.
rejectOnRateLimit: RateLimitQueueFilter | string[] | null = null;

// The number of retries for errors with the 500 code, or errors that timeout
retries: number = 3;

// The time to wait in milliseconds before a request is aborted
timeout: number = 15_000;

// Extra information to add to the user agent
userAgentAppendix: string = DefaultUserAgentAppendix;

// The version of the API to use
version: string = '10';
````

---

### Application Management

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves or updates information about the current application.

````APIDOC
## Application Management

### Description
Retrieves or updates information about the current application.

### Method
GET, PATCH

### Endpoint
`/applications/@me`

### Parameters
#### Query Parameters
- None

#### Request Body (for PATCH)
- **name** (string) - Optional - The name of the application.
- **description** (string) - Optional - The description of the application.

### Request Example (GET)
```json
{
  "example": "No request body for GET."
}
````

### Request Example (PATCH)

```json
{
  "example": "{\n  \"name\": \"New App Name\",\n  \"description\": \"Updated description.\"\n}"
}
```

### Response

#### Success Response (200)

- **id** (Snowflake) - The ID of the application.
- **name** (string) - The name of the application.
- **description** (string) - The description of the application.

#### Response Example

```json
{
  "example": "{\n  \"id\": \"123456789012345678\",\n  \"name\": \"My Awesome App\",\n  \"description\": \"A cool application.\"\n}"
}
```

````

--------------------------------

### Create Webhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChannelWebhookJSONBody%3AInterface

This section details the structure for creating a webhook, including required and optional properties for the request body.

```APIDOC
## POST /channels/{channel.id}/webhooks

### Description
Creates a new webhook for a given channel.

### Method
POST

### Endpoint
`/channels/{channel.id}/webhooks`

### Parameters
#### Path Parameters
- **channel.id** (snowflake) - Required - The ID of the channel to create the webhook in.

#### Query Parameters
None

#### Request Body
- **name** (string) - Required - Name of the webhook (1-80 characters).
- **avatar** (string | null | undefined) - Optional - Image for the default webhook avatar. (See https://discord.com/developers/docs/reference#image-data for image data format).

### Request Example
```json
{
  "name": "My Awesome Webhook",
  "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA"
}
````

### Response

#### Success Response (200)

- **id** (snowflake) - The ID of the created webhook.
- **name** (string) - The name of the created webhook.
- **avatar** (string | null) - The avatar hash of the created webhook.
- **channel_id** (snowflake) - The ID of the channel the webhook belongs to.
- **token** (string) - The token of the created webhook.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "My Awesome Webhook",
  "avatar": "a1b2c3d4e5f67890a1b2c3d4e5f67890",
  "channel_id": "123456789012345678",
  "token": "aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789"
}
```

````

--------------------------------

### ForwardOptionsWithOptionalChannel Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ForwardOptionsWithOptionalChannel%3AInterface

Details the properties of the ForwardOptionsWithOptionalChannel interface, which extends BaseForwardOptions.

```APIDOC
## Interface: ForwardOptionsWithOptionalChannel

### Description
This interface represents options for forwarding, potentially including a channel, guild, and message. It extends `BaseForwardOptions`.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Properties
- **channel** (Exclude<TextBasedChannelResolvable, PartialGroupDMChannel>) - Optional - The channel to forward to.
- **guild** (GuildResolvable) - Optional - The guild to forward to.
- **message** (Exclude<MessageResolvable, Snowflake>) - Required - The message to forward.

### Request Example
N/A (Interface Definition)

### Response
N/A (Interface Definition)
````

---

### Create Channel Invite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseGuildTextChannel%3AClass

Creates an invite to the current guild channel. Optionally accepts an InviteCreateOptions object. Returns a Promise that resolves with the created Invite object.

```javascript
channel
  .createInvite()
  .then((invite) =>
    console.log(`Created an invite with a code of ${invite.code}`),
  )
  .catch(console.error);
```

---

### Send Slack Message using WebhookClient in JavaScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/WebhookClient%3AClass

This example demonstrates how to send a formatted Slack message using the sendSlackMessage method of the WebhookClient. It requires a JSON object with specific Slack message fields and handles potential errors.

```javascript
// Send a slack message
webhook
  .sendSlackMessage({
    username: "Wumpus",
    attachments: [
      {
        pretext: "this looks pretty cool",
        color: "#F0F",
        footer_icon: "http://snek.s3.amazonaws.com/topSnek.png",
        footer: "Powered by sneks",
        ts: Date.now() / 1000,
      },
    ],
  })
  .catch(console.error);
```

---

### GET /channels/{channel.id}/messages

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelMessagesQuery%3AInterface

Retrieves messages from a specific Discord channel. You can filter messages by providing `around`, `before`, or `after` parameters, and control the number of messages returned using the `limit` parameter.

```APIDOC
## GET /channels/{channel.id}/messages

### Description
Retrieves messages from a specific Discord channel. This endpoint allows for filtering messages based on their IDs (`around`, `before`, `after`) and setting a maximum number of messages to return (`limit`).

### Method
GET

### Endpoint
`/channels/{channel.id}/messages`

### Parameters
#### Query Parameters
- **after** (Snowflake) - Optional - Get messages after this message ID
- **around** (Snowflake) - Optional - Get messages around this message ID
- **before** (Snowflake) - Optional - Get messages before this message ID
- **limit** (number) - Optional - Max number of messages to return (1-100). Defaults to 50.

### Request Example
```

GET /channels/123456789012345678/messages?limit=10&before=987654321098765432

````

### Response
#### Success Response (200)
- **messages** (Array<APIMessage>) - An array of message objects.
- **users** (Array<APIUser>) - An array of user objects included in the response.
- **members** (Array<APIGuildMember>) - An array of guild member objects included in the response.

#### Response Example
```json
{
  "messages": [
    {
      "id": "111111111111111111",
      "channel_id": "123456789012345678",
      "author": {
        "id": "222222222222222222",
        "username": "TestUser",
        "discriminator": "0000",
        "avatar": "abcdef1234567890"
      },
      "content": "Hello world!",
      "timestamp": "2023-10-27T10:00:00.000Z",
      "edited_timestamp": null,
      "tts": false,
      "mention_everyone": false,
      "attachments": [],
      "embeds": [],
      "mentions": [],
      "reactions": [],
      "pinned": false
    }
  ],
  "users": [
    {
      "id": "222222222222222222",
      "username": "TestUser",
      "discriminator": "0000",
      "avatar": "abcdef1234567890"
    }
  ],
  "members": [
    {
      "user": {
        "id": "222222222222222222",
        "username": "TestUser",
        "discriminator": "0000",
        "avatar": "abcdef1234567890"
      },
      "roles": [],
      "nick": null,
      "joined_at": "2023-01-01T00:00:00.000Z"
    }
  ]
}
````

````

--------------------------------

### on

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Adds an event listener for a specific event.

```APIDOC
## POST /on

### Description
Adds an event listener for a specific event.

### Method
POST

### Endpoint
/on

### Parameters
#### Query Parameters
- **event** (keyof ClientEvents) - The name of the event to listen for.
- **listener** ((...args: ClientEvents[Event]) => void) - The listener function to execute when the event is fired.

### Request Example
```javascript
client.on('guildCreate', guild => {
  console.log(`Joined new guild: ${guild.name}`);
});
````

### Response

#### Success Response (200)

- **this** - The client instance for chaining.

````

--------------------------------

### Define RESTGetAPIApplicationEmojiResult Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIApplicationEmojiResult%3ATypeAlias

Defines the TypeScript type alias for the result of a REST API call to get an application's emoji. This type is based on the APIApplicationEmoji structure.

```typescript
export type RESTGetAPIApplicationEmojiResult = APIApplicationEmoji;
````

---

### fetchGuildWidget(guild)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches the widget data for a specific guild, if available and enabled.

````APIDOC
## GET /fetchGuildWidget

### Description
Obtains the widget data of a guild from Discord, available for guilds with the widget enabled.

### Method
GET

### Endpoint
/fetchGuildWidget

### Parameters
#### Path Parameters
- **guild** (GuildResolvable) - Required - The guild to fetch the widget data for.

### Request Example
```javascript
// Example usage (assuming 'guild' is a resolvable guild object or ID)
client.fetchGuildWidget(guild)
  .then(widget => console.log(`Guild widget fetched for: ${widget.name}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **widget** (Widget) - The guild widget data object.

````

--------------------------------

### Get Guild Scheduled Event Users

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Retrieves a list of users who are interested in or attending a specific guild scheduled event. This is useful for managing event attendance. Requires guild ID and scheduled event ID.

```HTTP
GET /guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users
````

---

### Getting Missing Permissions with missing() - TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PermissionsBitField%3AClass

Explains how to identify which permissions are missing from a PermissionsBitField instance when compared to a given set of permissions. The method returns an array of missing permission strings.

```typescript
missing(
  bits: BitFieldResolvable<PermissionsString, bigint>,
  checkAdmin?: boolean = true
) : PermissionsString[]
```

---

### Show Modal to User in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserContextMenuCommandInteraction%3Aclass

This method displays a modal form to the user, allowing them to input information. You need to provide a modal object or data structure conforming to `APIModalInteractionResponseCallbackData`. The `withResponse: true` option can be used to get the interaction callback response.

```typescript
import {
  ModalBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  TextInputStyle,
} from "discord.js";

const modal = new ModalBuilder()
  .setCustomId("myModal")
  .setTitle("My Application Modal");

const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(
  new TextInputBuilder()
    .setCustomId("favColorInput")
    .setLabel("What is your favorite color?")
    .setStyle(TextInputStyle.Short),
);

modal.addComponents(firstActionRow);

interaction
  .showModal(modal, { withResponse: true })
  .then(() => console.log("Modal shown successfully."))
  .catch(console.error);
```

---

### RPC Commands API

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommands%3AEnum

This section details the available RPC commands for interacting with the Discord client. These commands allow for authentication, managing user activities, retrieving channel and guild information, and controlling voice settings.

```APIDOC
## RPC Commands Reference

This document outlines the various commands available for the Discord Rich Presence (RPC) interface.

### Authenticate

**Description**: Used to authenticate an existing client with your application.

**Method**: POST (Assumed, as it involves authentication)

**Endpoint**: `/rpc/authenticate` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `client_id` (string) - Required - The client ID of your application.
    *   `access_token` (string) - Required - The access token for authentication.

### Authorize

**Description**: Used to authorize a new client with your application.

**Method**: POST (Assumed, as it involves authorization)

**Endpoint**: `/rpc/authorize` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `client_id` (string) - Required - The client ID of your application.
    *   `scopes` (array of strings) - Required - The requested scopes for authorization.

### Get Channel

**Description**: Used to retrieve channel information from the client.

**Method**: GET

**Endpoint**: `/channels/{channel.id}`

**Parameters**:

*   **Path Parameters**:
    *   `channel.id` (string) - Required - The ID of the channel to retrieve.

### Get Channels

**Description**: Used to retrieve a list of channels for a guild from the client.

**Method**: GET

**Endpoint**: `/guilds/{guild.id}/channels`

**Parameters**:

*   **Path Parameters**:
    *   `guild.id` (string) - Required - The ID of the guild whose channels to retrieve.

### Get Guild

**Description**: Used to retrieve guild information from the client.

**Method**: GET

**Endpoint**: `/guilds/{guild.id}`

**Parameters**:

*   **Path Parameters**:
    *   `guild.id` (string) - Required - The ID of the guild to retrieve.

### Get Guilds

**Description**: Used to retrieve a list of guilds from the client.

**Method**: GET

**Endpoint**: `/users/@me/guilds`

**Parameters**:

*   **Path Parameters**: None

### Get Selected Voice Channel

**Description**: Used to get the current voice channel the client is in.

**Method**: GET

**Endpoint**: `/users/@me/voice`

**Parameters**:

*   **Path Parameters**: None

### Get Voice Settings

**Description**: Used to retrieve the client's voice settings.

**Method**: GET

**Endpoint**: `/voice/settings`

**Parameters**:

*   **Path Parameters**: None

### Set Activity

**Description**: Used to update a user's Rich Presence.

**Method**: POST (Assumed)

**Endpoint**: `/activities/set` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `activity` (object) - Required - The activity object to set.

### Subscribe

**Description**: Used to subscribe to an RPC event.

**Method**: POST (Assumed)

**Endpoint**: `/events/subscribe` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `event` (string) - Required - The name of the event to subscribe to.

### Unsubscribe

**Description**: Used to unsubscribe from an RPC event.

**Method**: POST (Assumed)

**Endpoint**: `/events/unsubscribe` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `event` (string) - Required - The name of the event to unsubscribe from.

### Close Activity Join Request

**Description**: Used to reject a Rich Presence Ask to Join request. The documented similarly named command `CLOSE_ACTIVITY_REQUEST` does not exist, but `CLOSE_ACTIVITY_JOIN_REQUEST` does.

**Method**: POST (Assumed)

**Endpoint**: `/activities/join/close` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user whose join request to close.

### Send Activity Join Invite

**Description**: Used to consent to a Rich Presence Ask to Join request.

**Method**: POST (Assumed)

**Endpoint**: `/activities/join/send` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user to send the join invite to.

### Select Text Channel

**Description**: Used to join or leave a text channel, group DM, or DM.

**Method**: POST (Assumed)

**Endpoint**: `/channels/select/text` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `channel_id` (string) - Required - The ID of the text channel to select.

### Select Voice Channel

**Description**: Used to join or leave a voice channel, group DM, or DM.

**Method**: POST (Assumed)

**Endpoint**: `/channels/select/voice` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `channel_id` (string) - Required - The ID of the voice channel to select.

### Set Certified Devices

**Description**: Used to send info about certified hardware devices.

**Method**: POST (Assumed)

**Endpoint**: `/devices/certified` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `devices` (array) - Required - An array of certified device objects.

### Set Overlay Locked

**Description**: Used to set the overlay lock state.

**Method**: POST (Assumed)

**Endpoint**: `/overlay/lock` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `locked` (boolean) - Required - Whether the overlay should be locked.

### Set User Voice Settings

**Description**: Used to change voice settings of users in voice channels.

**Method**: POST (Assumed)

**Endpoint**: `/users/voice/settings` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user whose voice settings to change.
    *   `settings` (object) - Required - The voice settings to apply.

### Set User Voice Settings 2

**Description**: An alternative method for changing user voice settings.

**Method**: POST (Assumed)

**Endpoint**: `/users/voice/settings2` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user whose voice settings to change.
    *   `settings` (object) - Required - The voice settings to apply.

### Set Voice Settings

**Description**: Used to set the client's voice settings.

**Method**: POST (Assumed)

**Endpoint**: `/voice/settings/set` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `settings` (object) - Required - The voice settings to apply.

### Set Voice Settings 2

**Description**: An alternative method for setting the client's voice settings.

**Method**: POST (Assumed)

**Endpoint**: `/voice/settings/set2` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `settings` (object) - Required - The voice settings to apply.

### Start Purchase

**Description**: Used to initiate a purchase flow.

**Method**: POST (Assumed)

**Endpoint**: `/purchases/start` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `sku_id` (string) - Required - The SKU ID of the item to purchase.

### Validate Application

**Description**: Used to validate the application.

**Method**: POST (Assumed)

**Endpoint**: `/applications/validate` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `client_id` (string) - Required - The client ID of the application to validate.

### Get Application Ticket

**Description**: Used to retrieve an application ticket.

**Method**: GET

**Endpoint**: `/applications/ticket` (Assumed)

**Parameters**:

*   **Path Parameters**: None

### Get Entitlements

**Description**: Used to retrieve entitlements for the current user.

**Method**: GET

**Endpoint**: `/users/@me/entitlements` (Assumed)

**Parameters**:

*   **Path Parameters**: None

### Get Entitlement Ticket

**Description**: Used to retrieve an entitlement ticket.

**Method**: GET

**Endpoint**: `/entitlements/ticket` (Assumed)

**Parameters**:

*   **Path Parameters**: None

### Get Relationships

**Description**: Used to retrieve the user's relationships.

**Method**: GET

**Endpoint**: `/users/@me/relationships` (Assumed)

**Parameters**:

*   **Path Parameters**: None

### Get Image

**Description**: Used to retrieve an image.

**Method**: GET

**Endpoint**: `/images/{image_hash}`

**Parameters**:

*   **Path Parameters**:
    *   `image_hash` (string) - Required - The hash of the image to retrieve.

### Get Skus

**Description**: Used to retrieve SKUs for the current application.

**Method**: GET

**Endpoint**: `/applications/{application.id}/skus`

**Parameters**:

*   **Path Parameters**:
    *   `application.id` (string) - Required - The ID of the application whose SKUs to retrieve.

### Get Networking Config

**Description**: Used to retrieve network configuration.

**Method**: GET

**Endpoint**: `/networking/config` (Assumed)

**Parameters**:

*   **Path Parameters**: None

### Networking Create Token

**Description**: Used to create a networking token.

**Method**: POST (Assumed)

**Endpoint**: `/networking/token/create` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `type` (string) - Required - The type of token to create.

### Networking Peer Metrics

**Description**: Used to send peer metrics.

**Method**: POST (Assumed)

**Endpoint**: `/networking/peer/metrics` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `metrics` (object) - Required - The peer metrics object.

### Networking System Metrics

**Description**: Used to send system metrics.

**Method**: POST (Assumed)

**Endpoint**: `/networking/system/metrics` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `metrics` (object) - Required - The system metrics object.

### Browser Handoff

**Description**: Used to handoff to the browser.

**Method**: POST (Assumed)

**Endpoint**: `/browser/handoff` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `url` (string) - Required - The URL to handoff to.

### Deep Link

**Description**: Used to open a deep link.

**Method**: POST (Assumed)

**Endpoint**: `/deep-link` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `url` (string) - Required - The deep link URL to open.

### Gift Code Browser

**Description**: Used to open the gift code browser.

**Method**: POST (Assumed)

**Endpoint**: `/gift-code/browser` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None

### Guild Template Browser

**Description**: Used to open the guild template browser.

**Method**: POST (Assumed)

**Endpoint**: `/guild-template/browser` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None

### Invite Browser

**Description**: Used to open the invite browser.

**Method**: POST (Assumed)

**Endpoint**: `/invite/browser` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None

### Open Overlay Activity Invite

**Description**: Used to open the overlay to invite a user to an activity.

**Method**: POST (Assumed)

**Endpoint**: `/overlay/activity/invite` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user to invite.

### Open Overlay Guild Invite

**Description**: Used to open the overlay to invite a user to a guild.

**Method**: POST (Assumed)

**Endpoint**: `/overlay/guild/invite` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `guild_id` (string) - Required - The ID of the guild to invite to.
    *   `channel_id` (string) - Optional - The ID of the channel to invite to.

### Open Overlay Voice Settings

**Description**: Used to open the overlay to access voice settings.

**Method**: POST (Assumed)

**Endpoint**: `/overlay/voice/settings` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None

### Connections Callback

**Description**: Callback for connection events.

**Method**: POST (Assumed)

**Endpoint**: `/connections/callback` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `connections` (array) - Required - An array of connection objects.

### Connections Callback

**Description**: Callback for connection events.

**Method**: POST (Assumed)

**Endpoint**: `/connections/callback` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `connections` (array) - Required - An array of connection objects.

### Braintree Popup Bridge Callback

**Description**: Callback for Braintree popup bridge events.

**Method**: POST (Assumed)

**Endpoint**: `/braintree/popup-bridge/callback` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `data` (object) - Required - The callback data.

### Create Channel Invite

**Description**: Used to create an invite for a channel.

**Method**: POST (Assumed)

**Endpoint**: `/channels/{channel.id}/invites`

**Parameters**:

*   **Path Parameters**:
    *   `channel.id` (string) - Required - The ID of the channel to create an invite for.
*   **Request Body**:
    *   `max_age` (integer) - Optional - Duration in seconds the invite is valid for.
    *   `max_uses` (integer) - Optional - Maximum number of uses for the invite.

### Accept Activity Invite

**Description**: Used to accept an activity invite.

**Method**: POST (Assumed)

**Endpoint**: `/activities/invites/accept` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user who sent the invite.
    *   `activity` (object) - Required - The activity object.

### Activity Invite User

**Description**: Used to invite a user to an activity.

**Method**: POST (Assumed)

**Endpoint**: `/activities/users/invite` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `user_id` (string) - Required - The ID of the user to invite.
    *   `activity` (object) - Required - The activity object.

### Dispatch

**Description**: Event dispatch.

**Method**: POST (Assumed)

**Endpoint**: `/events/dispatch` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `event` (string) - Required - The name of the event.
    *   `data` (object) - Optional - The event data.

### Overlay

**Description**: Used to interact with the overlay.

**Method**: POST (Assumed)

**Endpoint**: `/overlay` (Assumed)

**Parameters**:

*   **Path Parameters**: None
*   **Query Parameters**: None
*   **Request Body**:
    *   `command` (string) - Required - The overlay command to execute.
    *   `args` (object) - Optional - Arguments for the command.

```

---

### Get Last Value/Key from Collection (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3AClass

Obtains the last value or key from a collection. If an amount is specified, it returns an array of values/keys. Negative amounts will count from the beginning of the collection.

```javascript
collection.last();
collection.lastKey();
```

---

### Get Avatar Decoration Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an avatar decoration asset from the Discord CDN. It requires the avatar decoration asset identifier and supports PNG format.

```typescript
avatarDecoration(
  avatarDecorationDataAsset: string
) : `/avatar-decoration-presets/${string}.png`
```

---

### Resolve GuildBan ID in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildBanManager%3AClass

Explains the resolveId method of GuildBanManager, which takes a GuildBan or its ID and returns the Snowflake ID of the ban. This is a utility for consistently getting ban identifiers.

```typescript
resolveId(idOrInstance: Key | Holds)

```

---

### RPCGiftCodeBrowserResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGiftCodeBrowserResult%3AInterface

Documentation for the RPCGiftCodeBrowserResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCGiftCodeBrowserResult

### Description
Represents the result of an RPC gift code browser command.

### Extends
`RPCCommandMessage<RPCCommands.GiftCodeBrowser>`

### Properties

#### cmd
- **cmd** (Cmd) - The command type.
  Inherited from: `BaseRPCMessage`

#### data
- **data** (RPCGiftCodeBrowserResultData) - The data associated with the gift code browser result.

#### nonce
- **nonce** (string) - A unique identifier for the message.
  Inherited from: `RPCCommandMessage`
```

---

### WebSocketManager Session Info Retrieval Example (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/OptionalWebSocketManagerOptions%3AInterface

Illustrates how to implement a custom session info retrieval function for the WebSocketManager. This function is called to fetch session details (sessionId and sequence) for shard resumption, typically from a persistent store like Redis. Returning null indicates no session information is found.

```typescript
const manager = new WebSocketManager({
  async retrieveSessionInfo(shardId): Awaitable<SessionInfo | null> {
    // Fetch this info from redis or similar
    return { sessionId: string, sequence: number };
    // Return null if no information is found
  },
});
```

---

### Get API Voice Regions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GetAPIVoiceRegionsResult%3ATypeAlias

Retrieves a list of available voice regions for the Discord API. Note: This type alias was exported with the wrong name and `RESTGetAPIVoiceRegionsResult` should be used instead.

````APIDOC
## GET /voice/regions

### Description
Retrieves a list of available voice regions for the Discord API.

### Method
GET

### Endpoint
/voice/regions

### Parameters
#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **regions** (array) - An array of voice region objects.

#### Response Example
```json
[
  {
    "id": "us-east",
    "name": "us-east",
    "optimal": true,
    "deprecated": false,
    "custom": false
  }
]
````

````

--------------------------------

### Setting Integer Option Properties (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/SlashCommandIntegerOption%3AClass

Demonstrates how to set various properties for a SlashCommandIntegerOption using its methods. This includes setting the name, description, minimum and maximum values, and whether it requires user input or supports autocomplete.

```typescript
const option = new SlashCommandIntegerOption();
option.setName('count');
option.setDescription('The number of items to process');
option.setRequired(true);
option.setMinValue(1);
option.setMaxValue(10);
option.setAutocomplete(false);
````

---

### PartialSoundboardSound Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialSoundboardSound%3AInterface

Details the PartialSoundboardSound interface, which extends the base SoundboardSound with partial properties.

````APIDOC
## Interface: PartialSoundboardSound

### Description
Represents a partial SoundboardSound object, where certain properties like 'available', 'name', and 'volume' are optional or omitted.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
N/A (Interface Definition)

### Request Example
N/A (Interface Definition)

### Response
#### Success Response (N/A)
N/A (Interface Definition)

#### Response Example
N/A (Interface Definition)

### Type Definition
```typescript
export interface PartialSoundboardSound extends Partialize<SoundboardSound, 'available' | 'name' | 'volume'>
````

````

--------------------------------

### fetchWebhook(id, token?)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Fetches a webhook from Discord using its ID and optional token.

```APIDOC
## GET /fetchWebhook

### Description
Obtains a webhook from Discord.

### Method
GET

### Endpoint
/fetchWebhook

### Parameters
#### Path Parameters
- **id** (Snowflake) - Required - The ID of the webhook to fetch.
- **token** (string) - Optional - The token of the webhook.

### Request Example
```javascript
client.fetchWebhook('id', 'token')
  .then(webhook => console.log(`Obtained webhook with name: ${webhook.name}`))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **webhook** (Webhook) - The fetched webhook object.

````

--------------------------------

### Get Guild Member Banner Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a guild member's banner from the Discord CDN. This route is declared but not fully detailed in the provided text.

```typescript
guildMemberBanner<
````

---

### APIGuildIntegrationApplication Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIGuildIntegrationApplication%3AInterface

Details the structure and properties of the APIGuildIntegrationApplication interface, which represents an application associated with a guild integration.

```APIDOC
## APIGuildIntegrationApplication Interface

### Description
Represents an application associated with a guild integration.

### Properties

#### bot
- **bot** (APIUser) - Optional - The bot associated with this application.
  See also: https://discord.com/developers/docs/resources/user#user-object

#### description
- **description** (string) - The description of the app.

#### icon
- **icon** (string | null) - The icon hash of the app.
  See also: https://discord.com/developers/docs/reference#image-formatting

#### id
- **id** (Snowflake) - The id of the app.

#### name
- **name** (string) - The name of the app.

### See also
https://discord.com/developers/docs/resources/guild#integration-application-object
```

---

### Launch Activity in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChannelSelectMenuInteraction%3Aclass

This method is used to launch an application's activity, typically when a specific interaction occurs. The `withResponse: true` option allows you to retrieve the response associated with launching the activity, which might contain status information.

```typescript
interaction.launchActivity({ withResponse: true });
```

---

### Get Application Icon Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an application icon from the Discord CDN. It requires the application ID, icon identifier, and the desired format. Supports PNG, JPEG, and WebP.

```typescript
applicationIcon<
  Format extends ApplicationIconFormat
>(
  applicationId: Snowflake,
  applicationIcon: string,
  format: Format
) : `/app-icons/${string}/${string}.${Format}`
```

---

### Guild Preview

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RoutesDeclarations%3AInterface

Endpoint for retrieving a preview of a guild.

```APIDOC
## GET /guilds/{guild.id}/preview

### Description
Returns a guild preview for the given id. This endpoint can be
used by bots without a `guild.members` intent.

### Method
GET

### Endpoint
`/guilds/{guild.id}/preview`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild.

### Response
#### Success Response (200)
- **Guild Preview Object**
```

---

### Launch Activity in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ContextMenuCommandInteraction%3AClass

The `launchActivity` method is used to initiate an application's activity, provided it is enabled. This method is asynchronous and returns a Promise that resolves with the interaction callback response.

```typescript
launchActivity(
options: LaunchActivityOptions & { withResponse: true } = {}
): Promise<InteractionCallbackResponse<BooleanCache<Cached>>>
```

---

### InviteGenerationOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/InviteGenerationOptions%3AInterface

Details the options available for generating an invite using discord.js.

````APIDOC
## Interface: InviteGenerationOptions

### Description
Options for the `generateInvite` function.

### Properties

#### disableGuildSelect
- **disableGuildSelect** (boolean) - Optional - Whether to disable the guild selection.

#### guild
- **guild** (GuildResolvable) - Optional - The guild to preselect.

#### permissions
- **permissions** (PermissionResolvable) - Optional - Permissions to request.

#### scopes
- **scopes** (readonly OAuth2Scopes[]) - Required - Scopes that should be requested.

### Request Example
```json
{
  "disableGuildSelect": true,
  "guild": "123456789012345678",
  "permissions": [
    "SEND_MESSAGES",
    "READ_MESSAGE_HISTORY"
  ],
  "scopes": [
    "bot",
    "applications.commands"
  ]
}
````

### Response

#### Success Response (200)

This interface defines the structure of the options object, not a direct API response.

#### Response Example

N/A

````

--------------------------------

### WebSocketOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/WebSocketOptions%3AInterface

Details about the WebSocketOptions interface, including its properties and methods.

```APIDOC
## Interface WebSocketOptions

### Description
Defines the options available for WebSocket connections in discord.js.

### Properties
#### `large_threshold`
- **large_threshold** (number) - Optional - The threshold for considering a guild as large.

#### `version`
- **version** (number) - Optional - The WebSocket API version to use.

### Methods
#### `buildIdentifyThrottler`
- **buildIdentifyThrottler**(manager: WSWebSocketManager) : Awaitable<IIdentifyThrottler> - Builds an identify throttler for the WebSocket manager.

#### `buildStrategy`
- **buildStrategy**(manager: WSWebSocketManager) : IShardingStrategy - Builds a sharding strategy for the WebSocket manager.

### Request Example
```json
{
  "large_threshold": 250,
  "version": 10
}
````

### Response

#### Success Response (200)

This interface does not directly return a response, but its properties are used in WebSocket connection setup.

#### Response Example

N/A

````

--------------------------------

### Fetch Auto Moderation Rules (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/AutoModerationRuleManager%3AClass

Demonstrates how to fetch auto moderation rules from a guild using the AutoModerationRuleManager. It shows examples for fetching all rules without caching, fetching a single rule by ID, and fetching a single rule with specific options like forcing an update.

```javascript
// Fetch all auto moderation rules from a guild without caching
guild.autoModerationRules.fetch({ cache: false })
  .then(console.log)
  .catch(console.error);

````

```javascript
// Fetch a single auto moderation rule
guild.autoModerationRules
  .fetch("979083472868098119")
  .then(console.log)
  .catch(console.error);
```

```javascript
// Fetch a single auto moderation rule without checking cache and without caching
guild.autoModerationRules
  .fetch({
    autoModerationRule: "979083472868098119",
    cache: false,
    force: true,
  })
  .then(console.log)
  .catch(console.error);
```

---

### Launch Application Activity (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/MessageComponentInteraction%3Aclass

Launches the application's activity if it is enabled. This method returns a Promise that resolves with the interaction callback response.

```typescript
interaction
  .launchActivity({ withResponse: true })
  .then((response) => console.log("Activity launched"))
  .catch(console.error);
```

---

### generateInvite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Generates an OAuth2 invite link for the bot to be invited to a guild.

````APIDOC
## GET /generateInvite

### Description
Generates a link that can be used to invite the bot to a guild.

### Method
GET

### Endpoint
/generateInvite

### Parameters
#### Query Parameters
- **options** (InviteGenerationOptions, optional) - Options to configure the invite link, such as scopes and permissions.

### Request Example
```javascript
// Generate an application commands invite link
const link = client.generateInvite({
  scopes: ['applications.commands'],
});
console.log(`Generated application invite link: ${link}`);

// Generate a bot invite link with specific permissions
const botLink = client.generateInvite({
  permissions: ['SendMessages', 'ManageGuild', 'MentionEveryone'],
  scopes: ['bot'],
});
console.log(`Generated bot invite link: ${botLink}`);
````

### Response

#### Success Response (200)

- **string** - The generated invite link.

````

--------------------------------

### Get Application Asset Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an application asset from the Discord CDN. It requires the application ID, asset ID, and the desired format. Supports PNG, JPEG, and WebP.

```typescript
applicationAsset<
  Format extends ApplicationAssetFormat
>(
  applicationId: Snowflake,
  applicationAssetId: string,
  format: Format
) : `/app-assets/${string}/${string}.${Format}`
````

---

### Combining Entries into a Collection (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Illustrates creating a new Collection from an iterable of key-value pairs, with an optional combining function to handle duplicate keys. This is useful for aggregating data.

```javascript
Collection.combineEntries(
  [
    ["a", 1],
    ["b", 2],
    ["a", 2],
  ],
  (x, y) => x + y,
);
```

---

### Get Missing Bits from ApplicationFlagsBitField (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationFlagsBitField%3AClass

The 'missing' method identifies and returns an array of application flag names that are present in the provided bits but not in the current bitfield. This method is inherited from the base BitField class.

```typescript
missing(
  bits: BitFieldResolvable<ApplicationFlagsString, number>
  ...hasParams: readonly unknown[]
) : ApplicationFlagsString[]
```

---

### Get First Value(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves the first value or values from a collection. If an amount is specified, it returns an array of values; otherwise, it returns a single value. Negative amounts retrieve values from the end.

```javascript
collection.first();
collection.first(5);
collection.first(-3);
```

---

### Create Guild Scheduled Event

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIGuildScheduledEventJSONBody%3AInterface

This endpoint allows for the creation of a new guild scheduled event. It requires various details about the event, including its name, start time, privacy level, and optional fields like description, image, and recurrence rules.

````APIDOC
## POST /guilds/{guild.id}/scheduled-events

### Description
Creates a new guild scheduled event.

### Method
POST

### Endpoint
/guilds/{guild.id}/scheduled-events

### Parameters
#### Request Body
- **channel_id** (Snowflake | undefined) - Optional - The stage channel id of the guild event
- **description** (string | undefined) - Optional - The description of the guild event
- **entity_metadata** (APIGuildScheduledEventEntityMetadata | undefined) - Optional - The entity metadata of the scheduled event
- **entity_type** (GuildScheduledEventEntityType | undefined) - Optional - The scheduled entity type of the guild event
- **image** (string | null | undefined) - Optional - The cover image of the scheduled event
- **name** (string) - Required - The name of the guild event
- **privacy_level** (GuildScheduledEventPrivacyLevel) - Required - The privacy level of the guild event
- **recurrence_rule** (APIGuildScheduledEventRecurrenceRule | undefined) - Optional - The definition for how often this event should recur
- **scheduled_end_time** (string | undefined) - Optional - The time when the scheduled event is scheduled to end
- **scheduled_start_time** (string) - Required - The time to schedule the guild event at

### Request Example
```json
{
  "name": "My Awesome Event",
  "scheduled_start_time": "2023-10-27T10:00:00.000Z",
  "privacy_level": 2,
  "description": "Join us for a fun event!",
  "entity_type": 1,
  "channel_id": "123456789012345678"
}
````

### Response

#### Success Response (200)

- **id** (Snowflake) - The ID of the scheduled event
- **guild_id** (Snowflake) - The ID of the guild
- **channel_id** (Snowflake | null) - The ID of the channel
- **creator_id** (Snowflake) - The ID of the user that created the event
- **name** (string) - The name of the event
- **description** (string) - The description of the event
- **scheduled_start_time** (string) - The time the event is scheduled to start
- **scheduled_end_time** (string | null) - The time the event is scheduled to end
- **privacy_level** (GuildScheduledEventPrivacyLevel) - The privacy level of the event
- **status** (GuildScheduledEventStatus) - The status of the event
- **entity_type** (GuildScheduledEventEntityType) - The type of the entity associated with the event
- **user_count** (number) - The number of users interested in the event
- **creator** (APIUser) - The user object for the creator
- **channel** (Channel) - The channel object for the event
- **sku_id** (Snowflake | null) - The SKU ID associated with the event
- **image** (string | null) - The cover image hash for the event
- **entity_metadata** (APIGuildScheduledEventEntityMetadata | null) - The entity metadata for the event
- **subscriber_count** (number) - The number of users subscribed to the event
- **opt_in_level** (GuildScheduledEventOptInLevel) - The opt-in level for the event
- **entity_id** (Snowflake | null) - The ID of the entity associated with the event
- **show_end_time_until_all_members_are_gone** (boolean) - Whether to show the end time until all members have left
- **locked_at** (string | null) - The time the event was locked

#### Response Example

```json
{
  "id": "987654321098765432",
  "guild_id": "112233445566778899",
  "channel_id": "123456789012345678",
  "creator_id": "998877665544332211",
  "name": "My Awesome Event",
  "description": "Join us for a fun event!",
  "scheduled_start_time": "2023-10-27T10:00:00.000Z",
  "scheduled_end_time": null,
  "privacy_level": 2,
  "status": 1,
  "entity_type": 1,
  "user_count": 0,
  "creator": {
    "id": "998877665544332211",
    "username": "ExampleUser",
    "discriminator": "1234",
    "public_flags": 0,
    "avatar": null
  },
  "channel": {
    "id": "123456789012345678",
    "name": "Stage Channel",
    "type": 15
  },
  "sku_id": null,
  "image": null,
  "entity_metadata": null,
  "subscriber_count": 0,
  "opt_in_level": 0,
  "entity_id": null,
  "show_end_time_until_all_members_are_gone": false,
  "locked_at": null
}
```

````

--------------------------------

### Get Guild Scheduled Event Cover

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Fetches the cover image for a guild scheduled event. Supports PNG, JPEG, and WebP formats. Requires event ID, cover image string, and format.

```javascript
guildScheduledEventCover: (guildScheduledEventId: Snowflake, guildScheduledEventCoverImage: string, format: Format) => `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`
````

---

### Show Modal to User (Discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/StringSelectMenuInteraction%3AClass

This function displays a modal form to the user, allowing them to input data. The modal can be defined using `ModalComponentData` or `APIModalInteractionResponseCallbackData`. The `withResponse: true` option is available to get the interaction callback response. Proper error handling is recommended.

```typescript
interaction
  .showModal(modalData, { withResponse: true })
  .then(console.log)
  .catch(console.error);
```

---

### FileComponentData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FileComponentData%3AInterface

Documentation for the FileComponentData interface, detailing its properties and inheritance.

````APIDOC
## Interface FileComponentData

### Description
Represents data for a file component within discord.js.

### Extends
`BaseComponentData`

### Properties

#### file
- **file** (UnfurledMediaItemData) - Required - The file media associated with this component.

#### id
- **id** (number) - Optional - The unique identifier for this component. Inherited from `BaseComponentData`.

#### spoiler
- **spoiler** (boolean) - Optional - Indicates whether the file should be marked as a spoiler.

#### type
- **type** (ComponentType) - Required - The type of the component. Inherited from `BaseComponentData`.

### Request Example
```json
{
  "file": { ... },
  "id": 123,
  "spoiler": false,
  "type": "ATTACHMENT"
}
````

### Response

#### Success Response (200)

- **file** (UnfurledMediaItemData) - The file media data.
- **id** (number) - The component's ID.
- **spoiler** (boolean) - Whether the file is spoilered.
- **type** (ComponentType) - The type of the component.

#### Response Example

```json
{
  "file": { "url": "http://example.com/file.png" },
  "id": 123,
  "spoiler": false,
  "type": "ATTACHMENT"
}
```

````

--------------------------------

### Define Forum Thread Creation Body (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIGuildForumThreadsFormDataBody%3ATypeAlias

Defines the type for the request body when starting a new thread in a Discord forum or media channel. It extends the base message creation body with an additional 'message' field.

```typescript
export type RESTPostAPIGuildForumThreadsFormDataBody = RESTPostAPIChannelMessagesThreadsJSONBody & {
  message: string;
};
````

---

### Retrieving Command Interaction Options (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CommandInteractionOptionResolver%3AClass

Demonstrates various methods within the CommandInteractionOptionResolver class for retrieving specific types of command interaction options by their name. These methods include getting attachments, booleans, channels, integers, members, mentionables, messages, numbers, roles, strings, users, subcommands, and subcommand groups.

```typescript
get(name: string, required?: true = false): CommandInteractionOption<Cached>
getAttachment(name: string, required?: true = false): NonNullable<CommandInteractionOption<Cached>['attachment']>
getBoolean(name: string, required?: true = false): boolean
getChannel<Type extends ChannelType = ChannelType>(name: string, required?: true = false, channelTypes?: readonly Type[] = []): Extract<NonNullable<CommandInteractionOption<Cached>['channel']>, { type: Type extends ChannelType.PublicThread | ChannelType.AnnouncementThread ? ChannelType.PublicThread | ChannelType.AnnouncementThread : Type; }>
getFocused(getFull: true = false): AutocompleteFocusedOption
getInteger(name: string, required?: true = false): number
getMember(name: string): NonNullable<CommandInteractionOption<Cached>['member']> | null
getMentionable(name: string, required?: true = false): NonNullable<CommandInteractionOption<Cached>['member' | 'role' | 'user']>
getMessage(name: string, required?: true = false): NonNullable<CommandInteractionOption<Cached>['message']>
getNumber(name: string, required?: true = false): number
getRole(name: string, required?: true = false): NonNullable<CommandInteractionOption<Cached>['role']>
getString(name: string, required?: true = false): string
getSubcommand(required?: true = true): string
getSubcommandGroup(required?: true = false): string
getUser(name: string, required?: true = false): NonNullable<CommandInteractionOption<Cached>['user']>

```

---

### Define RPCCommandOpenOverlayVoiceSettingsPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandOpenOverlayVoiceSettingsPayload%3AInterface

Defines the structure for the RPCCommandOpenOverlayVoiceSettingsPayload interface, which extends RPCCommandMessage. This interface is used for opening overlay voice settings in Discord.

```typescript
export interface RPCCommandOpenOverlayVoiceSettingsPayload extends RPCCommandMessage<RPCCommands.OpenOverlayVoiceSettings>

```

---

### ClientApplicationEditOptions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplicationEditOptions%3AInterface

Options used for editing an application. This interface defines the configurable properties for an application's settings.

```APIDOC
## Interface: ClientApplicationEditOptions

### Description
Options used for editing an application. This interface defines the configurable properties for an application's settings.

### Properties

#### coverImage
- **coverImage** (BufferResolvable | Base64Resolvable | null) - Optional - The application's cover image.

#### customInstallURL
- **customInstallURL** (string) - Optional - The application's custom installation URL.

#### description
- **description** (string) - Optional - The application's description.

#### eventWebhooksStatus
- **eventWebhooksStatus** (ApplicationWebhookEventStatus.Enabled | ApplicationWebhookEventStatus.Disabled) - Optional - The application's event webhooks status.

#### eventWebhooksTypes
- **eventWebhooksTypes** (readonly ApplicationWebhookEventType[]) - Optional - The application's event webhooks types.

#### eventWebhooksURL
- **eventWebhooksURL** (string) - Optional - The application's event webhooks URL.

#### flags
- **flags** (ApplicationFlagsResolvable) - Optional - The flags for the application.

#### icon
- **icon** (BufferResolvable | Base64Resolvable | null) - Optional - The application's icon.

#### installParams
- **installParams** (ClientApplicationInstallParams) - Optional - Settings for the application's default in-app authorization.

#### interactionsEndpointURL
- **interactionsEndpointURL** (string) - Optional - The application's interaction endpoint URL.

#### roleConnectionsVerificationURL
- **roleConnectionsVerificationURL** (string) - Optional - The application's role connection verification URL.

#### tags
- **tags** (readonly string[]) - Optional - The application's tags.
```

---

### fetch

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ThreadChannel%3AClass

Fetches this channel.

````APIDOC
## GET /channels/{channel.id}/fetch

### Description
Fetches this channel.

### Method
GET

### Endpoint
`/channels/{channel.id}/fetch`

### Parameters
#### Query Parameters
- **force** (boolean) - Optional. Whether to force fetch the channel. Defaults to true.

### Request Example
```json
{
  "force": true
}
````

### Response

#### Success Response (200)

- **channel** (ThreadChannel) - The fetched channel object.

#### Response Example

```json
{
  "channel": {
    "id": "channelId",
    "name": "channel-name"
    // ... other channel properties
  }
}
```

````

--------------------------------

### Voice Settings Output Object

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCVoiceSettingsOutput%3AInterface

This object describes the output structure for retrieving voice settings via the Discord RPC API.

```APIDOC
## Voice Settings Output Object

### Description
This object represents the output of the GetVoiceSettings RPC command, detailing the current voice settings.

### Method
GET (Implicit via RPC command)

### Endpoint
N/A (RPC Command)

### Properties
#### available_devices (RPCVoiceAvailableDevice[]) - Read-only - An array of device objects, each containing `id` and `name` string keys, representing available audio input devices.
#### device_id (string) - Device ID of the currently selected audio input device.
#### volume (number) - The current input volume level. This is a read-only property with a range from 0.0 to 200.0.

### Response Example
```json
{
  "available_devices": [
    {
      "id": "default",
      "name": "Default"
    },
    {
      "id": "mic1",
      "name": "Microphone 1"
    }
  ],
  "device_id": "default",
  "volume": 100.0
}
````

````

--------------------------------

### Set Application Commands using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandManager%3Aclass

Demonstrates how to set all application commands for an application or guild using the `set` method. This method takes an array of command data and returns a Promise that resolves with a Collection of the newly set commands. It can also be used to remove all commands by passing an empty array.

```javascript
// Set all commands to just this one
client.application.commands.set([
  {
    name: 'test',
    description: 'A test command',
  },
])
  .then(console.log)
  .catch(console.error);
````

```javascript
// Remove all commands
guild.commands.set([]).then(console.log).catch(console.error);
```

---

### Format Content into Block Quote (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/blockQuote%3AFunction

Formats the provided string content into a Discord block quote format. This function requires the content to be at the start of a line for Discord to render it correctly. It takes a string as input and returns a formatted string.

```typescript
declare function blockQuote<Content extends string>(
  content: Content,
): `>>> ${Content}`;
```

---

### Utility Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ThreadChannel%3AClass

Utility methods for the ThreadChannel.

```APIDOC
## toJSON(...props)

### Description
Returns a plain object representing this channel. Inherited from Base.

### Method
GET

### Endpoint
N/A (Instance method)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

#### Path Parameters
- **...props** (Record<string, boolean | string>[]) - Optional - Properties to include in the JSON object.

### Response
#### Success Response (200)
- **unknown**: A plain object representing the channel.
```

````APIDOC
## toString()

### Description
When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.

### Method
GET

### Endpoint
N/A (Instance method)

### Parameters
None

### Response
#### Success Response (200)
- **ChannelMention**: The channel mention string.

### Request Example
```json
{
  "example": "console.log(`Hello from ${channel}!`);"
}
````

````

```APIDOC
## valueOf()

### Description
Returns the primitive value of this object. Inherited from Base.

### Method
GET

### Endpoint
N/A (Instance method)

### Parameters
None

### Response
#### Success Response (200)
- **string**: The primitive string value.
````

---

### Fetch a single application command in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildApplicationCommandManager%3AClass

Demonstrates fetching a single application command by its ID from Discord or the cache using the `fetch` method. This returns a Promise resolving to the ApplicationCommand object.

```javascript
// Fetch a single command
client.application.commands
  .fetch("123456789012345678")
  .then((command) => console.log(`Fetched command ${command.name}`))
  .catch(console.error);
```

---

### REST API Guild Channels Type Definition (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildChannelsResult%3ATypeAlias

Defines the TypeScript type for the result of a REST API call to get guild channels in discord.js. This type represents an array of APIGuildChannel objects.

```typescript
export type RESTGetAPIGuildChannelsResult = APIGuildChannel[];
```

---

### FetchBansOptions Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchBansOptions%3AInterface

Defines the options available for fetching multiple bans from a Discord guild.

````APIDOC
## Interface: FetchBansOptions

### Description
Options used to fetch multiple bans from a guild.

### Properties

#### `after`
- **after** (Snowflake) - Optional - Consider only bans after this id.

#### `before`
- **before** (Snowflake) - Optional - Consider only bans before this id.

#### `cache`
- **cache** (boolean) - Optional - Whether to cache the fetched bans.

#### `limit`
- **limit** (number) - Optional - The maximum number of bans to return.

### Request Example
```json
{
  "after": "123456789012345678",
  "before": "987654321098765432",
  "cache": true,
  "limit": 100
}
````

### Response

(This interface defines request options, not a direct API response)

#### Success Response (N/A)

N/A

#### Response Example (N/A)

N/A

````

--------------------------------

### Define RESTGetAPIChannelMessageResult Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIChannelMessageResult%3ATypeAlias

Defines the TypeScript type for the result of a REST GET request to fetch a channel message. This type is an alias for APIMessage, indicating the structure of the returned message data.

```typescript
export type RESTGetAPIChannelMessageResult = APIMessage;
````

---

### RPCSubscribeGuildCreateArgs Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeGuildCreateArgs%3ATypeAlias

Defines the arguments for subscribing to guild creation events in the RPC.

````APIDOC
## typealias RPCSubscribeGuildCreateArgs

### Description
Defines the arguments for subscribing to guild creation events in the RPC. This type is an empty record, indicating no specific arguments are required.

### Method
N/A (Type Definition)

### Endpoint
N/A (Type Definition)

### Parameters
N/A

### Request Example
```json
{}
````

### Response

N/A (Type Definition)

### Response Example

N/A (Type Definition)

````

--------------------------------

### Get Application Cover Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an application cover image from the Discord CDN. It requires the application ID, cover image identifier, and the desired format. Supports PNG, JPEG, and WebP.

```typescript
applicationCover<
  Format extends ApplicationCoverFormat
>(
  applicationId: Snowflake,
  applicationCoverImage: string,
  format: Format
) : `/app-icons/${string}/${string}.${Format}`
````

---

### APIApplicationCommandIntegerOptionBase

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/APIApplicationCommandIntegerOptionBase%3AInterface

Represents the base structure for an integer option in an application command.

````APIDOC
## Interface APIApplicationCommandIntegerOptionBase

### Description
Represents the base structure for an integer option in an application command. This interface extends `APIApplicationCommandOptionBase` and specifies the type as `ApplicationCommandOptionType.Integer`.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
```json
{
  "example": "Not applicable for interface definitions"
}
````

### Response

#### Success Response (200)

N/A (Interface definition)

#### Response Example

```json
{
  "example": "Not applicable for interface definitions"
}
```

### Properties

- **description_localizations** (LocalizationMap | null) - Optional - Localized versions of the option's description.
- **description** (string) - The description of the option.
- **max_value** (number) - Optional - The maximum value permitted for the integer option.
- **min_value** (number) - Optional - The minimum value permitted for the integer option.
- **name_localizations** (LocalizationMap | null) - Optional - Localized versions of the option's name.
- **name** (string) - The name of the option.
- **required** (boolean) - Optional - Whether the option is required.
- **type** (Type) - The type of the option, which is `ApplicationCommandOptionType.Integer`.

````

--------------------------------

### Fetch Recommended Shard Count

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/fetchRecommendedShardCount%3AFunction

Retrieves the recommended number of shards from Discord based on your bot's token and optional configurations.

```APIDOC
## GET /fetchRecommendedShardCount

### Description
Gets the recommended shard count from Discord.

### Method
GET

### Endpoint
/fetchRecommendedShardCount

### Parameters
#### Query Parameters
- **token** (string) - Required - Discord auth token
- **options** (FetchRecommendedShardCountOptions) - Optional - Options for fetching the recommended shard count

### Request Example
```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN",
  "options": {
    "gatewayURL": "https://discord.com/api/v10/gateway/bot"
  }
}
````

### Response

#### Success Response (200)

- **shardCount** (number) - The recommended number of shards

#### Response Example

```json
{
  "shardCount": 1
}
```

````

--------------------------------

### fetchWebhook

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches a webhook from Discord using its ID and optional token.

```APIDOC
## GET /fetchWebhook

### Description
Obtains a webhook from Discord.

### Method
GET

### Endpoint
/fetchWebhook

### Parameters
#### Path Parameters
- **id** (Snowflake) - The ID of the webhook to fetch.
- **token** (string, optional) - The token of the webhook.

### Request Example
```javascript
client.fetchWebhook('webhookId', 'webhookToken')
  .then(webhook => console.log(webhook.name))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **Webhook** - An object representing the fetched webhook.

````

--------------------------------

### Get Last Key(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves the last key or keys from a collection. If an amount is specified, it returns an array of keys; otherwise, it returns a single key. Negative amounts retrieve keys from the beginning.

```javascript
collection.lastKey();
collection.lastKey(5);
collection.lastKey(-3);
````

---

### Define RPCCommandGetChannelsPayload Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandGetChannelsPayload%3AInterface

Defines the RPCCommandGetChannelsPayload interface in TypeScript, which extends RPCCommandMessage. This interface is used for handling commands related to getting channels in a Discord RPC context. It specifies the structure of the payload, including arguments, command type, and a nonce.

```typescript
export interface RPCCommandGetChannelsPayload extends RPCCommandMessage<RPCCommands.GetChannels>

```

---

### Get Channel Mention String in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CategoryChannel%3AClass

When a channel object is concatenated with a string, this method automatically returns the channel's mention string (e.g., '<#123456789012345678>'). This is useful for creating user-friendly messages.

```javascript
console.log(`Hello from ${channel}!`);
```

---

### Create Guild Soundboard Sound

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildSoundboardSoundCreateOptions%3AInterface

This endpoint is used to create a new soundboard sound within a Discord guild. It requires details about the sound file, name, and optional parameters like emoji, reason, and volume.

````APIDOC
## POST /guilds/{guildId}/soundboard-sounds

### Description
Creates a new soundboard sound in a guild.

### Method
POST

### Endpoint
`/guilds/{guildId}/soundboard-sounds`

### Parameters
#### Path Parameters
- **guildId** (Snowflake) - Required - The ID of the guild to create the soundboard sound in.

#### Request Body
- **contentType** (string) - Optional - The content type for the soundboard sound file.
- **emojiId** (Snowflake) - Optional - The emoji ID for the soundboard sound.
- **emojiName** (string) - Optional - The emoji name for the soundboard sound.
- **file** (BufferResolvable | Stream) - Required - The file for the soundboard sound.
- **name** (string) - Required - The name for the soundboard sound.
- **reason** (string) - Optional - The reason for creating the soundboard sound.
- **volume** (number) - Optional - The volume (a double) for the soundboard sound, from 0 (inclusive) to 1. Defaults to 1.

### Request Example
```json
{
  "contentType": "audio/wav",
  "emojiId": "123456789012345678",
  "emojiName": "sound_emoji",
  "file": "<Buffer>",
  "name": "My Awesome Sound",
  "reason": "Adding a new sound effect",
  "volume": 0.8
}
````

### Response

#### Success Response (200)

- **id** (Snowflake) - The ID of the created soundboard sound.
- **name** (string) - The name of the soundboard sound.
- **file_type** (string) - The file type of the soundboard sound.
- **guild_id** (Snowflake) - The ID of the guild the sound belongs to.
- **volume** (number) - The volume of the soundboard sound.
- **emoji_id** (Snowflake) - The emoji ID associated with the soundboard sound.
- **emoji_name** (string) - The emoji name associated with the soundboard sound.

#### Response Example

```json
{
  "id": "987654321098765432",
  "name": "My Awesome Sound",
  "file_type": "audio/wav",
  "guild_id": "112233445566778899",
  "volume": 0.8,
  "emoji_id": "123456789012345678",
  "emoji_name": "sound_emoji"
}
```

````

--------------------------------

### RPCSubscribeGuildStatus Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeGuildStatus%3AInterface

Documentation for the RPCSubscribeGuildStatus interface, which extends RPCSubscribeMessage.

```APIDOC
## Interface RPCSubscribeGuildStatus

### Description
Represents a subscription event for guild status updates in the Discord RPC.

### Extends
`RPCSubscribeMessage<RPCEvents.GuildStatus>`

### Properties

#### args
- **args** (RPCSubscribeGuildStatusArgs) - The arguments for the guild status subscription.

#### cmd
- **cmd** (Cmd) - The command type for the RPC message. Inherited from `BaseRPCMessage`.

#### evt
- **evt** (RPCEvents.GuildStatus) - The event type, specifically for guild status.

#### nonce
- **nonce** (string) - A unique identifier for the RPC message. Inherited from `RPCCommandMessage`.

### Request Example
```json
{
  "args": { ... },
  "cmd": "SUBSCRIBE",
  "evt": "GUILD_STATUS",
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (200)

- **args** (RPCSubscribeGuildStatusArgs) - The arguments received in the subscription response.
- **evt** (RPCEvents.GuildStatus) - The event type confirming the subscription.
- **nonce** (string) - The nonce associated with the request.

#### Response Example

```json
{
  "evt": "GUILD_STATUS",
  "nonce": "some-unique-nonce"
}
```

````

--------------------------------

### RPCGetEntitlementTicketResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetEntitlementTicketResult%3AInterface

Documentation for the RPCGetEntitlementTicketResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCGetEntitlementTicketResult

### Description
Represents the result of an RPC command to get an entitlement ticket. It extends `RPCCommandMessage`.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (N/A)
This is an interface definition, not a direct API response.

#### Response Example
```json
{
  "cmd": "GetEntitlementTicket",
  "data": { ... }, // Specific data for entitlement ticket
  "nonce": "some-unique-nonce"
}
````

### Properties

- **cmd** (Cmd) - The command type, which is `RPCCommands.GetEntitlementTicket`.
- **data** (RPCGetEntitlementTicketResultData) - The data payload specific to the entitlement ticket result.
- **nonce** (string) - A unique identifier for the command message.

````

--------------------------------

### EmojiURLOptionsWebp Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/EmojiURLOptionsWebp%3AInterface

Details the structure and options for generating WebP emoji URLs, including animated status, extension, and size.

```APIDOC
## Interface: EmojiURLOptionsWebp

### Description
Defines the options for generating WebP emoji URLs. This interface extends `BaseImageURLOptions`.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
N/A

#### Response Example
N/A

### Properties

- **animated** (boolean) - Optional - Whether to use the `animated` query parameter. Defaults to `false`.
- **extension** ('webp') - Optional - Specifies the image format. Must be 'webp' for this interface.
- **size** (ImageSize) - Optional - The desired size of the image. Inherited from `BaseImageURLOptions`.
````

---

### RPCVoiceAvailableDevice Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCVoiceAvailableDevice%3AInterface

Details about the RPCVoiceAvailableDevice interface, including its properties.

````APIDOC
## Interface: RPCVoiceAvailableDevice

### Description
Represents an available voice device for RPC communication.

### Properties

#### id
- **id** (string) - The unique identifier for the device.

#### name
- **name** (string) - The human-readable name of the device.

### Request Example
```json
{
  "id": "device-123",
  "name": "Microphone (Realtek Audio)"
}
````

### Response Example

```json
{
  "id": "device-123",
  "name": "Microphone (Realtek Audio)"
}
```

````

--------------------------------

### BaseRPCCertifiedDevice Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseRPCCertifiedDevice%3Ainterface

Documentation for the BaseRPCCertifiedDevice interface, which represents a certified device in the Discord RPC system.

```APIDOC
## Interface: BaseRPCCertifiedDevice

### Description
Represents a certified device in the Discord RPC system. This is a generic interface that can be extended for specific device types.

### Type Parameters
* **Type** (`RPCDeviceType`) - The specific type of the RPC device.

### Properties
#### `id`
* **Type**: `string`
* **Description**: The device's Windows UUID.

#### `model`
* **Type**: `RPCDeviceModel`
* **Description**: The model of the product.

#### `related`
* **Type**: `string[]`
* **Description**: UUIDs of related devices.

#### `type`
* **Type**: `Type`
* **Description**: The type of device.

#### `vendor`
* **Type**: `RPCDeviceVendor`
* **Description**: The hardware vendor.

### Request Example
```json
{
  "id": "some-uuid",
  "model": "some-model",
  "related": ["related-uuid-1", "related-uuid-2"],
  "type": "some-device-type",
  "vendor": "some-vendor"
}
````

### Response Example

```json
{
  "id": "some-uuid",
  "model": "some-model",
  "related": ["related-uuid-1", "related-uuid-2"],
  "type": "some-device-type",
  "vendor": "some-vendor"
}
```

````

--------------------------------

### fetchVoiceRegions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Fetches the available voice regions from Discord.

```APIDOC
## GET /fetchVoiceRegions

### Description
Obtains the available voice regions from Discord.

### Method
GET

### Endpoint
/fetchVoiceRegions

### Parameters
None

### Request Example
```javascript
client.fetchVoiceRegions()
  .then(regions => console.log(regions.map(region => region.name)))
  .catch(console.error);
````

### Response

#### Success Response (200)

- **regions** (Collection<string, VoiceRegion>) - A collection of available voice regions.

````

--------------------------------

### Edit an Emoji using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationEmoji%3AClass

This example demonstrates how to edit an existing custom emoji's name using the `edit` method of the ApplicationEmoji class. It returns a Promise that resolves with the updated emoji object or rejects with an error.

```javascript
// Edit an emoji
emoji.edit({ name: 'newemoji' })
  .then(emoji => console.log(`Edited emoji ${emoji}`))
  .catch(console.error);
````

---

### Update Discord Interaction Message

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ButtonInteraction%3AClass

Shows how to update the original message of a component interaction. This method allows for modifying the message content or removing components. The example demonstrates removing components from a message.

```javascript
interaction
  .update({
    content: "A component interaction was received",
    components: [],
  })
  .then(console.log)
  .catch(console.error);
```

---

### Create Guild Invite (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildInviteManager%3AClass

Demonstrates how to create a new invite for a guild using the GuildInviteManager. This method requires a resolvable channel and accepts optional options for invite creation.

```javascript
// Create an invite to a selected channel
guild.invites
  .create("599942732013764608")
  .then(console.log)
  .catch(console.error);
```

---

### ApplicationCommandOptionWithChoicesMixin Methods (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandOptionWithChoicesMixin%3AClass

Documents the methods available on the ApplicationCommandOptionWithChoicesMixin class. 'addChoices' allows adding multiple choices, while 'setChoices' allows setting multiple choices, both accepting RestOrArray input and returning the instance ('this').

```typescript
addChoices(
  ...choices: RestOrArray<APIApplicationCommandOptionChoice<ChoiceType>>
) : this

setChoices<Input extends APIApplicationCommandOptionChoice<ChoiceType>>(
  ...choices: RestOrArray<Input>
) : this

```

---

### Get Initial Send Rate Limit State (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/getInitialSendRateLimitState%3AFunction

This function initializes the state for managing Discord API send rate limits. It is part of the discord.js library's utility functions for handling API interactions efficiently. No external dependencies are required for this function itself.

```typescript
declare function getInitialSendRateLimitState(): SendRateLimitState;
```

---

### Fetch Invite (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3AClass

Obtains an invite from Discord using its URL. This method returns a Promise that resolves to an Invite object. It allows fetching details of a specific Discord invite.

```javascript
client
  .fetchInvite("https://discord.gg/djs")
  .then((invite) => console.log(`Obtained invite with code: ${invite.code}`))
  .catch(console.error);
```

---

### RPCSubscribeActivitySpectate Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeActivitySpectate%3AInterface

Documentation for the RPCSubscribeActivitySpectate interface, which extends RPCSubscribeMessage and is used for subscribing to activity spectate events.

````APIDOC
## Interface RPCSubscribeActivitySpectate

### Description
Represents a subscription to the Activity Spectate event in the Discord RPC.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "args": { ... },
  "cmd": "subscribe",
  "evt": "ACTIVITY_SPECTATE",
  "nonce": "unique-nonce"
}
````

### Response

#### Success Response (200)

N/A (This is an interface definition, not an endpoint response)

#### Response Example

N/A

## Properties

### args

- **args** (RPCSubscribeActivitySpectateArgs) - The arguments for the activity spectate subscription.

### cmd

- **cmd** (Cmd) - The command type, typically 'subscribe'. Inherited from BaseRPCMessage.

### evt

- **evt** (RPCEvents.ActivitySpectate) - The event type, specifically 'ACTIVITY_SPECTATE'.

### nonce

- **nonce** (string) - A unique identifier for the command. Inherited from RPCCommandMessage.

````

--------------------------------

### discord.js ActivityType Enum Members

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ActivityType%3AEnum

This section lists the members of the ActivityType enum in discord.js, along with their corresponding numerical values and example string representations. These are used to define what a bot is currently doing.

```typescript
export declare enum ActivityType {
  Playing = 0,
  Streaming = 1,
  Listening = 2,
  Watching = 3,
  Custom = 4,
  Competing = 5
}

````

---

### Define RPC Voice Settings Result Data Interface (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetVoiceSettingsResultData%3AInterface

Defines the TypeScript interface for the result data of an RPC call to get voice settings. This interface outlines the various boolean and object properties related to voice communication settings.

```typescript
export interface RPCGetVoiceSettingsResultData {
  automatic_gain_control: boolean;
  deaf: boolean;
  echo_cancellation: boolean;
  input: RPCVoiceSettingsInput;
  mode: RPCVoiceSettingsMode;
  mute: boolean;
  noise_suppression: boolean;
  output: RPCVoiceSettingsOutput;
  qos: boolean;
  silence_warning: boolean;
}
```

---

### Define WelcomeScreen Class in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/WelcomeScreen%3AClass

This snippet shows the basic class definition for WelcomeScreen, extending the Base class. It outlines the structure for representing a guild's welcome screen within the discord.js library.

```typescript
export class WelcomeScreen extends Base {
  // Properties and methods would be defined here
}
```

---

### Get Default User Avatar Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a default user avatar from the Discord CDN. It requires an index that depends on the user's migration status. Supports PNG format.

```typescript
defaultUserAvatar<
  Index extends DefaultUserAvatarAssets
>(
  index: Index
) : `/embed/avatars/${Index}.png`
```

---

### ClientApplication Class Definition (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Defines the ClientApplication class, which extends the base Application class in discord.js. This class represents a client application and provides access to its properties and methods.

```typescript
export class ClientApplication extends Application {
  // ... class members
}
```

---

### Define RESTGetAPIGuildWelcomeScreenResult Type Alias (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildWelcomeScreenResult%3ATypeAlias

Defines a TypeScript type alias for the result of a REST GET request to fetch a guild's welcome screen. It leverages the APIGuildWelcomeScreen type from discord-api-types. This is useful for strongly typing API responses.

```typescript
export type RESTGetAPIGuildWelcomeScreenResult = APIGuildWelcomeScreen;
```

---

### Get Guild Member Banner

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a guild member's banner image. Supports PNG, JPEG, WebP, and GIF formats. Requires guild ID, user ID, banner string, and format.

```javascript
guildMemberBanner: (guildId: Snowflake, userId: Snowflake, guildMemberBanner: string, format: Format) => `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`
```

---

### Create Channel Invite

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCreateChannelInviteArgs%3AInterface

This section details the arguments required to create a channel invite using the discord.js library.

````APIDOC
## POST /channels/{channel.id}/invites

### Description
Creates an invite for a specific channel.

### Method
POST

### Endpoint
`/channels/{channel.id}/invites`

### Parameters
#### Path Parameters
- **channel.id** (Snowflake) - Required - The ID of the channel to create an invite for.

#### Request Body
```json
{
  "temporary": "boolean",
  "unique": "boolean",
  "max_age": "integer",
  "max_uses": "integer"
}
````

### Request Example

```json
{
  "temporary": false,
  "unique": true,
  "max_age": 86400,
  "max_uses": 0
}
```

### Response

#### Success Response (200)

- **code** (string) - The invite code.
- **guild** (object) - The guild the invite is for.
- **channel** (object) - The channel the invite is for.
- **inviter** (object) - The user who created the invite.
- **target_user** (object) - The user the invite is for (if applicable).
- **target_user_type** (integer) - The type of user the invite is for (if applicable).
- **approximate_presence_count** (integer) - Approximate number of members in the guild.
- **approximate_member_count** (integer) - Approximate number of members in the guild.
- **expires_at** (string) - The expiration date of the invite.

#### Response Example

```json
{
  "code": "aBcDeFg",
  "guild": {
    "id": "123456789012345678",
    "name": "Example Guild"
  },
  "channel": {
    "id": "987654321098765432",
    "name": "general"
  },
  "inviter": {
    "id": "112233445566778899",
    "username": "ExampleUser",
    "discriminator": "0001",
    "avatar": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6"
  },
  "expires_at": "2023-10-27T10:00:00.000Z"
}
```

````

--------------------------------

### Show Modal

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ChatInputCommandInteraction%3Aclass

Displays a modal component to the user for input.

```APIDOC
## Show Modal

### Description
Shows a modal component to the user for data input.

### Method

- **showModal(modal, options: ShowModalOptions & { withResponse: true } = {}) : Promise<InteractionCallbackResponse<BooleanCache<Cached>>>**
  - **Description**: Shows a modal component to the user.
````

---

### Define Hex Color String Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/HexColorString%3ATypeAlias

Defines a TypeScript type alias `HexColorString` for representing hexadecimal color strings in Discord. This type ensures that color strings start with a '#' followed by any string characters.

```typescript
export type HexColorString = `#${string}`;
```

---

### Cache Factory: Cache with Limits (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Options%3AClass

Creates a cache factory that utilizes predefined settings for sweeping or limiting cache size. This allows for controlled caching, such as setting message limits per channel or member limits per guild. The example demonstrates storing up to 200 messages per channel and 200 members per guild.

```typescript
static
cacheWithLimits(
settings?: CacheWithLimitsOptions = {}
) : CacheFactory
// Create a cache factory using predefined settings to sweep or limit.
// Examples:
// // Store up to 200 messages per channel and 200 members per guild, always keeping the client member.
// Options.cacheWithLimits({
//    MessageManager: 200,
//    GuildMemberManager: {
//      maxSize: 200,
//      keepOverLimit: (member) => member.id === client.user.id,
//    },
// });
```

---

### time

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Formatters%3AClass

Formats a date into a short date-time string.

````APIDOC
## DEPRECATED static time(date?: number | Date, style?: TimestampStylesString): string

### Description
Formats a date into a short date-time string.

### Method
DEPRECATED STATIC

### Endpoint
N/A (Client-side formatting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
* **date** (number | Date) - Optional - The date to format. Defaults to the current date.
* **style** (TimestampStylesString) - Optional - The style of the timestamp (e.g., 't', 'T', 'd', 'D', 'f', 'F', 'R').

### Request Example
```json
{
  "date": 1678886400000,
  "style": "f"
}
````

### Response

#### Success Response (200)

- **formatted_time** (string) - The formatted date-time string.

#### Response Example

```json
{
  "formatted_time": "March 15, 2023 12:00 PM"
}
```

````

--------------------------------

### Get Team Value in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Team%3AClass

This method returns the string value of the Team object, inheriting its functionality from the Base class. It's typically used for internal operations or when a string representation is required.

```typescript
valueOf(): string
````

---

### Get JSON representation of ApplicationFlagsBitField (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationFlagsBitField%3AClass

The 'toJSON' method provides a JSON-serializable representation of the bitfield, typically returning its numerical value. This is useful for sending the bitfield data in JSON payloads. This method is inherited from the base BitField class.

```typescript
toJSON() : number extends number ? number : string
```

---

### Define REST API Guild Ban Result Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildBanResult%3ATypeAlias

Defines the TypeScript type for the result of a REST API call to get a guild ban. It leverages the APIBan type from the discord-api-types library.

```typescript
export type RESTGetAPIGuildBanResult = APIBan;
```

---

### RPCSubscribeVoiceSettingsUpdate2Args Type Alias

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeVoiceSettingsUpdate2Args%3ATypeAlias

Defines the arguments for subscribing to voice settings updates in the RPC.

````APIDOC
## Type Alias: RPCSubscribeVoiceSettingsUpdate2Args

### Description
This type alias represents the arguments expected when subscribing to voice settings updates via the RPC interface. It is defined as an empty record, indicating no specific parameters are required for this subscription.

### Method
N/A (Type Alias Definition)

### Endpoint
N/A (Type Alias Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{}
````

### Response

#### Success Response (N/A)

N/A

#### Response Example

N/A

````

--------------------------------

### fetchReply

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PrimaryEntryPointCommandInteraction%3Aclass

Fetches a reply to this interaction.

```APIDOC
## GET /webhooks/{application_id}/{token}/messages/{message_id}

### Description
Fetches a reply to this interaction.

### Method
GET

### Endpoint
`/webhooks/{application_id}/{token}/messages/{message_id}`

### Parameters
#### Path Parameters
- **message_id** (Snowflake | '@original') - The ID of the message to fetch, or '@original' to fetch the initial reply.

### Response
#### Success Response (200)
- **content** (string) - The message content.
- **embeds** (Array<Embed>) - The embeds in the message.

#### Response Example
```json
{
  "content": "Original reply content",
  "embeds": []
}
````

````

--------------------------------

### Define REST API Result Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPICurrentUserConnectionsResult%3ATypeAlias

Defines a TypeScript type alias for the result of a REST API call to get current user connections. This type is based on the APIConnection array structure.

```typescript
export type RESTGetAPICurrentUserConnectionsResult = APIConnection[];
````

---

### Get Guild Discovery Splash Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching a guild discovery splash image from the Discord CDN. It requires the guild ID, splash identifier, and the desired format. Supports PNG, JPEG, and WebP.

```typescript
guildDiscoverySplash<
  Format extends GuildDiscoverySplashFormat
>(
  guildId: Snowflake,
  guildDiscoverySplash: string,
  format: Format
) : `/discovery-splashes/${string}/${string}.${Format}`
```

---

### Get Emoji Image URL in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Emoji%3AClass

Provides a method to generate a URL for an emoji. This method is useful for displaying custom emojis in various contexts, returning null if the emoji is not a custom one.

```typescript
imageURL(
options?: EmojiURLOptions
) : string | null
```

---

### Query SKU Subscriptions

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPISKUSubscriptionsQuery%3AInterface

Retrieve a list of SKU subscriptions with various filtering options.

````APIDOC
## GET /users/{user.id}/subscriptions

### Description
Retrieves a list of SKU subscriptions for a specific user or all subscriptions based on the query parameters.

### Method
GET

### Endpoint
/users/{user.id}/subscriptions

### Parameters
#### Query Parameters
- **after** (Snowflake | undefined) - Optional - List subscriptions after this ID.
- **before** (Snowflake | undefined) - Optional - List subscriptions before this ID.
- **limit** (number | undefined) - Optional - Number of subscriptions to return (1-100). Defaults to 50.
- **user_id** (Snowflake | undefined) - Optional - User ID for which to return subscriptions. Required except for OAuth queries.

### Request Example
```json
{
  "example": "GET /users/123456789012345678/subscriptions?limit=10&after=987654321098765432"
}
````

### Response

#### Success Response (200)

- **subscriptions** (array) - An array of subscription objects.
- **users** (object) - A map of user IDs to user objects.

#### Response Example

```json
{
  "example": {
    "subscriptions": [
      {
        "id": "112233445566778899",
        "sku_id": "998877665544332211",
        "user_id": "123456789012345678",
        "status": 1,
        "current_period_ends_at": "2024-12-31T23:59:59.000Z",
        "next_billing_at": "2025-01-31T23:59:59.000Z",
        "trial_ends_at": null
      }
    ],
    "users": {
      "123456789012345678": {
        "id": "123456789012345678",
        "username": "ExampleUser",
        "discriminator": "1234",
        "avatar": "a_hash",
        "public_flags": 1
      }
    }
  }
}
```

````

--------------------------------

### Interaction Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/UserContextMenuCommandInteraction%3Aclass

This section covers the core methods for interacting with users, such as deferring replies, sending follow-up messages, editing, deleting, and fetching replies.

```APIDOC
## Methods

### awaitModalSubmit

#### Description
Collects a single modal submit interaction that passes the filter. The Promise will reject if the time expires.

#### Method
`awaitModalSubmit`

#### Parameters
*   **options** (AwaitModalSubmitOptions<ModalSubmitInteraction>) - Options for collecting the modal submit interaction, including a filter and time limit.

#### Response
*   **Promise<ModalSubmitInteraction<Cached>>** - A promise that resolves with the collected modal submit interaction or rejects if the time expires.

#### Request Example
```javascript
// Collect a modal submit interaction
const filter = (interaction) => interaction.customId === 'modal';
interaction.awaitModalSubmit({ filter, time: 15_000 })
  .then(interaction => console.log(`${interaction.customId} was submitted!`))
  .catch(console.error);
````

### deferReply

#### Description

Defers the reply to this interaction, allowing for a delayed response.

#### Method

`deferReply`

#### Parameters

- **options** (InteractionDeferReplyOptions & { withResponse: true }) - Options for deferring the reply, including whether to send an ephemeral reply.

#### Response

- **Promise<InteractionCallbackResponse<BooleanCache<Cached>>>** - A promise that resolves when the reply is deferred.

#### Request Example

```javascript
// Defer the reply to this interaction
interaction.deferReply().then(console.log).catch(console.error);

// Defer to send an ephemeral reply later
interaction
  .deferReply({ flags: MessageFlags.Ephemeral })
  .then(console.log)
  .catch(console.error);
```

### deleteReply

#### Description

Deletes a reply that was previously sent to this interaction.

#### Method

`deleteReply`

#### Parameters

- **message** (MessageResolvable | '@original') - Optional. The message to delete, defaults to '@original'.

#### Response

- **Promise<void>** - A promise that resolves when the reply is deleted.

#### Request Example

```javascript
// Delete the initial reply to this interaction
interaction.deleteReply().then(console.log).catch(console.error);
```

### editReply

#### Description

Edits the content of a previous reply to this interaction.

#### Method

`editReply`

#### Parameters

- **options** (string | MessagePayload | InteractionEditReplyOptions) - The new content or options for the reply.

#### Response

- **Promise<Message<BooleanCache<Cached>>>** - A promise that resolves with the edited message.

#### Request Example

```javascript
// Edit the initial reply to this interaction
interaction.editReply("New content").then(console.log).catch(console.error);
```

### fetchReply

#### Description

Fetches a previous reply sent to this interaction.

#### Method

`fetchReply`

#### Parameters

- **message** (Snowflake | '@original') - Optional. The ID of the message to fetch, defaults to '@original'.

#### Response

- **Promise<Message<BooleanCache<Cached>>>** - A promise that resolves with the fetched message.

#### Request Example

```javascript
// Fetch the initial reply to this interaction
interaction
  .fetchReply()
  .then((reply) => console.log(`Replied with ${reply.content}`))
  .catch(console.error);
```

### followUp

#### Description

Sends a follow-up message in response to this interaction.

#### Method

`followUp`

#### Parameters

- **options** (string | MessagePayload | InteractionReplyOptions) - The content or options for the follow-up message.

#### Response

- **Promise<Message<BooleanCache<Cached>>>** - A promise that resolves with the sent follow-up message.

````

--------------------------------

### Remove Permissions from a Command (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationCommandPermissionsManager%3Aclass

Demonstrates removing permissions from an application command using the `remove` method. Examples include removing a user permission and multiple role permissions. This requires the command ID, a token, and the specific users, roles, or channels to remove permissions from.

```javascript
// Remove a user permission from this command
guild.commands.permissions.remove({
 command: '123456789012345678',
 users: '876543210123456789',
 token: 'TotallyRealToken',
})
  .then(console.log)
  .catch(console.error);
````

```javascript
// Remove multiple roles from this command
guild.commands.permissions
  .remove({
    command: "123456789012345678",
    roles: ["876543210123456789", "765432101234567890"],
    token: "TotallyRealToken",
  })
  .then(console.log)
  .catch(console.error);
```

---

### RPCSetUserVoiceSettingsArgs

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSetUserVoiceSettingsArgs%3AInterface

Defines the arguments for setting a user's voice settings in Discord RPC.

````APIDOC
## RPCSetUserVoiceSettingsArgs

### Description
Defines the arguments for setting a user's voice settings in Discord RPC. This interface is used to control mute, pan, and volume for a specific user.

### Method
Not Applicable (Interface Definition)

### Endpoint
Not Applicable (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
This is an interface definition, not a direct request body. The fields below represent the potential properties of an object used in a request.

- **mute** (boolean) - Optional - Set the mute state of the user.
- **pan** (RPCVoicePan) - Optional - Set the pan of the user.
- **user_id** (Snowflake) - Required - User id.
- **volume** (number) - Optional - Set the volume of user (min 0, max 200). Defaults to 100.

### Request Example
```json
{
  "user_id": "123456789012345678",
  "volume": 150,
  "mute": false
}
````

### Response

#### Success Response (200)

This interface definition does not specify a direct response. Success is typically indicated by the absence of an error.

#### Response Example

None specified for interface definition.

````

--------------------------------

### Get Achievement Icon Route (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Defines the route for fetching an achievement icon from the Discord CDN. It requires the application ID, achievement ID, the icon hash, and the desired format. Supports PNG, JPEG, and WebP.

```typescript
achievementIcon<
  Format extends AchievementIconFormat
>(
  applicationId: Snowflake,
  achievementId: Snowflake,
  achievementIconHash: string,
  format: Format
) : `/app-assets/${string}/achievements/${string}/icons/${string}.${Format}`
````

---

### Format Phone Number Mention (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/phoneNumber%3AFunction

This function formats a given phone number string into a phone number mention. It uses TypeScript generics to infer the phone number type, ensuring it starts with a '+' sign. No external dependencies are required for this specific function.

```typescript
declare function phoneNumber<PhoneNumber extends `+${string}`>(
  phoneNumber: PhoneNumber,
): `<${PhoneNumber}>`;
```

---

### RPCAcceptActivityInviteResultData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCAcceptActivityInviteResultData%3AInterface

Details the structure of the data returned when accepting an activity invite via RPC.

````APIDOC
## Interface RPCAcceptActivityInviteResultData

### Description
Represents the data structure for the result of accepting an activity invite through the Remote Procedure Call (RPC) mechanism.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
N/A (Interface definition)

### Request Example
N/A (Interface definition)

### Response
#### Success Response (N/A)
This interface defines the structure of data, not a direct API response.

#### Response Example
```json
{
  "example": "This interface defines the structure of data, not a direct API response."
}
````

````

--------------------------------

### RPCCommandOpenOverlayGuildInvitePayload Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCCommandOpenOverlayGuildInvitePayload%3AInterface

Details the structure of the RPCCommandOpenOverlayGuildInvitePayload interface, which extends RPCCommandMessage.

```APIDOC
## Interface: RPCCommandOpenOverlayGuildInvitePayload

### Description
This interface defines the payload structure for the `OpenOverlayGuildInvite` RPC command in discord.js. It extends the base `RPCCommandMessage`.

### Method
N/A (Interface definition)

### Endpoint
N/A (Interface definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "cmd": "OPEN_OVERLAY_GUILD_INVITE",
  "args": {
    "guild_id": "123456789012345678",
    "channel_id": "987654321098765432"
  },
  "nonce": "some-unique-nonce"
}
````

### Response

#### Success Response (200)

N/A (This is an interface definition, not an endpoint)

#### Response Example

N/A (This is an interface definition, not an endpoint)

### Properties

#### `args`

- **args** (RPCOpenOverlayGuildInviteArgs) - Required - The arguments for the `OpenOverlayGuildInvite` command, including guild and channel IDs.

#### `cmd`

- **cmd** (Cmd) - Required - The command name, which is `RPCCommands.OpenOverlayGuildInvite`.

#### `nonce`

- **nonce** (string) - Required - A unique identifier for the command request, inherited from `RPCCommandMessage`.

````

--------------------------------

### Send Reaction Emoji in Discord Message using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationEmoji%3AClass

This example shows how to send the emoji used in a reaction to the channel where the reaction occurred. Similar to guild emojis, the reaction emoji object automatically formats correctly when used in string concatenation.

```javascript
// Send the emoji used in a reaction to the channel the reaction is part of
reaction.message.channel.send(`The emoji used was: ${reaction.emoji}`);
````

---

### Send Custom Emoji in Discord Message using discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationEmoji%3AClass

This example illustrates how to send a custom emoji from a guild into a Discord channel using its string representation. When concatenated with a string, the emoji object automatically converts to its required format for Discord.

```javascript
// Send a custom emoji from a guild:
const emoji = guild.emojis.cache.first();
msg.channel.send(`Hello! ${emoji}`);
```

---

### Cloning a Collection (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Demonstrates how to create a shallow copy of an existing Collection instance. This method is useful for creating independent copies of collections without modifying the original.

```javascript
const newColl = someColl.clone();
```

---

### Define Integration Types Configuration (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/IntegrationTypesConfiguration%3ATypeAlias

Defines a TypeScript type alias for `IntegrationTypesConfiguration`. This type represents the configuration for an application's supported installation contexts, using a partial record keyed by `ApplicationIntegrationType` and valued by `IntegrationTypesConfigurationContext`. It is useful for configuring how an application integrates with different Discord contexts.

```typescript
export type IntegrationTypesConfiguration = Partial<
  Record<ApplicationIntegrationType, IntegrationTypesConfigurationContext>
>;
```

---

### RESTGetAPITemplateResult Type Alias (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPITemplateResult%3ATypeAlias

Defines a type alias for the result of a REST API call to get a guild template. It is an alias for the APITemplate type, representing the structure of a guild template object returned by the Discord API.

```typescript
export type RESTGetAPITemplateResult = APITemplate;
```

---

### GatewayIdentify Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewayIdentify%3AInterface

Documentation for the GatewayIdentify interface, detailing its properties and their types.

```APIDOC
## Interface GatewayIdentify

### Description
Represents the data structure for identifying a client to the gateway.

### Properties

#### d (GatewayIdentifyData)
- **d** (GatewayIdentifyData) - Required - The identify data payload.

#### op (GatewayOpcodes.Identify)
- **op** (GatewayOpcodes.Identify) - Required - The opcode for the identify request, which is always `GatewayOpcodes.Identify`.
```

---

### Define REST API User Result Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIUserResult%3ATypeAlias

Defines a TypeScript type alias for the result of a REST API call to get user information. This type is based on the APIUser structure provided by discord.js.

```typescript
export type RESTGetAPIUserResult = APIUser;
```

---

### RPCSetVoiceSettingsResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSetVoiceSettingsResult%3AInterface

Details the structure of the RPCSetVoiceSettingsResult interface, which extends RPCCommandMessage for setting voice settings.

````APIDOC
## Interface: RPCSetVoiceSettingsResult

### Description
Represents the result of setting voice settings via RPC. It extends `RPCCommandMessage` with the command type `RPCCommands.SetVoiceSettings`.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
This interface defines the structure of the response object.

- **cmd** (Cmd) - The command identifier.
- **data** (RPCSetVoiceSettingsResultData) - The data payload for the voice settings result.
- **nonce** (string) - A unique identifier for the message.

#### Response Example
```json
{
  "cmd": "SET_VOICE_SETTINGS",
  "data": { ... },
  "nonce": "some-unique-nonce"
}
````

````

--------------------------------

### Generate Numbers in a Range (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/range%3AFunction

A TypeScript function that generates numbers within a specified range. It accepts either a single number for an exclusive upper bound or an object with start, end, and step options. This function returns a generator yielding numbers.

```typescript
declare function range(range: RangeOptions | number): Generator<number, void, unknown>;
````

---

### Get Sorted Copy of Collection (JavaScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/LimitedCollection%3AClass

The sorted() method returns a new Collection with the elements sorted according to the provided compareFunction. The original Collection remains unchanged. The default sort order is based on string Unicode code points.

```javascript
collection.sorted(
  (userA, userB) => userA.createdTimestamp - userB.createdTimestamp,
);
```

---

### Define RESTGetAPIGuildEmojiResult Type (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildEmojiResult%3ATypeAlias

Defines a TypeScript type alias for the result of a REST GET request for a guild emoji. This type is based on the APIEmoji type from the discord.js library, simplifying emoji data handling.

```typescript
export type RESTGetAPIGuildEmojiResult = APIEmoji;
```

---

### GatewaySoundboardSoundsDispatchData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GatewaySoundboardSoundsDispatchData%3AInterface

Details the structure of the data dispatched for gateway soundboard sounds events.

```APIDOC
## Interface GatewaySoundboardSoundsDispatchData

### Description
Represents the data structure for events related to soundboard sounds within the Discord gateway.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Properties
#### Guild ID
- **guild_id** (Snowflake) - Required - The ID of the guild associated with the soundboard sounds.

#### Soundboard Sounds
- **soundboard_sounds** (APISoundboardSound[]) - Required - An array of soundboard sound objects belonging to the guild.
```

---

### RESTGetAPIGuildBansResult Type Alias (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTGetAPIGuildBansResult%3ATypeAlias

Defines the type alias for the result of a REST GET request to retrieve guild bans. It represents an array of APIBan objects. This type is part of the discord.js library for interacting with the Discord API.

```typescript
export type RESTGetAPIGuildBansResult = APIBan[];
```

---

### PartialDMChannel Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialDMChannel%3AInterface

Documentation for the PartialDMChannel interface, which extends the base DMChannel with partial properties.

```APIDOC
## Interface: PartialDMChannel

### Description
Represents a Direct Message channel that may not have all its properties cached. It extends the base `DMChannel` interface and allows for partialization of certain properties.

### Extends
`Partialize<DMChannel, null, null, 'lastMessageId'>`

### Properties

#### lastMessageId : undefined

- **lastMessageId** (undefined) - The ID of the last message sent in the DM channel. This property might be undefined if the channel is partially cached.
```

---

### Fetch SKUs (discord.js)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ClientApplication%3AClass

Retrieves the list of SKUs (Stock Keeping Units) for the application. This method returns a promise that resolves with a `Collection` of `SKU` objects, keyed by their Snowflake IDs.

```javascript
async fetchSKUs(): Promise<Collection<Snowflake, SKU>> {
  // Implementation details...
}
```

---

### Get Permissions in a Discord Channel

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMember%3AClass

Retrieves the permissions for a guild member within a specific guild channel. This method considers the member's roles and channel-specific permission overwrites, returning a Readonly<PermissionsBitField> object.

```javascript
guildMember.permissionsIn(channel: GuildChannelResolvable): Readonly<PermissionsBitField>
```

---

### RPCActivityInviteUserResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCActivityInviteUserResult%3AInterface

Details about the RPCActivityInviteUserResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface RPCActivityInviteUserResult

### Description
Represents the result of an RPC command to invite a user to an activity.

### Extends
`RPCCommandMessage<RPCCommands.ActivityInviteUser>`

### Properties

#### cmd
- **cmd** (Cmd) - The command type.

#### data
- **data** (RPCActivityInviteUserResultData) - The data associated with the activity invite result.

#### nonce
- **nonce** (string) - A unique identifier for the command.
```

---

### Get User Mention from Channel Object

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/DMChannel%3AClass

When a Discord channel object (specifically a DMChannel) is concatenated with a string, this method automatically returns the recipient's user mention. Useful for easily mentioning users in messages.

```javascript
// Logs: Hello from <@123456789012345678>!
console.log(`Hello from ${channel}!`);
```

---

### CDN Class Methods

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDN%3AClass

This section details the various methods available in the CDN class for generating URLs for different Discord assets.

```APIDOC
## CDN Class Methods

### appAsset(clientId: string, assetHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates an app asset URL for a client's asset.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### appIcon(clientId: string, iconHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates an app icon URL for a client's icon.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### avatar(id: string, avatarHash: string, options?: Readonly<ImageURLOptions>) : string

**Description**: Generates an avatar URL, e.g. for a user or a webhook.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### avatarDecoration(asset: string) : string

**Description**: Generates a user avatar decoration preset URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### banner(id: string, bannerHash: string, options?: Readonly<ImageURLOptions>) : string

**Description**: Generates a banner URL, e.g. for a user or a guild.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### channelIcon(channelId: string, iconHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates an icon URL for a channel, e.g. a group DM.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### defaultAvatar(index: number) : string

**Description**: Generates a default avatar URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### discoverySplash(guildId: string, splashHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a discovery splash URL for a guild's discovery splash.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### emoji(emojiId: string, options?: Readonly<EmojiURLOptions>) : string

**Description**: Generates an emoji's URL for an emoji.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### guildMemberAvatar(guildId: string, userId: string, avatarHash: string, options?: Readonly<ImageURLOptions>) : string

**Description**: Generates a guild member avatar URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### guildMemberBanner(guildId: string, userId: string, bannerHash: string, options?: Readonly<ImageURLOptions>) : string

**Description**: Generates a guild member banner URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### guildScheduledEventCover(scheduledEventId: string, coverHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a cover image for a guild scheduled event.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### guildTagBadge(guildId: string, badgeHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a URL for a guild tag badge.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### icon(id: string, iconHash: string, options?: Readonly<ImageURLOptions>) : string

**Description**: Generates an icon URL, e.g. for a guild.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### roleIcon(roleId: string, roleIconHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a URL for the icon of a role.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### soundboardSound(soundId: string) : string

**Description**: Generates a URL for a soundboard sound.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### splash(guildId: string, splashHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a guild invite splash URL for a guild's invite splash.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### sticker(stickerId: string, extension?: StickerExtension) : string

**Description**: Generates a sticker URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### stickerPackBanner(bannerId: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a sticker pack banner URL.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### teamIcon(teamId: string, iconHash: string, options?: Readonly<BaseImageURLOptions>) : string

**Description**: Generates a team icon URL for a team's icon.

**Method**: GET (implied)

**Endpoint**: Not applicable (this is a client-side URL builder)

**Parameters**:
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None
```

---

### Get User Avatar Decoration (Deprecated)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/CDNRoutesDeclarations%3AInterface

Retrieves a user's avatar decoration. Supports PNG format. Requires user ID and decoration string. This route is deprecated; use `avatarDecoration` instead.

```javascript
userAvatarDecoration: (userId: Snowflake, userAvatarDecoration: string) => `/avatar-decorations/${userId}/${userAvatarDecoration}.png`
```

---

### Get Team Icon URL in discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Team%3AClass

This method retrieves a URL to the team's icon. It accepts optional image URL options to customize the icon's size and format. The method returns a string URL or null if no icon is present.

```typescript
iconURL(options?: ImageURLOptions = {}): string | null
```

---

### Fetch Archived Threads Options

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/FetchArchivedThreadOptions%3AInterface

Defines the options available for fetching archived threads. This includes specifying a before date, whether to fetch all threads, a limit, and the type of threads (public or private).

```APIDOC
## Interface: FetchArchivedThreadOptions

### Description
The options used to fetch archived threads.

### Properties

#### `before` (ThreadChannelResolvable | DateResolvable | Snowflake) - Optional
Only return threads that were archived before this Date or Snowflake. Must be a ThreadChannelResolvable when `type` is `private` and `fetchAll` is `false`.

#### `fetchAll` (boolean) - Optional
Whether to fetch **all** archived threads when `type` is `private`. This property requires the `GUILD_MESSAGES` permission if `true`.

#### `limit` (number) - Optional
Maximum number of threads to return.

#### `type` ('public' | 'private') - Optional
The type of threads to fetch (`public` or `private`). Defaults to `public`.
```

---

### REST Class Methods for API Requests (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/REST%3AClass

Provides TypeScript declarations for methods within the REST class used to perform various HTTP operations against the Discord API. These include GET, POST, PUT, PATCH, and DELETE requests.

```typescript
delete(fullRoute: RouteLike, options?: RequestData): Promise<unknown>
```

```typescript
get(fullRoute: RouteLike, options?: RequestData): Promise<unknown>
```

```typescript
patch(fullRoute: RouteLike, options?: RequestData): Promise<unknown>
```

```typescript
post(fullRoute: RouteLike, options?: RequestData): Promise<unknown>
```

```typescript
put(fullRoute: RouteLike, options?: RequestData): Promise<unknown>
```

---

### RPCSubscribeActivityInviteArgs Type

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCSubscribeActivityInviteArgs%3ATypeAlias

Defines the arguments for subscribing to activity invites in the RPC.

````APIDOC
## typealias RPCSubscribeActivityInviteArgs

### Description

This type alias represents the arguments for subscribing to activity invites within the Rich Presence Protocol (RPC).

### Method

N/A (This is a type definition, not an API endpoint)

### Endpoint

N/A

### Parameters

This type is defined as `Record<string, never>`, indicating it accepts no specific parameters.

#### Path Parameters

None

#### Query Parameters

None

#### Request Body

None

### Request Example

```json
{}
````

### Response

N/A (This is a type definition)

#### Success Response (200)

N/A

#### Response Example

N/A

````

--------------------------------

### toJSON

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Returns a plain object representation of the client.

```APIDOC
## GET /toJSON

### Description
Returns a plain object representation of the client.

### Method
GET

### Endpoint
/toJSON

### Parameters
None

### Request Example
```javascript
const clientData = client.toJSON();
console.log(clientData);
````

### Response

#### Success Response (200)

- **unknown** - A plain object representing the client.

````

--------------------------------

### Create a Private Thread in Discord.js

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildTextThreadManager%3AClass

This example shows how to create a private thread in a Discord channel using discord.js. It includes setting the thread name, auto-archive duration, specifying the channel type as PrivateThread, and providing a reason. The result is a Promise that resolves with the PrivateThreadChannel.

```javascript
channel.threads
  .create({
     name: 'mod-talk',
     autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
     type: ChannelType.PrivateThread,
     reason: 'Needed a separate thread for moderation',
   })
  .then(threadChannel => console.log(threadChannel))
  .catch(console.error);
````

---

### Get ValueOf ApplicationFlagsBitField (TypeScript)

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/ApplicationFlagsBitField%3AClass

The 'valueOf' method returns the primitive numerical value of the bitfield. This is often used implicitly in type coercions or when a raw number is required. This method is inherited from the base BitField class.

```typescript
valueOf() : number
```

---

### Send Soundboard Sound

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPISoundboardSendSoundJSONBody%3AInterface

This endpoint allows you to send a soundboard sound. It requires the ID of the sound to play and optionally the ID of the guild the sound is from.

````APIDOC
## POST /interactions

### Description
Sends a soundboard sound to be played. This is typically used within an interaction context.

### Method
POST

### Endpoint
`/interactions`

### Parameters
#### Request Body
- **sound_id** (Snowflake) - Required - The id of the soundboard sound to play.
- **source_guild_id** (Snowflake | undefined) - Optional - The id of the guild the soundboard sound is from. This is required if you want to play sounds from servers other than the one the interaction originated from.

### Request Example
```json
{
  "type": 2, // Assuming this is an interaction type for application commands
  "data": {
    "custom_id": "play_sound", // Example custom ID for a button or select menu
    "options": [
      {
        "name": "sound_id",
        "value": "123456789012345678"
      },
      {
        "name": "source_guild_id",
        "value": "987654321098765432"
      }
    ]
  }
}
````

### Response

#### Success Response (200)

This endpoint typically responds with a status code indicating success (e.g., 204 No Content) if the sound is queued or played successfully. Specific response body details may vary based on the interaction response type.

#### Response Example

(No specific JSON response body is detailed for success in the provided documentation, often it's an acknowledgement or an interaction response.)

````

--------------------------------

### BaseModalData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseModalData%3AInterface

Documentation for the BaseModalData interface, detailing its properties and type parameters.

```APIDOC
## Interface BaseModalData

```typescript
export interface BaseModalData<Type extends ComponentType>
````

### Description

Represents the base data structure for modal components.

### Type Parameters

- **Type** (`ComponentType`): The specific component type for the modal.

### Properties

- **id** (`number`): The unique identifier for the modal field.
- **type** (`Type`): The component type of the modal field.

````

--------------------------------

### Get Last Value(s) (JavaScript)

Source: https://discord.js.org/docs/packages/collection/2.1.1/Collection%3AClass

Retrieves the last value or values from a collection. If an amount is specified, it returns an array of values; otherwise, it returns a single value. Negative amounts retrieve values from the beginning.

```javascript
collection.last();
collection.last(5);
collection.last(-3);
````

---

### BaseModalData Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/BaseModalData%3Ainterface

Documentation for the BaseModalData interface, detailing its properties and type parameters.

````APIDOC
## Interface BaseModalData

```typescript
export interface BaseModalData<Type extends ComponentType>
````

### Description

Represents the base data structure for modal components.

### Type Parameters

- **Type** (`ComponentType`): The specific component type of the modal.

### Properties

- **id** (`number`): The unique identifier for the modal field.
- **type** (`Type`): The component type of the modal field.

````

--------------------------------

### Create Guild Template

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIGuildTemplatesJSONBody%3AInterface

This endpoint creates a new guild template. It requires a name and an optional description for the template.

```APIDOC
## POST /guilds/{guild.id}/templates

### Description
Creates a new guild template.

### Method
POST

### Endpoint
/guilds/{guild.id}/templates

### Parameters
#### Path Parameters
- **guild.id** (snowflake) - Required - The ID of the guild to create the template in.

#### Query Parameters
None

#### Request Body
- **name** (string) - Required - Name of the template (1-100 characters).
- **description** (string) - Optional - Description for the template (0-120 characters).

### Request Example
```json
{
  "name": "My Awesome Template",
  "description": "A template for my awesome server"
}
````

### Response

#### Success Response (200)

- **code** (string) - The code for the template.
- **name** (string) - The name of the template.
- **description** (string | null) - The description for the template.
- **usage_count** (integer) - How many times the template has been used.
- **creator_id** (snowflake) - The ID of the user who created the template.
- **creator** (object) - The user object of the creator.
- **created_at** (ISO String) - When the template was created.
- **updated_at** (ISO String) - When the template was last updated.
- **source_guild_id** (snowflake) - The ID of the guild that the template was created from.
- **is_dirty** (boolean | null) - Whether the template has been updated since creation.

#### Response Example

```json
{
  "code": "ABCDE",
  "name": "My Awesome Template",
  "description": "A template for my awesome server",
  "usage_count": 0,
  "creator_id": "123456789012345678",
  "creator": {
    "id": "123456789012345678",
    "username": "TestUser",
    "discriminator": "0001",
    "avatar": "a_avatar_hash"
  },
  "created_at": "2023-01-01T12:00:00.000Z",
  "updated_at": "2023-01-01T12:00:00.000Z",
  "source_guild_id": "987654321098765432",
  "is_dirty": false
}
```

````

--------------------------------

### RPCGetApplicationTicketResult Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RPCGetApplicationTicketResult%3AInterface

Details the structure of the RPCGetApplicationTicketResult interface, which extends RPCCommandMessage.

```APIDOC
## Interface: RPCGetApplicationTicketResult

### Description
Represents the result of an RPC call to get an application ticket. This interface extends `RPCCommandMessage`.

### Method
N/A (Interface Definition)

### Endpoint
N/A (Interface Definition)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "Not applicable for interface definition"
}
````

### Response

#### Success Response (200)

- **cmd** (Cmd) - The command type.
- **data** (RPCGetApplicationTicketResultData) - The data payload specific to this result.
- **nonce** (string) - A unique identifier for the message.

#### Response Example

```json
{
  "cmd": "getApplicationTicket",
  "data": { ... },
  "nonce": "some-unique-nonce"
}
```

````

--------------------------------

### Stage Instance Events

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/Client%3Aclass

Events related to the creation, deletion, and updates of stage instances.

```APIDOC
## stageInstanceCreate

### Description
Emitted whenever a stage instance is created.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **stageInstance** (StageInstance) - The created stage instance object.

### Request Example
```json
{
  "stageInstance": { ... }
}
````

### Response

#### Success Response (200)

None (Event-based)

#### Response Example

None (Event-based)

````

```APIDOC
## stageInstanceDelete

### Description
Emitted whenever a stage instance is deleted.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **stageInstance** (StageInstance) - The deleted stage instance object.

### Request Example
```json
{
  "stageInstance": { ... }
}
````

### Response

#### Success Response (200)

None (Event-based)

#### Response Example

None (Event-based)

````

```APIDOC
## stageInstanceUpdate

### Description
Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level.

### Method
Event

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
*   **oldStageInstance** (StageInstance | null) - The previous state of the stage instance, or null if it was just created.
*   **newStageInstance** (StageInstance) - The updated stage instance object.

### Request Example
```json
{
  "oldStageInstance": { ... } | null,
  "newStageInstance": { ... }
}
````

### Response

#### Success Response (200)

None (Event-based)

#### Response Example

None (Event-based)

````

--------------------------------

### PartialGuildMember Interface

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/PartialGuildMember%3AInterface

Documentation for the PartialGuildMember interface, which extends Partialize<GuildMember, 'joinedAt' | 'joinedTimestamp' | 'pending'>.

```APIDOC
## Interface PartialGuildMember

### Description
Represents a partial guild member, extending the GuildMember interface with specific properties being partial.

### Extends
Partialize<GuildMember, 'joinedAt' | 'joinedTimestamp' | 'pending'>

### Type Definition
```typescript
export interface PartialGuildMember extends Partialize<GuildMember, 'joinedAt' | 'joinedTimestamp' | 'pending'>
````

### Parameters

This interface does not have direct parameters. It inherits properties from GuildMember and applies partiality to 'joinedAt', 'joinedTimestamp', and 'pending'.

### Request Example

N/A (Interface definition)

### Response

N/A (Interface definition)

````

--------------------------------

### Define GuildOnboardingPromptOption Class in TypeScript

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildOnboardingPromptOption%3AClass

This snippet shows the basic class definition for GuildOnboardingPromptOption, extending the Base class. It serves as the foundation for representing onboarding prompt options within a Discord guild using discord.js.

```typescript
export class GuildOnboardingPromptOption extends Base
````

---

### Create Global Application Command

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/RESTPostAPIChatInputApplicationCommandsJSONBody%3AInterface

Creates a new global application command for your Discord bot. This endpoint allows you to define commands that users can invoke in any server the bot is in.

````APIDOC
## POST /applications/:application_id/commands

### Description
Creates a new global application command.

### Method
POST

### Endpoint
/applications/:application_id/commands

### Parameters
#### Path Parameters
- **application_id** (Snowflake) - Required - The ID of the application the commands belong to.

#### Request Body
- **name** (string) - Required - Name of the command, 1-32 characters long.
- **description** (string) - Required - Description of the command, 1-100 characters long.
- **type** (integer) - Optional - Type of the command, defaults to `1` (CHAT_INPUT).

### Request Example
```json
{
  "name": "mycommand",
  "description": "My awesome command!",
  "type": 1
}
````

### Response

#### Success Response (200 or 201)

- **id** (Snowflake) - The ID of the created command.
- **application_id** (Snowflake) - The ID of the application the command belongs to.
- **name** (string) - The name of the command.
- **description** (string) - The description of the command.
- **type** (integer) - The type of the command.

#### Response Example

```json
{
  "id": "123456789012345678",
  "application_id": "987654321098765432",
  "name": "mycommand",
  "description": "My awesome command!",
  "type": 1
}
```

````

--------------------------------

### Get Avatar and Banner URLs for Discord Guild Members

Source: https://discord.js.org/docs/packages/discord.js/14.25.1/GuildMember%3AClass

Retrieves the display URL for a guild member's avatar or banner. If a guild-specific decoration is not present, it falls back to the user's default avatar or banner URL. Handles cases where no banner is available by returning null.

```javascript
guildMember.displayAvatarURL()
guildMember.displayAvatarDecorationURL()
guildMember.displayBannerURL()
````
