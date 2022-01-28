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
```

After jQuery is included, you'll also need:

`<script src="survey-modal.js"></script>`

## Development

### Requirements

Node

Postgres

### Setup

Clone this repo:

```bash
git clone https://github.com/jamidwyer/surveyor
cd surveyor
```

### Run

`npm start`

### Routes

#### Landing page

http://localhost:9000/

#### About page

http://localhost:9000/about.html

#### Report page

http://localhost:9000/report.html

#### Questions endpoint

http://localhost:9000/api/survey_questions

#### Answers endpoint

http://localhost:9000/api/survey_answers

### Roadmap

- Tests
- survey-modal.js less awful
- form sometimes loads, sometimes doesn't
- ESLint
- Validation
- src folder
- naming consistency
- Development/Staging/Production
- Design
- Password required for answers service
- Deploy
- DB persistence
- DB backups
- Security audit
- Use questions endpoint instead of hardcoding
- Internationalization
- Prettier
- Better bundle
- Copy report in CSV
- Improve data models if needed
- Clean urls
- API docs
- Microservices / Docker
- ES6
- Check for unique user
