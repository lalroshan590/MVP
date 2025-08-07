# Swasthya Sathi - Unique MVP Architecture

## Highlights
- Fast, async backend (Node.js/Express)
- Optimized React Native mobile UI
- Multi-language, accessible design
- Modular for future growth

## System Diagram

```
Mobile App <-> REST API <-> Real-time Doctor Service
                  |
            MongoDB (NoSQL, fast queries)
```

## Components

- **Mobile App:** React Native (Android, iOS). Clean, minimal, attractive UI. Instant navigation.
- **Backend:** Node.js/Express, JWT auth, MongoDB. Async for fast response.
- **Doctor Connect:** Real-time matching algorithm for < 5s connection.
- **Prescription:** E-prescription, SMS/WhatsApp integration.

## Performance
- Non-blocking API design
- Optimized queries, minimal payload
- CDN for assets

## Security
- JWT for user sessions
- Encrypted communication

## Uniqueness
- Local theme, regional illustrations
- Voice input for symptoms
- Personalized doctor match
