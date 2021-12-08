---
layout: "base.njk"
templateEngineOverride: njk, md
title: "Home"
---

<section id="intro"  class="main_section"
>
    <article class="content">
        <header>
            <h2>Hi, I'm</h2>
            <h1 id="intro_name">Leslie Seeberger</h1>
            <h2>software engineer</h2>
        </header>
        <div>
            <p>
            I'm a full-stack software developer living in the Twin Cities metro, passionate about learning and driven by curiosity. Lately I've been diving deep into the world of elixir and ruby, but I have professional experience using C#, .Net Core, GraphQL, and React, amongst other things. If you're interested in getting in touch, shoot me a message in the form below.
            </p>
        </div>
        <footer>
            <a href="#contact" class="btn">Let's Chat</a>
        </footer>
    </article>
    <footer id="intro_footer">
        <h2 class="sr-only">Ways to get in touch with me</h2>
        <ul>
            <li>
                <a href="https://twitter.com/leslie_cberger" target="_blank" alt="twitter" rel="noopener">
                    <span class="sr-only">Follow me on Twitter</span>
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/leslie-seeberger" target="_blank" alt="github" rel="noopener">
                    <span class="sr-only">Check out my GitHub</span>
                    <i class="fab fa-github-alt"></i>
                </a>
            </li>
            <li>
                <a href="mailto:leslie.c.seeberger@gmail.com" alt="email" rel="noopener">
                    <span class="sr-only">Send me an email</span>
                    <i class="fas fa-at"></i>
                </a>
            </li>
        </ul>
    </footer>
</section>
<section id="contact" class="main_section">
    <article class="content">
<h1>contact</h1>
<form
  action="https://formspree.io/f/xknynndn"
  method="POST"
>
    <div class="form-input">
        <label for="contact_name">Name</label>
        <input id="contact_name" type="text" name="name" required>
    </div>
    <div class="form-input">
        <label for="contact_email">Email</label>
        <input id="contact_email" type="email" name="_replyto" required>
    </div>
    <div class="form-input">
        <label for="contact_message">Name</label>
        <textarea id="contact_message" name="message" rows="10" required></textarea>
    </div>
<button type="submit" class="btn">Send</button>

</form>
</article>
</section>
