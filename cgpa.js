[12:08 pm, 22/3/2024] Ramya: }
[12:13 pm, 22/3/2024] Ramya: const actionCell = document.createElement('td'); 

        const editButton = document.createElement('button'); 

        editButton.className = 'edit'; 

        editButton.textContent = 'Edit'; 

        editButton.onclick = () => editSubject(index); 

  

        const deleteButton = document.createElement('button'); 

        deleteButton.className = 'delete'; 

        deleteButton.textContent = 'Delete'; 

        deleteButton.onclick = () => deleteSubject(index); 

  

        actionCell.appendChild(editButton); 

        actionCell.appendChild(deleteButton); 

  

        row.appendChild(subjectCell); 

        row.appendChild(gradeCell); 

        row.appendChild(creditCell); 

        row.appendChild(actionCell); 

  

        subjectList.appendChild(row); 

    }); 
} 

  

function editSubject(index) { 

    const subjectInput =  

        document.getElementById('subject'); 

    const selectedSubject = subjects[index]; 

  

    subjectInput.value = selectedSubject.subject; 

    document.getElementById('grade').value =  

        selectedSubject.grade; 

    document.getElementById('credit').value =  

        selectedSubject.credit; 

  

    editIndex = index; 
} 

  

function deleteSubject(index) { 

    subjects.splice(index, 1); 

    displaySubjects(); 
} 

  

function calculateCGPA() { 

    const totalCredits = subjects.reduce( 

    (sum, s) => sum + s.credit, 0); 

    const weightedSum = subjects.reduce( 

    (sum, s) => sum + getGradePoint(s.grade) * s.credit, 0); 

  

    const cgpa = totalCredits === 0 ? 0 :  

    (weightedSum / totalCredits).toFixed(2); 

    document.getElementById('cgpa').textContent = cgpa; 
} 

  

function getGradePoint(grade) { 

    // Assign grade points as per your grading system 

    switch (grade) { 

        case 'S': return 10.0; 

        case 'A': return 9.0; 

        case 'B': return 8.0; 

        case 'C': return 7.0; 

        case 'D': return 6.0; 

        case 'F': return 0.0; 

        default: return 0.0; 

    } 
} 

  

function clearForm() { 

    document.getElementById('subject').value = ''; 

    document.getElementById('grade').value = 'A'; 

    document.getElementById('credit').value = ''; 
} 

  

function resetForm() { 

    subjects = []; 

    editIndex = -1; 

    document.getElementById('subjectList').innerHTML = ''; 

    document.getElementById('cgpa').textContent = '0.00'; 

    clearForm(); 
}