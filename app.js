/* ==========================================================================
   꿈나무 3학년 1반 학급경제 (Class Coin) App Logic & State Manager
   ========================================================================== */

// STORAGE KEY
const STORAGE_KEY = 'class_economy_app_data_v1';

// INITIAL SEED DATA (19 Students)
const INITIAL_STUDENTS = [
    { id: 1, name: "김민준", avatar: "👦", balance: 1250, role: "🧹 청소 도우미", tasks: [{ id: 't1', title: "교실 바닥 먼지 털기 및 쓸기", completed: false }, { id: 't2', title: "청소 도구함 깔끔하게 정리하기", completed: false }] },
    { id: 2, name: "이서연", avatar: "👧", balance: 980, role: "🧹 칠판 도우미", tasks: [{ id: 't1', title: "쉬는 시간 칠판 깨끗이 지우기", completed: false }, { id: 't2', title: "분필과 지우개 먼지 털기", completed: false }] },
    { id: 3, name: "박도윤", avatar: "👦", balance: 1500, role: "🥛 우유 도우미", tasks: [{ id: 't1', title: "아침 우유 상자 교실로 가져오기", completed: false }, { id: 't2', title: "우유 팩 개수 확인 및 정리", completed: false }] },
    { id: 4, name: "최하은", avatar: "👧", balance: 850, role: "💡 에너지 절약가", tasks: [{ id: 't1', title: "이동 수업 시 전등 끄기", completed: false }, { id: 't2', title: "창문 닫기 및 에어컨/히터 점검", completed: false }] },
    { id: 5, name: "정시우", avatar: "👦", balance: 1100, role: "🍱 식판 정리원", tasks: [{ id: 't1', title: "점심시간 잔반 줄이기 안내", completed: false }, { id: 't2', title: "식판 및 수저통 세워 모으기", completed: false }] },
    { id: 6, name: "강지유", avatar: "👧", balance: 1420, role: "📚 학급 문고 관리", tasks: [{ id: 't1', title: "어질러진 책장 순서대로 정리", completed: false }, { id: 't2', title: "대출 연체된 학급 도서 챙기기", completed: false }] },
    { id: 7, name: "조현우", avatar: "👦", balance: 900, role: "📬 우편함 관리자", tasks: [{ id: 't1', title: "교무실 우편함 유인물 확인", completed: false }, { id: 't2', title: "모둠별 안내장 나눠주기", completed: false }] },
    { id: 8, name: "윤서아", avatar: "👧", balance: 1300, role: "⚽ 체육 도우미", tasks: [{ id: 't1', title: "체육 시간 공 및 체육 용구 챙기기", completed: false }, { id: 't2', title: "수업 후 체육용구함 정리", completed: false }] },
    { id: 9, name: "장건우", avatar: "👦", balance: 1650, role: "💻 정보 도우미", tasks: [{ id: 't1', title: "수업용 컴퓨터/프로젝터 켜기", completed: false }, { id: 't2', title: "수업 후 마이크 및 탭 충전", completed: false }] },
    { id: 10, name: "임지아", avatar: "👧", balance: 1050, role: "🚶 줄서기 리더", tasks: [{ id: 't1', title: "급식 및 이동 수업 줄 정돈", completed: false }, { id: 't2', title: "조용히 이동하기 알림", completed: false }] },
    { id: 11, name: "한도현", avatar: "👦", balance: 950, role: "🌱 식물 가꾸기", tasks: [{ id: 't1', title: "화분 흙 상태 확인 및 물주기", completed: false }, { id: 't2', title: "시든 잎 정리 및 햇빛 쬐기", completed: false }] },
    { id: 12, name: "오수아", avatar: "👧", balance: 1180, role: "🎂 생일/알림 리더", tasks: [{ id: 't1', title: "오늘의 생일자 달력 확인", completed: false }, { id: 't2', title: "알림장 적기 시각 알림", completed: false }] },
    { id: 13, name: "서진우", avatar: "👦", balance: 880, role: "🪟 방역 및 환기", tasks: [{ id: 't1', title: "쉬는 시간 5분 창문 열어 환기", completed: false }, { id: 't2', title: "책상 소독 물티슈 배치", completed: false }] },
    { id: 14, name: "신유나", avatar: "👧", balance: 1210, role: "🍱 급식 순서 도우미", tasks: [{ id: 't1', title: "모둠 순서대로 줄서기 안내", completed: false }, { id: 't2', title: "손 소독제 실시 확인", completed: false }] },
    { id: 15, name: "권예준", avatar: "👦", balance: 940, role: "👟 신발장 정리원", tasks: [{ id: 't1', title: "복도 신발장 실내화 정돈", completed: false }, { id: 't2', title: "바깥 신발 털기 확인", completed: false }] },
    { id: 16, name: "황채원", avatar: "👧", balance: 1350, role: "📝 알림장 도우미", tasks: [{ id: 't1', title: "칠판 끝 알림장 글씨 교정", completed: false }, { id: 't2', title: "알림장 못 적은 친구 도와주기", completed: false }] },
    { id: 17, name: "안지호", avatar: "👦", balance: 1120, role: "🎲 보드게임 도우미", tasks: [{ id: 't1', title: "쉬는 시간 보드게임 대여 기록", completed: false }, { id: 't2', title: "조각 분실 여부 확인 후 수거", completed: false }] },
    { id: 18, name: "송하린", avatar: "👧", balance: 1600, role: "🌡️ 학급 온도계 기재", tasks: [{ id: 't1', title: "칭찬 스티커 칭찬판에 붙이기", completed: false }, { id: 't2', title: "목표 점수 갱신 확인", completed: false }] },
    { id: 19, name: "류태오", avatar: "👦", balance: 1400, role: "🙋 선생님 도우미", tasks: [{ id: 't1', title: "선생님 심부름 및 유인물 수거", completed: false }, { id: 't2', title: "교실 열쇠 챙기기", completed: false }] }
];

// INITIAL SHOP ITEMS
const INITIAL_SHOP_ITEMS = [
    { id: 1, icon: "🪑", name: "원하는 자리 선택권", price: 500, desc: "하루 동안 나와 친한 친구와 원하는 자리에 앉습니다." },
    { id: 2, icon: "📝", name: "숙제 1회 면제권", price: 1000, desc: "수학 익힘책이나 일기 쓰기 숙제 1회를 우대 면제받습니다." },
    { id: 3, icon: "🎮", name: "자유시간 10분 이용권", price: 300, desc: "쉬는 시간이나 점심시간에 10분 더 보드게임이나 태블릿 이용." },
    { id: 4, icon: "🍫", name: "선생님 추천 간식 뽑기", price: 400, desc: "맛있는 과자나 젤리 간식 상자에서 1개 뽑기!" },
    { id: 5, icon: "🎨", name: "하루 일일 반장권", price: 800, desc: "하루 동안 학급 인사 리더 및 대표 역할을 경험합니다." }
];

// STATE MANAGEMENT OBJECT
let appState = {
    mode: 'student', // 'student' or 'teacher'
    currentStudentId: 1,
    goalScore: 750,
    goalTarget: 1000,
    students: [],
    shopItems: [],
    coupons: [], // [{ id, studentId, shopItemId, name, icon, date, used }]
    history: [], // [{ id, studentId, studentName, type: 'plus'|'minus', amount, reason, date }]
    selectedStudentIds: []
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    renderAll();
});

// LOAD & SAVE DATA
function loadData() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            appState = { ...appState, ...parsed };
        } catch (e) {
            console.error("Failed to parse stored data", e);
            seedInitialData();
        }
    } else {
        seedInitialData();
    }
}

function seedInitialData() {
    appState.students = JSON.parse(JSON.stringify(INITIAL_STUDENTS));
    appState.shopItems = JSON.parse(JSON.stringify(INITIAL_SHOP_ITEMS));
    appState.goalScore = 750;
    appState.goalTarget = 1000;
    appState.coupons = [
        { id: 101, studentId: 1, shopItemId: 1, name: "원하는 자리 선택권", icon: "🪑", date: "2026-10-04", used: false }
    ];
    appState.history = [
        { id: 1, studentId: 1, studentName: "김민준", type: "plus", amount: 50, reason: "청소 우수 모둠 상금", date: "2026-10-05 09:30" },
        { id: 2, studentId: 1, studentName: "김민준", type: "plus", amount: 100, reason: "1인 1역 주간 성실상", date: "2026-10-04 15:00" },
        { id: 3, studentId: 2, studentName: "이서연", type: "plus", amount: 30, reason: "발표왕 칭찬", date: "2026-10-05 10:15" }
    ];
    saveData();
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// RENDER ALL COMPONENTS
function renderAll() {
    renderGoalScore();
    renderStudentSelect();
    
    if (appState.mode === 'student') {
        document.getElementById('studentView').classList.add('active');
        document.getElementById('teacherView').classList.remove('active');
        document.getElementById('btnModeStudent').classList.add('active');
        document.getElementById('btnModeTeacher').classList.remove('active');
        document.getElementById('studentSelectWrapper').style.display = 'flex';
        renderStudentView();
    } else {
        document.getElementById('studentView').classList.remove('active');
        document.getElementById('teacherView').classList.add('active');
        document.getElementById('btnModeStudent').classList.remove('active');
        document.getElementById('btnModeTeacher').classList.add('active');
        document.getElementById('studentSelectWrapper').style.display = 'none';
        renderTeacherView();
    }
}

// MODE SWITCHING
function switchMode(newMode) {
    appState.mode = newMode;
    saveData();
    renderAll();
    showToast(newMode === 'teacher' ? '🎓 교사 관리자 모드로 전환되었습니다.' : '👦 학생 모드로 전환되었습니다.');
}

// CLASS GOAL SCORE
function renderGoalScore() {
    const percent = Math.min(100, Math.round((appState.goalScore / appState.goalTarget) * 100));
    document.getElementById('currentGoalScore').innerText = appState.goalScore;
    document.getElementById('targetGoalScore').innerText = appState.goalTarget;
    document.getElementById('goalProgressFill').style.width = percent + '%';
    
    // Teacher view displays
    const tScore = document.getElementById('teacherScoreDisplay');
    if (tScore) tScore.innerText = appState.goalScore;
}

function adjustGoalScore(delta) {
    appState.goalScore = Math.max(0, appState.goalScore + delta);
    saveData();
    renderGoalScore();
    showToast(`🎯 우리 반 목표 점수가 ${delta > 0 ? '+' + delta : delta}점 변경되었습니다.`);
}

function promptSetGoalTarget() {
    const newTarget = prompt("우리 반 목표 점수 목표치를 입력하세요:", appState.goalTarget);
    if (newTarget && !isNaN(newTarget)) {
        appState.goalTarget = parseInt(newTarget, 10);
        saveData();
        renderGoalScore();
        showToast("목표 점수 기준이 변경되었습니다.");
    }
}

// STUDENT SELECTOR
function renderStudentSelect() {
    const select = document.getElementById('studentSelect');
    select.innerHTML = '';
    appState.students.forEach(st => {
        const opt = document.createElement('option');
        opt.value = st.id;
        opt.innerText = `${st.id}번 ${st.name}`;
        if (st.id === appState.currentStudentId) opt.selected = true;
        select.appendChild(opt);
    });
}

function onStudentSelectChange(val) {
    appState.currentStudentId = parseInt(val, 10);
    saveData();
    renderStudentView();
}

// STUDENT VIEW RENDERING
function renderStudentView() {
    const student = appState.students.find(s => s.id === appState.currentStudentId) || appState.students[0];
    
    // Hero Info
    document.getElementById('studentAvatar').innerText = student.avatar || "👦";
    document.getElementById('studentName').innerHTML = `${student.name} <span class="badge-student-num">${student.id}번</span>`;
    document.getElementById('studentRoleTag').innerHTML = `<i class="fa-solid fa-broom"></i> ${student.role}`;
    document.getElementById('studentBalanceDisplay').innerText = student.balance.toLocaleString();
    document.getElementById('taskRoleTitle').innerText = student.role;

    // Render Tasks Checklist
    renderStudentTasks(student);

    // Render Shop Grid
    renderStudentShop(student);

    // Render Coupon Grid
    renderStudentCoupons(student);

    // Render History
    renderStudentHistory(student);
}

function switchStudentTab(tabName) {
    const tabs = ['tasks', 'shop', 'coupons', 'history'];
    tabs.forEach(t => {
        const btn = document.querySelector(`button[onclick="switchStudentTab('${t}')"]`);
        const pane = document.getElementById(`tabStudent${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (t === tabName) {
            btn.classList.add('active');
            pane.classList.add('active');
        } else {
            btn.classList.remove('active');
            pane.classList.remove('active');
        }
    });
}

// STUDENT 1인 1역 TASKS
function renderStudentTasks(student) {
    const container = document.getElementById('studentTaskChecklist');
    container.innerHTML = '';
    
    if (!student.tasks || student.tasks.length === 0) {
        container.innerHTML = '<p class="section-desc">현재 부여된 일일 미션이 없습니다.</p>';
        return;
    }

    student.tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        item.innerHTML = `
            <div class="task-left">
                <div class="custom-checkbox" onclick="toggleStudentTask('${student.id}', '${task.id}')">
                    ${task.completed ? '<i class="fa-solid fa-check"></i>' : ''}
                </div>
                <span class="task-title">${task.title}</span>
            </div>
            <div class="task-reward-tag">+20 미소</div>
        `;
        container.appendChild(item);
    });
}

function toggleStudentTask(studentId, taskId) {
    const student = appState.students.find(s => s.id === parseInt(studentId, 10));
    if (!student) return;

    const task = student.tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        if (task.completed) {
            student.balance += 20;
            addHistoryRecord(student.id, student.name, 'plus', 20, `1인 1역 수행 완료 (${task.title})`);
            showToast(`🎉 1인 1역 수행 완료! +20 미소 획득!`);
        } else {
            student.balance = Math.max(0, student.balance - 20);
            addHistoryRecord(student.id, student.name, 'minus', 20, `1인 1역 취소 (${task.title})`);
        }
        saveData();
        renderStudentView();
    }
}

// STUDENT SHOP & BUYING
function renderStudentShop(student) {
    const grid = document.getElementById('studentShopGrid');
    grid.innerHTML = '';

    appState.shopItems.forEach(item => {
        const canAfford = student.balance >= item.price;
        const card = document.createElement('div');
        card.className = 'shop-card';
        card.innerHTML = `
            <div class="shop-card-icon">${item.icon}</div>
            <h4 class="shop-card-title">${item.name}</h4>
            <p class="shop-card-desc">${item.desc}</p>
            <div class="shop-card-footer">
                <span class="shop-price">🪙 ${item.price} 미소</span>
                <button class="btn btn-sm ${canAfford ? 'btn-primary' : 'btn-gray'}" 
                    ${canAfford ? '' : 'disabled'} 
                    onclick="buyShopItem(${item.id})">
                    ${canAfford ? '구매하기' : '잔액 부족'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function buyShopItem(itemId) {
    const student = appState.students.find(s => s.id === appState.currentStudentId);
    const item = appState.shopItems.find(i => i.id === itemId);
    if (!student || !item) return;

    if (student.balance < item.price) {
        alert("화폐 잔액이 부족합니다!");
        return;
    }

    if (confirm(`'${item.name}' 쿠폰을 ${item.price} 미소로 구매하시겠습니까?`)) {
        student.balance -= item.price;
        const newCoupon = {
            id: Date.now(),
            studentId: student.id,
            shopItemId: item.id,
            name: item.name,
            icon: item.icon,
            date: new Date().toISOString().split('T')[0],
            used: false
        };
        appState.coupons.push(newCoupon);
        addHistoryRecord(student.id, student.name, 'minus', item.price, `상점 쿠폰 구매 (${item.name})`);

        saveData();
        renderStudentView();
        showToast(`🛍️ '${item.name}' 구매 완료! 내 쿠폰함에서 확인하세요.`);
    }
}

// STUDENT COUPONS
function renderStudentCoupons(student) {
    const grid = document.getElementById('studentCouponGrid');
    const myCoupons = appState.coupons.filter(c => c.studentId === student.id);
    document.getElementById('myCouponCount').innerText = myCoupons.filter(c => !c.used).length;

    grid.innerHTML = '';
    if (myCoupons.length === 0) {
        grid.innerHTML = '<p class="section-desc">보유 중인 쿠폰이 없습니다. 상점에서 신나게 구매해 보세요!</p>';
        return;
    }

    myCoupons.forEach(c => {
        const card = document.createElement('div');
        card.className = `coupon-card ${c.used ? 'used' : ''}`;
        card.innerHTML = `
            <div class="coupon-header">
                <span class="coupon-icon">${c.icon}</span>
                <span class="coupon-name">${c.name}</span>
            </div>
            <div class="coupon-date">구매일: ${c.date}</div>
            <button class="btn btn-sm ${c.used ? 'btn-gray' : 'btn-secondary'}" 
                ${c.used ? 'disabled' : ''} 
                onclick="useCoupon(${c.id})">
                ${c.used ? '사용 완료됨' : '선생님께 제출하기'}
            </button>
        `;
        grid.appendChild(card);
    });
}

function useCoupon(couponId) {
    const coupon = appState.coupons.find(c => c.id === couponId);
    if (coupon && !coupon.used) {
        if (confirm(`'${coupon.name}' 쿠폰을 사용 처리하시겠습니까?`)) {
            coupon.used = true;
            saveData();
            renderStudentView();
            showToast("🎟️ 쿠폰이 사용 완료 처리되었습니다.");
        }
    }
}

// STUDENT HISTORY
function renderStudentHistory(student) {
    const list = document.getElementById('studentHistoryList');
    list.innerHTML = '';

    const studentLogs = appState.history.filter(h => h.studentId === student.id);
    if (studentLogs.length === 0) {
        list.innerHTML = '<p class="section-desc">아직 화폐 거래 내역이 없습니다.</p>';
        return;
    }

    studentLogs.sort((a,b) => b.id - a.id).forEach(log => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-left">
                <div class="history-badge ${log.type}">${log.type === 'plus' ? '+' : '-'}</div>
                <div>
                    <div class="history-reason">${log.reason}</div>
                    <div class="history-date">${log.date}</div>
                </div>
            </div>
            <div class="history-amount ${log.type}">
                ${log.type === 'plus' ? '+' : '-'}${log.amount} 미소
            </div>
        `;
        list.appendChild(item);
    });
}

// ==========================================================================
// TEACHER VIEW LOGIC
// ==========================================================================
function renderTeacherView() {
    renderTeacherStudentsGrid();
    renderTeacherRolesTable();
    renderTeacherShopManageGrid();
    renderTeacherGlobalLogs();
}

function switchTeacherTab(tabName) {
    const tabs = ['students', 'roles', 'shopManage', 'logs'];
    tabs.forEach(t => {
        const btn = document.querySelector(`button[onclick="switchTeacherTab('${t}')"]`);
        const pane = document.getElementById(`tabTeacher${t.charAt(0).toUpperCase() + t.slice(1)}`);
        if (t === tabName) {
            btn.classList.add('active');
            pane.classList.add('active');
        } else {
            btn.classList.remove('active');
            pane.classList.remove('active');
        }
    });
}

// TEACHER STUDENTS GRID
function renderTeacherStudentsGrid() {
    const grid = document.getElementById('teacherStudentsGrid');
    grid.innerHTML = '';

    appState.students.forEach(st => {
        const isSelected = appState.selectedStudentIds.includes(st.id);
        const card = document.createElement('div');
        card.className = `student-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="card-top">
                <span class="card-student-name">${st.avatar} ${st.id}번 ${st.name}</span>
                <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleStudentSelection(${st.id})">
            </div>
            <span class="card-role-name">${st.role}</span>
            <div class="card-balance">🪙 ${st.balance.toLocaleString()} 미소</div>
            <div class="card-actions">
                <button class="btn btn-emerald-sm" onclick="openSinglePayModal(${st.id}, 'add')">+지급</button>
                <button class="btn btn-rose-sm" onclick="openSinglePayModal(${st.id}, 'subtract')">-차감</button>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('selectedCountText').innerText = appState.selectedStudentIds.length;
    document.getElementById('selectAllStudents').checked = (appState.selectedStudentIds.length === appState.students.length && appState.students.length > 0);
}

function toggleStudentSelection(id) {
    const idx = appState.selectedStudentIds.indexOf(id);
    if (idx > -1) {
        appState.selectedStudentIds.splice(idx, 1);
    } else {
        appState.selectedStudentIds.push(id);
    }
    renderTeacherStudentsGrid();
}

function toggleSelectAllStudents(checked) {
    if (checked) {
        appState.selectedStudentIds = appState.students.map(s => s.id);
    } else {
        appState.selectedStudentIds = [];
    }
    renderTeacherStudentsGrid();
}

// TEACHER ROLES TABLE
function renderTeacherRolesTable() {
    const tbody = document.getElementById('teacherRolesTableBody');
    tbody.innerHTML = '';

    appState.students.forEach(st => {
        const tr = document.createElement('tr');
        const tasksText = st.tasks ? st.tasks.map(t => '• ' + t.title).join('<br>') : '설정된 미션 없음';
        tr.innerHTML = `
            <td>${st.id}번</td>
            <td><strong>${st.name}</strong></td>
            <td><span class="hint-badge">${st.role}</span></td>
            <td>${tasksText}</td>
            <td>
                <button class="btn btn-sm btn-outline" onclick="openEditRoleModal(${st.id})">
                    <i class="fa-solid fa-pen"></i> 수정
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openEditRoleModal(studentId) {
    const st = appState.students.find(s => s.id === studentId);
    if (!st) return;

    document.getElementById('editRoleStudentId').value = st.id;
    document.getElementById('editRoleStudentName').innerText = `${st.id}번 ${st.name}`;
    document.getElementById('editRoleNameInput').value = st.role;
    document.getElementById('editRoleTasksInput').value = st.tasks ? st.tasks.map(t => t.title).join('\n') : '';

    openModal('modalEditRole');
}

function saveStudentRoleEdit() {
    const id = parseInt(document.getElementById('editRoleStudentId').value, 10);
    const st = appState.students.find(s => s.id === id);
    if (!st) return;

    const newRole = document.getElementById('editRoleNameInput').value.trim();
    const tasksRaw = document.getElementById('editRoleTasksInput').value.trim();

    if (newRole) st.role = newRole;
    if (tasksRaw) {
        const lines = tasksRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        st.tasks = lines.map((line, idx) => ({ id: 't' + (idx + 1), title: line, completed: false }));
    }

    saveData();
    closeModal('modalEditRole');
    renderTeacherView();
    showToast(`💼 ${st.name} 학생의 1인 1역이 수정되었습니다.`);
}

function openRoleManageModal() {
    alert("학생 리스트의 '수정' 버튼을 눌러 개별 학생의 1인 1역과 일일 미션을 수정하세요!");
}

// TEACHER SHOP MANAGE
function renderTeacherShopManageGrid() {
    const grid = document.getElementById('teacherShopManageGrid');
    grid.innerHTML = '';

    appState.shopItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'shop-card';
        card.innerHTML = `
            <div class="shop-card-icon">${item.icon}</div>
            <h4 class="shop-card-title">${item.name}</h4>
            <p class="shop-card-desc">${item.desc}</p>
            <div class="shop-card-footer">
                <span class="shop-price">🪙 ${item.price} 미소</span>
                <div class="btn-group">
                    <button class="btn btn-sm btn-outline" onclick="openEditShopItemModal(${item.id})">수정</button>
                    <button class="btn btn-sm btn-rose-sm" onclick="deleteShopItem(${item.id})">삭제</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

let selectedShopIconVal = '🪑';
function selectShopIcon(icon) {
    selectedShopIconVal = icon;
    document.querySelectorAll('#shopIconSelector .icon-opt').forEach(el => {
        if (el.innerText === icon) el.classList.add('active');
        else el.classList.remove('active');
    });
}

function openAddShopItemModal() {
    document.getElementById('shopItemId').value = '';
    document.getElementById('shopItemName').value = '';
    document.getElementById('shopItemPrice').value = '300';
    document.getElementById('shopItemDesc').value = '';
    selectShopIcon('🪑');
    document.getElementById('shopModalTitle').innerHTML = '<i class="fa-solid fa-gift"></i> 학급 상점 상품 등록';
    openModal('modalShopItem');
}

function openEditShopItemModal(itemId) {
    const item = appState.shopItems.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('shopItemId').value = item.id;
    document.getElementById('shopItemName').value = item.name;
    document.getElementById('shopItemPrice').value = item.price;
    document.getElementById('shopItemDesc').value = item.desc;
    selectShopIcon(item.icon);
    document.getElementById('shopModalTitle').innerHTML = '<i class="fa-solid fa-pen"></i> 상점 상품 수정';
    openModal('modalShopItem');
}

function saveShopItem() {
    const idVal = document.getElementById('shopItemId').value;
    const name = document.getElementById('shopItemName').value.trim();
    const price = parseInt(document.getElementById('shopItemPrice').value, 10);
    const desc = document.getElementById('shopItemDesc').value.trim();

    if (!name || isNaN(price)) {
        alert("상품 이름과 가격을 바르게 입력하세요!");
        return;
    }

    if (idVal) {
        // Edit
        const item = appState.shopItems.find(i => i.id === parseInt(idVal, 10));
        if (item) {
            item.name = name;
            item.price = price;
            item.desc = desc;
            item.icon = selectedShopIconVal;
        }
    } else {
        // Add
        const newItem = {
            id: Date.now(),
            icon: selectedShopIconVal,
            name: name,
            price: price,
            desc: desc
        };
        appState.shopItems.push(newItem);
    }

    saveData();
    closeModal('modalShopItem');
    renderTeacherView();
    showToast("🛒 상점 상품 정보가 저장되었습니다.");
}

function deleteShopItem(itemId) {
    if (confirm("정말 이 상점 상품을 삭제하시겠습니까?")) {
        appState.shopItems = appState.shopItems.filter(i => i.id !== itemId);
        saveData();
        renderTeacherView();
        showToast("상품이 삭제되었습니다.");
    }
}

// TEACHER GLOBAL LOGS
function renderTeacherGlobalLogs() {
    const list = document.getElementById('teacherGlobalHistoryList');
    list.innerHTML = '';

    if (appState.history.length === 0) {
        list.innerHTML = '<p class="section-desc">전체 화폐 내역이 없습니다.</p>';
        return;
    }

    appState.history.slice().reverse().forEach(log => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-left">
                <div class="history-badge ${log.type}">${log.type === 'plus' ? '+' : '-'}</div>
                <div>
                    <div class="history-reason"><strong>[${log.studentName}]</strong> ${log.reason}</div>
                    <div class="history-date">${log.date}</div>
                </div>
            </div>
            <div class="history-amount ${log.type}">
                ${log.type === 'plus' ? '+' : '-'}${log.amount} 미소
            </div>
        `;
        list.appendChild(item);
    });
}

function exportHistoryCSV() {
    let csv = "\uFEFF학생이름,구분,금액,사유,일시\n";
    appState.history.forEach(log => {
        csv += `"${log.studentName}","${log.type === 'plus' ? '지급' : '차감'}",${log.amount},"${log.reason}","${log.date}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `학급화폐_거래내역_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==========================================================================
// PAY MODAL LOGIC (BATCH & SINGLE)
// ==========================================================================
let currentPayTargets = [];
let currentPayType = 'add';

function openBatchPayModal(onlySelected = false) {
    if (onlySelected && appState.selectedStudentIds.length === 0) {
        alert("선택된 학생이 없습니다. 학생 카드의 체크박스를 선택해 주세요.");
        return;
    }

    currentPayTargets = onlySelected ? [...appState.selectedStudentIds] : appState.students.map(s => s.id);
    const summaryText = onlySelected 
        ? `선택된 ${currentPayTargets.length}명 학생에게 작업 수행`
        : `전체 19명 학생 모두에게 작업 수행`;

    document.getElementById('payTargetSummary').innerText = summaryText;
    document.getElementById('payModalTitle').innerHTML = '<i class="fa-solid fa-coins"></i> 화폐 일괄 지급 / 차감';
    openModal('modalPay');
}

function openSinglePayModal(studentId, type) {
    currentPayTargets = [studentId];
    const student = appState.students.find(s => s.id === studentId);
    setPayType(type);

    document.getElementById('payTargetSummary').innerText = `대상 학생: ${student ? student.name : ''}`;
    document.getElementById('payModalTitle').innerHTML = `<i class="fa-solid fa-coins"></i> ${student ? student.name : ''} 학생 화폐 ${type === 'add' ? '지급' : '차감'}`;
    openModal('modalPay');
}

function setPayType(type) {
    currentPayType = type;
    const addBtn = document.getElementById('payTypeAdd');
    const subBtn = document.getElementById('payTypeSubtract');
    if (type === 'add') {
        addBtn.classList.add('active');
        subBtn.classList.remove('active');
    } else {
        subBtn.classList.add('active');
        addBtn.classList.remove('active');
    }
}

function setPayAmount(amt) {
    document.getElementById('payAmountInput').value = amt;
}

function executePayAction() {
    const amount = parseInt(document.getElementById('payAmountInput').value, 10);
    const reason = document.getElementById('payReasonInput').value.trim() || (currentPayType === 'add' ? '학급 활동 포상' : '학급 규칙 이행');

    if (isNaN(amount) || amount <= 0) {
        alert("올바른 금액을 입력하세요!");
        return;
    }

    currentPayTargets.forEach(id => {
        const student = appState.students.find(s => s.id === id);
        if (student) {
            if (currentPayType === 'add') {
                student.balance += amount;
                addHistoryRecord(student.id, student.name, 'plus', amount, reason);
            } else {
                student.balance = Math.max(0, student.balance - amount);
                addHistoryRecord(student.id, student.name, 'minus', amount, reason);
            }
        }
    });

    saveData();
    closeModal('modalPay');
    renderAll();
    showToast(`💰 ${currentPayTargets.length}명에게 화폐 ${currentPayType === 'add' ? '지급' : '차감'}이 완료되었습니다!`);
}

// RESET UTILITIES
function resetAllTaskChecks() {
    if (confirm("모든 학생의 오늘 1인 1역 체크 상태를 초기화하시겠습니까?")) {
        appState.students.forEach(st => {
            if (st.tasks) st.tasks.forEach(t => t.completed = false);
        });
        saveData();
        renderAll();
        showToast("🔄 1인 1역 일일 체크가 리셋되었습니다.");
    }
}

function resetAllDataConfirmation() {
    if (confirm("⚠️ 경고: 모든 데이터(학생 잔액, 1인 1역, 거래 내역 등)가 초기 상태로 리셋됩니다. 계속하시겠습니까?")) {
        localStorage.removeItem(STORAGE_KEY);
        seedInitialData();
        renderAll();
        showToast("🗑️ 모든 데이터가 초기화되었습니다.");
    }
}

// HELPER: ADD HISTORY
function addHistoryRecord(studentId, studentName, type, amount, reason) {
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    
    appState.history.push({
        id: Date.now() + Math.floor(Math.random()*1000),
        studentId,
        studentName,
        type,
        amount,
        reason,
        date: dateStr
    });
}

// MODAL CONTROLS
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// TOAST NOTIFICATIONS
function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
