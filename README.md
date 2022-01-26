# Surveyor

Surveys users, saves the info to a Postgres database, and generates a report.

This is a prototype, but if you want to use it, you'll need jQuery and Bootstrap. Then include the following in the source of your page:

```html
<a href="/survey-modal.html" class="btn btn-primary btn-lg" id="surveyLink">
  Feedback
</a>
<div
  class="modal"
  id="survey-modal-container"
  tabindex="-1"
  role="dialog"
  aria-labelledby="surveyModalLabel"
  aria-hidden="true"
></div>
<script src="survey-modal.js"></script>
```

## Development

### Requirements

Node
Postgres

### Setup

Clone this repo to yourapp-app:

```bash
git clone https://github.com/jamidwyer/surveyor
cd surveyor
```

### Run

`npm start`

### Routes

#### Landing page

http://localhost:9000/index.html

#### About page

http://localhost:9000/about.html

#### Questions endpoint

http://localhost:9000/api/questions

#### Answers endpoint

http://localhost:9000/api/answers

### Roadmap

- Build form
- Save on form submit
- Generate report
- Save path user clicked from
- Validation
- Tests
- Live reload for local dev
- Development/Staging/Production
- Design
- Deploy
- DB persistence
- DB backups
- Security audit
- Internationalization
- Prettier
- Better bundle
- Improve data models if needed
- Clean urls
- API docs
- Microservices / Docker
- ES6
- Check for unique user
