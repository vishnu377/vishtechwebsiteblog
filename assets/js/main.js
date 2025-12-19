






// --- HELPER: Path Prefix Calculator ---
function getPathPrefix(depth) {
    if (depth === 2) return "../../"; // posts/react/file.html (2 folders deep)
    if (depth === 1) return "../";    // posts/file.html (1 folder deep)
    return "";                        // index.html (Root)
}

// --- 1. DYNAMIC HEADER ---


// File: assets/js/main.js

function loadHeader(folderDepth = 0) {
    const prefix = getPathPrefix(folderDepth);

    const headerHTML = `
    <nav class="navbar">
        <div class="logo">
            <a href="${prefix}index.html">Vishtech<span>Fixes</span></a>
        </div>
        <div class="nav-links">

        <a href="${prefix}topics.html">All Topics</a>

            <!-- 1. JavaScript (Sabka Baap - Isliye pehle rakha) -->
            <a href="${prefix}JavaScript.html">JavaScript</a>

            <!-- 2. Frameworks & Backend -->
            <a href="${prefix}react.html">React</a>
            <a href="${prefix}node.html">Node.js</a>
            
           <!-- 3. Interviews (Highlighted) -->
            <a href="${prefix}interview.html" style="color:#ef4444; font-weight:600;">Interviews</a>

            
            <!-- Hire Me HATA DIYA hai ✅ -->
        </div>
    </nav>
    `;

    const headerEl = document.getElementById("dynamic-header");
    if(headerEl) headerEl.innerHTML = headerHTML;
}

// --- 2. DYNAMIC FOOTER ---
function loadFooter(folderDepth = 0) {
    const prefix = getPathPrefix(folderDepth);

    const footerHTML = `
    <footer>
        <div style="margin-bottom: 15px;">
            <a href="${prefix}about.html" style="margin:0 10px; color:#64748b;">About</a> | 
            <a href="${prefix}privacy.html" style="margin:0 10px; color:#64748b;">Privacy</a> | 
            <a href="${prefix}terms.html" style="margin:0 10px; color:#64748b;">Terms</a>
        </div>
        <p>&copy; 2025 Vishtech Services. Built for Developers.</p>
    </footer>
    `;

    const footerEl = document.getElementById("dynamic-footer");
    if(footerEl) footerEl.innerHTML = footerHTML;
}

// --- 3. LOAD BLOGS (Home Page Logic - Same as before) ---
function loadRecentPosts() {
    const container = document.getElementById("blog-container");
    if (!container) return; 

    // Yahan hume prefix ki zaroorat nahi kyunki ye script Home page par hi chalti hai
    let html = "";
    
    // Blog Data Global Variable se aayega
    if(typeof blogPosts !== 'undefined') {
        blogPosts.slice(0, 6).forEach(post => {
            let badgeClass = "react"; 
            if(post.category.includes("Node")) badgeClass = "node";
            if(post.category.includes("AWS")) badgeClass = "aws";

            html += `
            <a href="${post.link}" class="card">
                <div>
                    <div class="card-header">
                        <span class="badge ${badgeClass}">${post.category}</span>
                        <span style="font-size:12px; color:#94a3b8;">${post.readTime} read</span>
                    </div>
                    <h2>${post.title}</h2>
                    <p>${post.desc}</p>
                </div>
                <div class="read-more">View Solution →</div>
            </a>
            `;
        });
        container.innerHTML = html;
    }
}








