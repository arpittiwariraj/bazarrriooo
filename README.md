# Bazario

A static, client-side front end for connecting local street vendors with customers — browse products, browse their listings, and pay directly through the platform.

## Quick start
The site is pure HTML/CSS/JS with no build step.

```bash
# serve with Python's built-in HTTP server
python -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` in a browser.

## Structure
```
bazarrriooo/
├── index.html               # Customer / home experience
├── customer.html            # Customer-specific flows
├── vendor.html              # Vendor-facing page
├── admin.html               # Admin dashboard
├── style.css                # Layout & components
├── animations.css           # Shared entrance/transition animations
└── README.md
```

## Notes
- Frontend only — no backend or database is bundled yet. Credentials and payments are placeholders to be wired to a real API.
- Vendor/customer roles are routed through the navigation links above.

## License
MIT — free to use and adapt for learning/portfolio purposes.
