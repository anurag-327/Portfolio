import React from "react";
import BlogFooter from "./BlogFooter";
import {
  Code,
  List,
  ListItem,
  OrderedList,
  OrderedListItem,
} from "./component";
import SessionJWTComparison from "../playground/sessionvsjwt";

export default function SessionBasedAuthBlog() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100">
      <div className="max-w-4xl mx-auto p-0 md:p-6">
        {/* Hero Section */}
        <div className="mb-12">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            <strong className="text-zinc-900 dark:text-zinc-200">
              Hands up! Who are you?
            </strong>{" "}
            🔫
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Wait… don't just shout your name. How does a website know it's
            really you? How can it remember you're logged in across multiple
            requests without asking for your password every single time? How can
            it prevent account sharing and keep your data secure?
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            Welcome to{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              session-based authentication
            </strong>{" "}
            — the way servers track who you are and remember you across requests
            without repeatedly asking for your credentials.
          </p>
        </div>

        {/* Before You Start Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            Before You Start: Why Sessions?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            When you visit a website, your browser makes separate HTTP requests
            for each action. HTTP is <strong>stateless</strong> — it doesn't
            remember who you are by default. So every time you click a button,
            the server has no idea if you're the same person who just logged in.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            You have two main choices to solve this:
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Option 1: Sessions (Server-Side Memory)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              The server keeps track of who's logged in. When you log in, the
              server creates a session and gives your browser a small token
              (usually in a cookie). On your next request, your browser sends
              this token back, and the server looks it up to remember you.
            </p>
            <List className="text-zinc-600 dark:text-zinc-400 mb-3">
              <ListItem>
                <strong>Best for:</strong> Traditional web apps, when you need
                instant control (logout immediately), per-device tracking, or
                handling sensitive data.
              </ListItem>
              <ListItem>
                <strong>Tradeoff:</strong> The server must store session data,
                which uses memory/database space.
              </ListItem>
            </List>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Option 2: Stateless Tokens (JWT)
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              The server doesn't store anything. Instead, it creates a signed
              token that contains your user information, and you send this token
              with every request. The server verifies the token's signature to
              ensure it's real.
            </p>
            <List className="text-zinc-600 dark:text-zinc-400 mb-3">
              <ListItem>
                <strong>Best for:</strong> Mobile apps, microservices, or
                distributed systems where you don't want a central storage
                point.
              </ListItem>
              <ListItem>
                <strong>Tradeoff:</strong> Revoking a token is hard — the server
                can't just delete it. You have to wait for it to expire
                naturally.
              </ListItem>
            </List>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6 mb-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">
              Why We're Using Sessions in This Tutorial
            </h4>
            <p className="text-blue-700 dark:text-blue-400">
              We're building a traditional web application where the server
              controls everything. Sessions give us instant logout (crucial if
              someone's account is compromised), per-device tracking (know which
              devices a user is logged in from), and the ability to enforce
              rules like "max 5 active sessions per user." If your app needs
              these guarantees, sessions are the way to go.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Real-World Example
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Imagine you're logging into your Gmail account. You enter your email
            and password. The server checks these are correct, then creates a
            session and puts a session ID in a cookie. Your browser
            automatically sends this cookie on every request to Gmail. Gmail's
            server checks the session ID against its records, finds you, and
            shows your emails. When you click logout, Gmail deletes the session
            immediately — you're instantly logged out everywhere. That's
            sessions in action.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Prerequisites:
            </h4>
            <List className="mb-4">
              <ListItem>
                <strong>Go 1.21+</strong> installed on your machine
              </ListItem>
              <ListItem>
                <strong>Redis</strong> running locally (or use Docker:{" "}
                <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                  docker run -d -p 6379:6379 redis
                </code>
                ) — Redis is a fast, in-memory data store we'll use to save
                session information
              </ListItem>
              <ListItem>
                Basic understanding of <strong>HTTP and REST APIs</strong>
              </ListItem>
              <ListItem>
                Familiarity with <strong>Go syntax</strong>
              </ListItem>
            </List>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            What We'll Build
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            By the end of this tutorial, we'll have a complete session-based
            auth system that can:
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6">
            <List>
              <ListItem>Log in users and manage their sessions</ListItem>
              <ListItem>
                Store sessions in Redis with metadata (IP, user agent,
                timestamps)
              </ListItem>
              <ListItem>Track and limit active sessions per user</ListItem>
              <ListItem>
                Protect routes with middleware that validates sessions
              </ListItem>
              <ListItem>Handle logout and automatic session cleanup</ListItem>
            </List>
          </div>
        </section>

        {/* What is Session-Based Auth */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            1️⃣ What is Session-Based Authentication?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Session-based authentication is a method where the{" "}
            <strong className="text-zinc-900 dark:text-zinc-200">
              server keeps track of user login state
            </strong>
            . Here's the flow:
          </p>

          <List className="mb-6">
            <ListItem>
              When a user logs in, the server validates their credentials (email
              and password)
            </ListItem>
            <ListItem>
              The server generates a unique <strong>session ID (SID)</strong> —
              essentially a random token
            </ListItem>
            <ListItem>
              This SID is stored in a <strong>server-side store</strong> (in our
              case, Redis) along with user information
            </ListItem>
            <ListItem>
              The client receives the SID in a <strong>cookie</strong> (a small
              file stored in the browser)
            </ListItem>
            <ListItem>
              On subsequent requests, the browser automatically sends this
              cookie to the server
            </ListItem>
            <ListItem>
              The server validates the SID for each request to confirm the
              user's identity
            </ListItem>
          </List>

          <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-lg mb-6">
            <SessionJWTComparison />
          </div>

          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            How It Works: Step-by-Step
          </h3>

          <OrderedList className="mb-6">
            <OrderedListItem>User submits email and password</OrderedListItem>
            <OrderedListItem>
              Server validates the credentials against the database
            </OrderedListItem>
            <OrderedListItem>
              Server generates a random <strong>session ID</strong>
            </OrderedListItem>
            <OrderedListItem>
              Server stores the session in <strong>Redis</strong> under a key
              like{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                session:abc123
              </code>
            </OrderedListItem>
            <OrderedListItem>
              Server also records this session ID in a set under{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                user_sessions:42
              </code>{" "}
              (so we know all active sessions for user 42)
            </OrderedListItem>
            <OrderedListItem>
              Server sends the session ID to the browser as a{" "}
              <strong>cookie</strong>
            </OrderedListItem>
            <OrderedListItem>
              On the next request, the browser automatically sends the cookie
            </OrderedListItem>
            <OrderedListItem>
              Server reads the cookie, looks up the session in Redis, and
              confirms the user's identity
            </OrderedListItem>
          </OrderedList>
        </section>

        {/* Redis Storage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            🗄️ Redis Storage Structure
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Redis is like a super-fast in-memory database. We use it to store
            sessions because they're temporary — they expire and get deleted.
            Here's what we store:
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              1. Session Data (
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                session:&lt;sid&gt;
              </code>
              )
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Contains session metadata stored as a JSON string. This holds all
              information about a specific session:
            </p>
            <Code>{`session:1f8b9c2a7d4e -> {
  "sid": "1f8b9c2a7d4e",           // Session ID for reference          
  "userId": 42,                     // Who this session belongs to
  "ip": "192.168.1.10",             // User's IP address (useful for security)
  "userAgent": "Mozilla/5.0...",    // Browser/device info
  "createdAt": 1690000000,          // When session was created
  "lastAccessed": 1690000500        // Last time this session was used
}`}</Code>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              2. User's Active Sessions (
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                user_sessions:&lt;userId&gt;
              </code>
              )
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              A <strong>Redis Set</strong> containing all active session IDs for
              a specific user. This lets us track multiple logins:
            </p>
            <Code>{`user_sessions:42 -> Set {
  "1f8b9c2a7d4e",    // Session on laptop
  "3e9d2b4c6f1a",    // Session on phone
  "7a4f8e1b2c3d"     // Session on tablet
}`}</Code>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Why This Structure?
            </h4>
            <List className="mb-4">
              <ListItem>
                Each session ID is a <strong>random unique string</strong>{" "}
                generated securely
              </ListItem>
              <ListItem>
                <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                  session:&lt;sid&gt;
                </code>{" "}
                keys let us quickly look up session details
              </ListItem>
              <ListItem>
                <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                  user_sessions:&lt;userId&gt;
                </code>{" "}
                lets us see all devices a user is logged in on
              </ListItem>
              <ListItem>
                This setup makes it easy to enforce rules like "max 5 active
                sessions" by deleting the oldest ones
              </ListItem>
            </List>
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            🔒 Security: Protecting Sessions from Attacks
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Sessions are valuable targets for attackers. If someone steals your
            session cookie, they can impersonate you. Here's how we protect
            against common attacks:
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              1. The{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                HttpOnly
              </code>{" "}
              Flag
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Problem:</strong> JavaScript running on a website
              (including malicious scripts from ads or hacked third-party code)
              can read cookies. If it can read your session cookie, it can send
              it to an attacker's server.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Solution:</strong> Set{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                HttpOnly: true
              </code>{" "}
              on the cookie. This tells the browser: "Only send this cookie
              automatically with HTTP requests. JavaScript cannot access it."
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              2. The{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                Secure
              </code>{" "}
              Flag
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Problem:</strong> If someone is on the same WiFi
              network as you (like at a café), they can intercept unencrypted
              traffic and steal your session cookie.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Solution:</strong> Set{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                Secure: true
              </code>{" "}
              on the cookie. This tells the browser: "Only send this cookie over
              HTTPS (encrypted connections)."
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              3. The{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                SameSite
              </code>{" "}
              Flag
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Problem (CSRF — Cross-Site Request Forgery):</strong>{" "}
              Imagine you're logged into your bank's website. You then visit a
              malicious website. That site has hidden code that makes a request
              to your bank's website (like "transfer $1000"). Since your browser
              has your bank's session cookie, it sends it automatically, and the
              bank thinks you approved the transfer.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              <strong>The Solution:</strong> Set{" "}
              <code className="inline px-1 py-0.5 text-sm bg-zinc-100 dark:bg-zinc-800 rounded">
                SameSite: Strict
              </code>{" "}
              . This tells the browser: "Only send this cookie if the request
              comes from the same website."
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              All Three Together
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-3">
              In our code, we set:
            </p>
            <Code>{`http.SetCookie(c.Writer, &http.Cookie{
  HttpOnly: true,              // JavaScript can't read it (prevents XSS theft)
  Secure: true,                // Only sent over HTTPS (prevents WiFi interception)
  SameSite: http.SameSiteStrictMode,  // Only sent to our site (prevents CSRF)
})`}</Code>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3">
              This creates a cookie that's highly resistant to theft. An
              attacker would need to either compromise HTTPS, trick you into
              visiting a malicious site, or directly access your browser's
              storage — all very difficult.
            </p>
          </div>
        </section>

        {/* Setup Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            2️⃣ Project Setup
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            To set up the project with all required dependencies, please refer
            to the{" "}
            <a
              className="underline text-blue-500"
              href="https://github.com/anurag-327/session-based-auth/blob/main/README.md"
            >
              <code>setup.md</code>
            </a>{" "}
            file in the repository. Once set up, we can directly jump into
            implementing our session-based authentication system.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            What We'll Implement
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            In the following sections, we will build:
          </p>

          <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 mb-4">
            <li>Session creation and cookie management</li>
            <li>Auth and refresh middlewares</li>
            <li>Cleanup and pruning logic for user sessions</li>
            <li>Login and logout functionality</li>
          </ul>
        </section>

        {/* Coming Up */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
              What's Next?
            </h3>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              In the next sections, we'll dive into the code and build:
            </p>
            <OrderedList className="text-blue-800 dark:text-blue-300">
              <OrderedListItem>
                <strong>Login handler</strong> that creates sessions
              </OrderedListItem>
              <OrderedListItem>
                <strong>Session middleware</strong> to protect routes and update
                session details
              </OrderedListItem>
              <OrderedListItem>
                <strong>Session limiting</strong> and cleanup logic
              </OrderedListItem>
              <OrderedListItem>
                <strong>Logout functionality</strong>
              </OrderedListItem>
            </OrderedList>
          </div>
        </section>

        {/* Login Handler Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            3️⃣ Writing the Login Handler
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            The login endpoint is responsible for verifying user credentials and
            creating a session upon success. Here's how our handler looks using{" "}
            <strong>Gin</strong>:
          </p>

          <Code>{`func LoginHandler(c *gin.Context) {
  var body struct {
    Email    string \`json:"email" binding:"required"\`
    Password string \`json:"password" binding:"required"\`
  }

  if err := c.ShouldBindJSON(&body); err != nil {
    response.Error(c, 400, "Invalid Request Body")
    return
  }

  userInfo, authErr := utils.AuthenticateUser(body.Email, body.Password)
  if authErr != nil {
    response.Error(c, 401, authErr.Error())
    return
  }

  if sessionCreationError := utils.CreateSession(c, userInfo); sessionCreationError != nil {
    response.Error(c, 500, "Internal Server Error")
    return
  }

  response.Success(c, 200, "Login Successful", gin.H{
    "userId": userInfo.ID,
  })
}`}</Code>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            The logic is straightforward:
          </p>

          <List className="mb-6">
            <ListItem>
              Parse and validate JSON body with <code>ShouldBindJSON</code>
            </ListItem>
            <ListItem>
              Authenticate user with <code>AuthenticateUser</code>
            </ListItem>
            <ListItem>
              On success, call <code>CreateSession</code> to register a session
            </ListItem>
            <ListItem>Respond with success and return basic user info</ListItem>
          </List>

          <p className="text-zinc-600 dark:text-zinc-400">
            The real magic happens inside <code>CreateSession</code> — that's
            where the session is generated, stored, and the cookie is set.
          </p>
        </section>

        {/* CreateSession Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            4️⃣ The <code>CreateSession</code> Function
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            This function is the heart of our session-based auth system. It
            takes care of creating a session, linking it to the user, pruning
            older sessions, and finally setting a secure cookie in the response.
          </p>

          <Code>{`func CreateSession(c *gin.Context, user *model.User) error {
  ctx := c.Request.Context()
  now := time.Now()
  sessionID := UUID()
  sessionKey := RedisSessionKey(sessionID)

  // First, clear expired sessions as a safety check
  // This also makes space by removing unnecessary sessions
  _ = CleanupUserExpiredSessions(user.ID)

  // Create the session metadata
  sessionMeta := model.SessionMeta{
    SID:            sessionID,
    UserID:         user.ID,
    CreatedAt:      now,
    LastAccessedAt: now,
    IP:             c.ClientIP(),
    UserAgent:      c.Request.UserAgent(),
  }

  // Store the session in Redis with expiration
  if err := SetSession(ctx, sessionKey, sessionMeta, time.Duration(constants.SessionMaxAge)*time.Second); err != nil {
    log.Printf("failed to register session: %v", err)
    return err
  }

  // Link this session to the user's session set
  if err := AddSessionToUser(ctx, user.ID, sessionID); err != nil {
    // If adding fails, rollback the session to keep data consistent
    if delErr := ClearSession(ctx, sessionID); delErr != nil {
      log.Printf("error: failed to rollback session %s after AddSessionToUser failed: %v", sessionID, delErr)
    }
    return fmt.Errorf("failed to register session: %w", err)
  }

  // If you want to cap the number of active sessions a user can have,
  // prune older sessions exceeding the allowed maximum
  if err := PruneExcessSessions(ctx, user.ID); err != nil {
    return fmt.Errorf("failed to create session: %w", err)
  }

  // Finally, set a secure HTTP-only cookie in the user's browser
  http.SetCookie(c.Writer, &http.Cookie{
    Name:     constants.SessionCookieName,
    Value:    sessionID,
    Path:     "/",
    HttpOnly: true,
    Secure:   true,
    MaxAge:   constants.SessionMaxAge,
    SameSite: http.SameSiteNoneMode,
  })

  return nil
}
`}</Code>

          <h3 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Helper Functions
          </h3>

          <Code>{`// SetSession stores the session metadata in Redis with an expiration
func SetSession(ctx context.Context, sessionKey string, session model.SessionMeta, expiration time.Duration) error {
	// Convert the session struct to JSON for storage in Redis
	sessionJSON, _ := json.Marshal(session)

	// Store the JSON in Redis with a TTL (expiration)
	if err := db.RedisClient.Set(ctx, sessionKey, sessionJSON, expiration).Err(); err != nil {
		return fmt.Errorf("failed to set session %s: %w", sessionKey, err)
	}

	return nil
}

// AddSessionToUser links the session ID to a user's set of active sessions
func AddSessionToUser(ctx context.Context, userID uint, sessionID string) error {
	// Key for storing all sessions of a specific user
	userSessionKey := RedisUserSessionsKey(userID)
	now := time.Now()

	// Use a sorted set with timestamp as score to track session creation time
	z := redis.Z{
		Score:  float64(now.Unix()), // Allows pruning older sessions later
		Member: sessionID,           // The session ID being added
	}

	// Add the session ID to the user's sorted set in Redis
	if err := db.RedisClient.ZAdd(ctx, userSessionKey, z).Err(); err != nil {
		return fmt.Errorf("failed to add session %s to user %v: %w", sessionID, userID, err)
	}

	return nil
}`}</Code>

          <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
            Understanding the Process
          </h3>

          <OrderedList className="mb-6 ml-6">
            <OrderedListItem>
              Generate a unique <strong>session ID</strong> using{" "}
              <code>UUID()</code>
            </OrderedListItem>
            <OrderedListItem>
              Clean up any expired sessions for the same user
            </OrderedListItem>
            <OrderedListItem>
              Create a <code>SessionMeta</code> object storing details like IP,
              user-agent, and timestamps
            </OrderedListItem>
            <OrderedListItem>
              Store the session in Redis with an expiry defined by{" "}
              <code>SessionMaxAge</code>
            </OrderedListItem>
            <OrderedListItem>
              Link this session to the user's session set using{" "}
              <code>AddSessionToUser</code>
            </OrderedListItem>
            <OrderedListItem>
              Remove older sessions if the user has exceeded the allowed maximum
            </OrderedListItem>
            <OrderedListItem>
              Finally, set a secure <strong>HTTP-only cookie</strong> that
              stores the session ID in the client's browser
            </OrderedListItem>
          </OrderedList>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h4 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-200">
              Why This Matters
            </h4>
            <List>
              <ListItem>
                The session cookie replaces the need for sending tokens in every
                request
              </ListItem>
              <ListItem>
                Since session data lives on the server, you can instantly revoke
                it anytime
              </ListItem>
              <ListItem>
                With Redis TTL, sessions automatically expire — no cron jobs
                needed
              </ListItem>
            </List>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400">
            At this point, the user is officially logged in. Their browser now
            carries a session cookie that will be sent automatically with each
            request, allowing your middleware to validate and authorize
            requests.
          </p>
        </section>

        {/* Next Section Teaser */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
              Next Up: Session Validation
            </h3>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              Now that we can create sessions and issue cookies, the next step
              is to verify them on every request. We'll use{" "}
              <strong>two middlewares</strong>:
            </p>
            <ul className="list-disc pl-5 text-blue-800 dark:text-blue-300 mb-4">
              <li>
                <strong>Auth Middleware:</strong> Checks whether the session is
                valid and ensures the user has access to protected routes
              </li>
              <li>
                <strong>Session Refresh Middleware:</strong> Updates the
                session's <code>LastAccessedAt</code> timestamp on every
                request, even for routes that don't require authentication. This
                keeps the session alive while the user is actively using the app
              </li>
            </ul>
            <p className="text-blue-800 dark:text-blue-300">
              Some APIs don't require full auth checks but still want to refresh
              the session's last accessed timestamp to prevent it from expiring.
              This way, we can keep sessions active without forcing a login for
              every non-sensitive request.
            </p>
          </div>
        </section>

        {/* Session Middleware Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            5️⃣ Session Middlewares: Auth & Refresh
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Once sessions are created, we handle them on every request using two
            middlewares:
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              1 - AuthMiddleware
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Protects routes that require authentication. It validates the
              session and injects user info into the request context.
            </p>

            <Code>{`func AuthMiddleware() gin.HandlerFunc {
  return func(c *gin.Context) {
    ctx := c.Request.Context()

    // Extract session ID from cookie
    sessionID := utils.GetSessionIDFromContext(c)
    if sessionID == "" {
      response.Error(c, http.StatusUnauthorized, "Missing session ID")
      c.Abort()
      return
    }

    // Fetch session metadata from Redis
    meta, err := utils.GetSessionDataBySID(ctx, sessionID)
    if err != nil || meta == nil {
      // If session exists but fetching fails, clear session and remove from user's session set
      if meta != nil {
        if err := utils.ClearSession(ctx, sessionID); err != nil {
          log.Printf("warn: failed to clear session %s: %v", sessionID, err)
        }
        if err := utils.ClearSessionFromUserSessions(ctx, meta.UserID, sessionID); err != nil {
          log.Printf("warn: failed to remove session %s from user %d: %v", sessionID, meta.UserID, err)
        }
      }

      // Delete the cookie and return unauthorized
      utils.DeleteCookie(c)
      response.Error(c, http.StatusUnauthorized, "Your session has expired. Please log in again.")
      c.Abort()
      return
    }

    // Inject session info and user ID into context for downstream handlers
    c.Set("session", meta)
    c.Set("uid", meta.UserID)

    c.Next()
  }
}`}</Code>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              2 - RefreshSession
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Keeps sessions alive by updating the <code>LastAccessedAt</code>{" "}
              timestamp. Useful for routes that don't require strict
              authentication.
            </p>

            <Code>{`func RefreshSession() gin.HandlerFunc {
  return func(c *gin.Context) {
    ctx := c.Request.Context()

    // Extract session ID from cookie
    sessionID := utils.GetSessionIDFromContext(c)
    if sessionID != "" {
      // Refresh session TTL in Redis
      if err := utils.RefreshSessionTTL(ctx, sessionID); err == nil {
        // Update the cookie in the user's browser to keep it in sync
        utils.RefreshCookie(c, sessionID)
      }
    }

    // Continue to next middleware or handler
    c.Next()
  }
}
  
`}</Code>

            <Code>{`func RefreshSessionTTL(ctx context.Context, sessionID string) error {
	meta, err := GetSessionDataBySID(ctx, sessionID)
	if err != nil || meta == nil {
		return errors.New("invalid session ID")
	}

	now := time.Now()

	// 1. Update TTL of session:<sid>
	sessionKey := RedisSessionKey(sessionID)
	if err := db.RedisClient.Expire(ctx, sessionKey, time.Duration(constants.SessionSlideAge)*time.Second).Err(); err != nil {
		return fmt.Errorf("failed to refresh session TTL: %w", err)
	}

	// 2. Update score in user_sessions:<uid>
	userKey := RedisUserSessionsKey(meta.UserID)
	if err := db.RedisClient.ZAdd(ctx, userKey, redis.Z{Score: float64(now.Unix()), Member: sessionID}).Err(); err != nil {
		return fmt.Errorf("failed to update session score in user set: %w", err)
	}

	// 3. Update LastAccessedAt in session metadata
	meta.LastAccessedAt = now
	if err := SetSession(ctx, sessionKey, *meta, time.Duration(constants.SessionSlideAge)*time.Second); err != nil {
		return fmt.Errorf("failed to update session metadata: %w", err)
	}

	return nil
}

// Refresh cookie expiry
func RefreshCookie(c *gin.Context, sessionID string) {
	http.SetCookie(c.Writer, &http.Cookie{
		Name:     constants.SessionCookieName,
		Value:    sessionID,
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		MaxAge:   constants.SessionSlideAge,
		SameSite: http.SameSiteNoneMode,
	})
}`}</Code>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400">
            By separating authentication and session refresh into two
            middlewares, we can enforce strict auth on sensitive routes while
            keeping sessions alive for all active users.
          </p>
        </section>

        {/* Session Cleanup Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            6️⃣ Session Cleanup & Pruning Strategy
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Managing active sessions involves two key tasks: removing expired
            sessions (<strong>cleanup</strong>) and limiting the number of
            active sessions per user (<strong>pruning</strong>). Let's explore
            why we made specific design decisions.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Approach 1: Cleanup & Pruning Before Login
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
              <strong>Flow:</strong> Remove expired sessions and prune old
              sessions first, then attempt login.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong>Issue:</strong> If login fails, valid sessions could be
              pruned unnecessarily, causing potential session loss for the user.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Approach 2: Cleanup & Pruning After Login
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
              <strong>Flow:</strong> Attempt login first, then remove expired
              sessions and prune excess sessions.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong>Issue:</strong> Pruning is fine, but cleanup is essential.
              If login fails, expired sessions remain in the system longer than
              necessary.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              ✅ Best Approach: Cleanup at Start, Pruning at End
            </h3>
            <List className="text-zinc-600 dark:text-zinc-400 mb-4">
              <ListItem>
                <strong>Cleanup at Start:</strong> Removes expired sessions
                before login. Keeps the session list clean even if login fails.
              </ListItem>
              <ListItem>
                <strong>Pruning at End:</strong> Limits the number of active
                sessions after successfully adding a new session. Prevents
                removing valid sessions prematurely.
              </ListItem>
            </List>
            <p className="text-zinc-600 dark:text-zinc-400">
              This approach ensures both safety and correctness: expired
              sessions are always cleaned up, and the active session cap is
              enforced only when needed.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            7️⃣ Session Cleanup & Pruning Logic
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            To keep a user's session list accurate and enforce limits, we use
            two helper functions: <code>CleanupUserExpiredSessions</code> and{" "}
            <code>PruneExcessSessions</code>.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              CleanupUserExpiredSessions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Iterates through a user's session IDs and removes any that have
              expired in Redis. This ensures the session list stays clean even
              if login fails.
            </p>

            <Code>{`func CleanupUserExpiredSessions(userID uint) error {
	ctx := context.Background()
	userKey := RedisUserSessionsKey(userID)

	// Fetch all session IDs for the user
	sessionIDs, err := db.RedisClient.ZRange(ctx, userKey, 0, -1).Result()
	if err != nil {
		return fmt.Errorf("failed to fetch user sessions: %w", err)
	}

	for _, sid := range sessionIDs {
		sessionKey := RedisSessionKey(sid)

		// Check if the session key still exists
		exists, err := db.RedisClient.Exists(ctx, sessionKey).Result()
		if err != nil {
			continue // ignore errors and continue cleanup
		}

		// Remove expired sessions from user's set
		if exists == 0 {
			_ = db.RedisClient.ZRem(ctx, userKey, sid).Err()
		}
	}

	return nil
}`}</Code>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              PruneExcessSessions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Ensures that a user does not exceed the maximum allowed active
              sessions. Removes the oldest sessions if necessary.
            </p>

            <Code>{`func PruneExcessSessions(ctx context.Context, userID uint) error {
	userKey := RedisUserSessionsKey(userID)

	// Get the number of active sessions
	length, err := db.RedisClient.ZCard(ctx, userKey).Result()
	if err != nil {
		return fmt.Errorf("failed to get session count: %w", err)
	}

	if length > int64(constants.MaxUserSessions) {
		excessSessions := length - int64(constants.MaxUserSessions)

		// Fetch the oldest sessions to remove
		oldSessions, err := db.RedisClient.ZRange(ctx, userKey, 0, excessSessions-1).Result()
		if err != nil {
			return fmt.Errorf("failed to prune excess sessions: %w", err)
		}

		for _, oldID := range oldSessions {
			// Remove session ID from user's session set
			if err := ClearSessionFromUserSessions(ctx, userID, oldID); err != nil {
				log.Printf("warn: failed to unlink session %s from user %v: %v", oldID, userID, err)
			}
			// Delete session key from Redis
			if err := ClearSession(ctx, oldID); err != nil {
				log.Printf("warn: failed to delete session %s: %v", oldID, err)
			}
		}
	}

	return nil
}`}</Code>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400">
            These two functions work together: <strong>cleanup</strong> keeps
            the session list accurate at the start of login, while{" "}
            <strong>pruning</strong> enforces the session limit at the end.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            8️⃣ Logout Functionality
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Logging out a user involves clearing the session data from Redis,
            removing the session ID from the user's active session list, and
            deleting the browser cookie.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              DeleteCookie
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Deletes the session cookie from the browser by setting its value
              to empty and expiration in the past.
            </p>

            <Code>{`func DeleteCookie(c *gin.Context) {
	http.SetCookie(c.Writer, &http.Cookie{
		Name:     constants.SessionCookieName,
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		MaxAge:   -1,
		SameSite: http.SameSiteNoneMode,
		Expires:  time.Unix(0, 0), // set expiration in the past
	})
}`}</Code>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              ClearSession & ClearSessionFromUserSessions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Removes session data from Redis and removes the session ID from
              the user's set of active sessions.
            </p>

            <Code>{`func ClearSession(ctx context.Context, sessionID string) error {
	sessionKey := RedisSessionKey(sessionID)
	if err := db.RedisClient.Del(ctx, sessionKey).Err(); err != nil {
		return fmt.Errorf("failed to delete session %s: %w", sessionKey, err)
	}
	return nil
}

func ClearSessionFromUserSessions(ctx context.Context, userID uint, sessionID string) error {
	userKey := RedisUserSessionsKey(userID)
	if err := db.RedisClient.ZRem(ctx, userKey, sessionID).Err(); err != nil {
		return fmt.Errorf("failed to remove session %s from user %d sessions: %w", sessionID, userID, err)
	}
	return nil
}`}</Code>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              LogoutSession
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Handles the full logout process: clears session data, removes
              session ID from user's list, and deletes the browser cookie.
            </p>

            <Code>{`func LogoutSession(c *gin.Context) error {
	ctx := c.Request.Context()

	// Retrieve session metadata from request context
	session, err := GetSessionFromContext(c)
	if err != nil {
		return fmt.Errorf("failed to retrieve session from context: %w", err)
	}

	// Delete session data from Redis
	if err := ClearSession(ctx, session.SID); err != nil {
		return fmt.Errorf("failed to delete session %s: %w", session.SID, err)
	}

	// Remove session ID from user's active session set
	if err := ClearSessionFromUserSessions(ctx, session.UserID, session.SID); err != nil {
		log.Printf("warn: failed to remove session %s from user %d sessions: %v", session.SID, session.UserID, err)
	}

	// Delete the session cookie from the browser
	DeleteCookie(c)
	return nil
}`}</Code>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400">
            This ensures that the user's session is fully terminated both
            server-side and client-side, providing a clean and secure logout
            experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
            9️⃣ Extending Session Management
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            As we approach the end of this tutorial, the possibilities are
            endless! You can add more features to our session-based management
            system to make it even more secure, flexible, and user-friendly.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Endpoints You Can Try
            </h3>
            <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 mb-4">
              <li>Get all active sessions — see where a user is logged in</li>
              <li>Delete a specific session — log out from a single device</li>
              <li>
                Logout from all sessions — useful if an account is compromised
              </li>
              <li>Extend session expiration — "keep me logged in" feature</li>
              <li>
                Notify users on new login — email or push notification for new
                devices
              </li>
            </ul>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-200">
              Security & Monitoring Features to Explore
            </h3>
            <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 mb-4">
              <li>
                IP-based session checks — detect suspicious logins from new
                locations
              </li>
              <li>User-agent verification — ensure consistent device usage</li>
              <li>
                Geo-location restrictions — prevent login from restricted
                countries
              </li>
              <li>
                Session activity logging — track what actions happen in each
                session
              </li>
            </ul>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            The goal is to keep sessions secure, give users control, and make
            your system flexible. You can combine these features or come up with
            new ideas depending on your app's requirements.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            You can check out the full implementation of this session-based auth
            system from scratch on GitHub:{" "}
            <a
              href="https://github.com/anurag-327/session-based-auth"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              https://github.com/anurag-327/session-based-auth
            </a>
          </p>
        </section>

        <BlogFooter />
      </div>
    </div>
  );
}
