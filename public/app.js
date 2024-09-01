document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-note');
    const listButton = document.getElementById('list-notes');
    const notesList = document.getElementById('notes-list');

    // Save note function
    saveButton.addEventListener('click', async () => {
        const content = document.getElementById('note-content').value.trim();
        if (content) {
            try {
                const response = await fetch('/note', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content })
                });
                if (response.ok) {
                    alert('Note saved successfully');
                    document.getElementById('note-content').value = '';
                } else {
                    alert('Failed to save note');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while saving the note');
            }
        } else {
            alert('Please enter some content');
        }
    });

    // List notes function
    listButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/notes');
            const notes = await response.json();
            notesList.innerHTML = '';
            notes.forEach(note => {
                const noteItem = document.createElement('div');
                noteItem.className = 'note-item';
                
                const noteContent = document.createElement('p');
                noteContent.textContent = note.content;

                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn btn-delete';
                deleteButton.textContent = 'Delete';

                deleteButton.addEventListener('click', async () => {
                    try {
                        const deleteResponse = await fetch(`/note/${note.id}`, {
                            method: 'DELETE'
                        });
                        if (deleteResponse.ok) {
                            notesList.removeChild(noteItem);
                        } else {
                            alert('Failed to delete note');
                        }
                    } catch (error) {
                        console.error('Error:', error);
                        alert('An error occurred while deleting the note');
                    }
                });

                noteItem.appendChild(noteContent);
                noteItem.appendChild(deleteButton);
                notesList.appendChild(noteItem);
            });
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while listing the notes');
        }
    });
});
