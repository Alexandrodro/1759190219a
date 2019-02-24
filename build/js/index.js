// Create comment

class AddComment {

	constructor(form, comment) {
		this._form = document.getElementById(form);
		this._comment = document.getElementById(comment);
		
		this.listener();
	}

	getDateNow() {
		const dateNow = new Date();
		const options = { year: '2-digit', month: 'long', day: 'numeric' };
		const date = new Intl.DateTimeFormat('ru-RU', options).format(dateNow);

		return date.replace(" г.", "");
	}

	getCommentPattern(text) {
		const dateNow = this.getDateNow();

		const wrap = document.createElement('div');
		wrap.className = 'comment__wrap';
		wrap.innerHTML += `<div class="comment__title"><div class="comment__name">Noname</div><div class="comment__date">${dateNow}</div></div><div class="comment__text">${text}</div></div>`;

		return wrap;
	}

	insertComment() {
		const text = document.getElementById('message-text');
		const value = text.value;
		if (value === '') return;

		text.value = '';
		this._comment.appendChild(this.getCommentPattern(value));
	}

	listener() {
		// Submit event on Form
		this._form.addEventListener('submit', (e) => {
			e.preventDefault();
			
			this.insertComment();
		});

		// Ctrl+Enter on Textarea field
		document.getElementById('message-text').addEventListener('keyup', (e) => {

			e.preventDefault();

			if(e.ctrlKey && e.keyCode === 13) {
				this.insertComment();
			}

		});
	}
}

new AddComment('message-form', 'comment');