const questions = [
  // === Topic 1: Cardiovascular Responses to Exercise (12 questions) ===
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 1,
    q: "What is the formula for cardiac output (CO)?",
    th: "สูตรของปริมาตรเลือดที่ออกจากหัวใจใน 1 นาที (CO) คืออะไร?",
    options: ["CO = HR x SV", "CO = SBP x DBP", "CO = EDV - ESV", "CO = VO2 x HR"],
    answer: 0,
    hint: "It involves heart rate and how much blood is pumped per beat.",
    explain: "Cardiac output equals heart rate multiplied by stroke volume (CO = HR x SV). At rest, CO is approximately 5 L/min and can increase to 20-30 L/min during exercise.",
    explainTh: "ปริมาตรเลือดที่ออกจากหัวใจใน 1 นาที = อัตราการเต้นของหัวใจ x ปริมาตรเลือดที่บีบออกต่อครั้ง (CO = HR x SV) ขณะพัก CO ประมาณ 5 ลิตร/นาที และเพิ่มได้ถึง 20-30 ลิตร/นาทีขณะออกกำลังกาย"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 1,
    q: "Which component of the cardiac cycle represents the relaxation phase?",
    th: "ส่วนใดของรอบการเต้นของหัวใจเป็นระยะคลายตัว?",
    options: ["Diastole", "Systole", "Ejection", "Isovolumetric contraction"],
    answer: 0,
    hint: "Think about when the heart fills with blood.",
    explain: "Diastole is the relaxation phase when the heart chambers fill with blood. Systole is the contraction phase when blood is ejected. One complete cardiac cycle = one systole + one diastole.",
    explainTh: "ไดแอสโทลี (diastole) คือระยะคลายตัวที่หัวใจเติมเลือด ส่วนซิสโทลี (systole) คือระยะบีบตัว รอบการเต้นของหัวใจ 1 รอบ = การบีบตัว 1 ครั้ง + การคลายตัว 1 ครั้ง"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "What is VO2max?",
    th: "VO2max คืออะไร?",
    options: [
      "The maximum rate of oxygen consumption during maximal exercise",
      "The resting oxygen consumption rate",
      "The oxygen saturation level in arterial blood",
      "The maximum heart rate achievable during exercise"
    ],
    answer: 0,
    hint: "It measures the body's peak capacity to use oxygen.",
    explain: "VO2max is the maximum rate of oxygen consumption the body can achieve during maximal exercise. It reflects the combined capacity of the cardiovascular, respiratory, and muscular systems and is a key indicator of cardiorespiratory fitness.",
    explainTh: "VO2max คือปริมาณออกซิเจนสูงสุดที่ร่างกายใช้ได้ใน 1 นาทีขณะออกกำลังกายสูงสุด สะท้อนความสามารถของระบบหัวใจ ปอด และกล้ามเนื้อ เป็นตัวชี้วัดสมรรถภาพของระบบหัวใจและหลอดเลือด"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "During dynamic exercise, what happens to systolic blood pressure (SBP)?",
    th: "ขณะออกกำลังกายแบบ dynamic ความดันซิสโทลิก (SBP) เปลี่ยนแปลงอย่างไร?",
    options: [
      "SBP increases proportionally with exercise intensity",
      "SBP decreases significantly",
      "SBP remains unchanged",
      "SBP increases only at low intensity then drops"
    ],
    answer: 0,
    hint: "The heart pumps harder to supply more blood to working muscles.",
    explain: "During dynamic exercise, SBP increases proportionally with exercise intensity, potentially reaching 200 mmHg during vigorous exercise. DBP changes minimally; a DBP increase of 15 mmHg or more during exercise is considered abnormal.",
    explainTh: "ขณะออกกำลังกายแบบ dynamic ค่า SBP จะเพิ่มตามความหนักของงาน อาจสูงถึง 200 mmHg ขณะออกกำลังกายหนัก ส่วน DBP เปลี่ยนแปลงน้อยมาก หาก DBP เพิ่มขึ้น 15 mmHg หรือมากกว่าถือว่าผิดปกติ"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "What is the Frank-Starling law of the heart?",
    th: "กฎของ Frank-Starling คืออะไร?",
    options: [
      "Greater venous return stretches the myocardium, increasing contraction force and stroke volume",
      "Heart rate increases proportionally with blood pressure",
      "Cardiac output remains constant regardless of venous return",
      "Sympathetic stimulation is the only mechanism to increase stroke volume"
    ],
    answer: 0,
    hint: "It relates how much the heart muscle is stretched to how forcefully it contracts.",
    explain: "The Frank-Starling law states that increased venous return stretches the myocardium (increased preload/EDV), which results in a more forceful contraction and increased stroke volume. This is an intrinsic mechanism for increasing cardiac output during exercise.",
    explainTh: "กฎ Frank-Starling ระบุว่าเมื่อเลือดไหลกลับเข้าหัวใจมากขึ้น กล้ามเนื้อหัวใจถูกยืดมากขึ้น (เพิ่ม preload/EDV) ส่งผลให้หดตัวแรงขึ้นและ stroke volume เพิ่มขึ้น เป็นกลไกภายในสำหรับเพิ่ม cardiac output ขณะออกกำลังกาย"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "What is 'cardiovascular drift'?",
    th: "'Cardiovascular drift' คืออะไร?",
    options: [
      "A progressive increase in HR during prolonged steady-state exercise despite constant intensity",
      "A sudden drop in blood pressure at the start of exercise",
      "The decrease in HR that occurs with endurance training",
      "The redistribution of blood flow from muscles to the skin"
    ],
    answer: 0,
    hint: "It happens during long exercise sessions even when intensity stays the same.",
    explain: "Cardiovascular drift is the gradual increase in heart rate during prolonged steady-state exercise at constant intensity. It occurs because rising core body temperature causes blood to be redirected to the skin for cooling, reducing venous return and stroke volume, so HR must increase to maintain cardiac output.",
    explainTh: "Cardiovascular drift คือการที่ HR เพิ่มขึ้นเรื่อยๆ ระหว่างออกกำลังกายต่อเนื่องที่ความหนักคงที่ เกิดจากอุณหภูมิร่างกายสูงขึ้น เลือดถูกส่งไปผิวหนังเพื่อระบายความร้อน ทำให้ venous return และ SV ลดลง หัวใจจึงต้องเต้นเร็วขึ้น"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 1,
    q: "What is ejection fraction (EF)?",
    th: "Ejection fraction (EF) คืออะไร?",
    options: [
      "The percentage of end-diastolic volume ejected from the ventricle per beat",
      "The total volume of blood in the heart at rest",
      "The ratio of heart rate to stroke volume",
      "The amount of blood remaining after systole"
    ],
    answer: 0,
    hint: "Normal value is 55-70%. It measures pumping efficiency.",
    explain: "Ejection fraction is the percentage of blood in the left ventricle that is pumped out with each heartbeat (EF = SV/EDV x 100%). Normal EF is approximately 55-70%. It is a key measure of cardiac pumping efficiency.",
    explainTh: "Ejection fraction คืออัตราส่วนเปอร์เซ็นต์ของเลือดที่ถูกบีบออกจากหัวใจห้องล่างซ้ายในแต่ละครั้ง (EF = SV/EDV x 100%) ค่าปกติประมาณ 55-70% เป็นตัววัดประสิทธิภาพการบีบตัวของหัวใจ"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "Which type of exercise classification is based on muscle contraction with constant joint angular velocity?",
    th: "การออกกำลังกายประเภทใดจำแนกตามการหดตัวของกล้ามเนื้อที่ความเร็วเชิงมุมของข้อต่อคงที่?",
    options: ["Isokinetic exercise", "Isometric exercise", "Isotonic exercise", "Aerobic exercise"],
    answer: 0,
    hint: "The speed of movement stays the same throughout the range of motion.",
    explain: "Isokinetic exercise involves muscle contraction with a constant velocity of joint movement throughout the range of motion, with maximal muscle tension generated at all points. Isometric = no length change; Isotonic = length changes (concentric/eccentric).",
    explainTh: "Isokinetic exercise คือการออกกำลังกายที่ความเร็วในการเคลื่อนไหวของข้อต่อคงที่ตลอดช่วงการเคลื่อนไหว กล้ามเนื้อตึงสูงสุดตลอดเวลา Isometric = ความยาวไม่เปลี่ยน; Isotonic = ความยาวเปลี่ยน (concentric/eccentric)"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 3,
    q: "Why does stroke volume at rest differ between supine and upright positions?",
    th: "เหตุใด stroke volume ขณะพักจึงแตกต่างกันระหว่างท่านอนหงายกับท่ายืน?",
    options: [
      "Supine position increases venous return due to reduced gravitational pooling, increasing EDV and SV",
      "Upright position increases SV because the heart works harder against gravity",
      "There is no difference in SV between positions",
      "Supine SV is lower because the diaphragm compresses the heart"
    ],
    answer: 0,
    hint: "Gravity affects how much blood returns to the heart.",
    explain: "In supine position, gravity does not cause venous blood pooling in the legs, so more blood returns to the heart (increased venous return/EDV), resulting in higher resting SV than upright. However, during maximal exercise, SV increase is greater in upright (20-40% supine vs 100% upright) because there is more room for improvement.",
    explainTh: "ท่านอนหงายไม่มีแรงโน้มถ่วงดึงเลือดไปขา เลือดจึงไหลกลับเข้าหัวใจมากขึ้น (เพิ่ม venous return/EDV) ทำให้ SV ขณะพักสูงกว่าท่ายืน แต่ขณะออกกำลังกายสูงสุด SV เพิ่มในท่ายืนมากกว่า (20-40% ท่านอน vs 100% ท่ายืน)"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 2,
    q: "Heart rate is regulated by which two divisions of the autonomic nervous system?",
    th: "อัตราการเต้นของหัวใจถูกควบคุมโดยระบบประสาทอัตโนมัติ 2 แขนงใด?",
    options: [
      "Sympathetic (increases HR via catecholamines) and Parasympathetic (decreases HR via vagus nerve)",
      "Somatic and Enteric nervous systems",
      "Central and Peripheral nervous systems",
      "Motor and Sensory nervous systems"
    ],
    answer: 0,
    hint: "One speeds the heart up, the other slows it down via the vagus nerve.",
    explain: "Sympathetic stimulation releases catecholamines (epinephrine/norepinephrine) causing tachycardia. Parasympathetic stimulation via the vagus nerve releases acetylcholine causing bradycardia. Exercise increases sympathetic and decreases parasympathetic activity.",
    explainTh: "ระบบซิมพาเทติกหลั่งแคทีโคลามีน (อะดรีนาลิน/นอร์อะดรีนาลิน) ทำให้หัวใจเต้นเร็ว ระบบพาราซิมพาเทติกผ่าน vagus nerve หลั่งอะเซทิลโคลีนทำให้หัวใจเต้นช้า การออกกำลังกายเพิ่มซิมพาเทติกและลดพาราซิมพาเทติก"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 1,
    q: "Which formula estimates maximum heart rate based on age?",
    th: "สูตรใดใช้ประมาณอัตราการเต้นหัวใจสูงสุดจากอายุ?",
    options: ["220 - age", "200 + age", "180 - (age/2)", "250 - age"],
    answer: 0,
    hint: "A simple subtraction from a fixed number.",
    explain: "The estimated maximum heart rate is calculated as 220 minus age. For example, a 20-year-old would have an estimated HRmax of 200 bpm. This value decreases with age.",
    explainTh: "อัตราการเต้นหัวใจสูงสุดโดยประมาณ = 220 - อายุ เช่น คนอายุ 20 ปี มี HRmax ประมาณ 200 ครั้ง/นาที ค่านี้ลดลงตามอายุ"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    diff: 3,
    q: "During isometric (static) exercise, heart rate increases primarily due to:",
    th: "ขณะออกกำลังกายแบบ isometric (static) อัตราการเต้นหัวใจเพิ่มขึ้นส่วนใหญ่จาก:",
    options: [
      "Mechanisms other than increased VO2 (e.g., pressor reflex from muscle contraction)",
      "Increased venous return from muscle pumping",
      "Increased oxygen consumption proportional to workload",
      "Decreased parasympathetic activity only"
    ],
    answer: 0,
    hint: "Unlike dynamic exercise, it's not primarily driven by oxygen demand.",
    explain: "During isometric exercise, HR increases during muscle contraction but not proportionally to VO2 as in dynamic exercise. The increase is driven primarily by the exercise pressor reflex (mechanoreceptor and metaboreceptor activation in contracting muscles) and central command, not by the metabolic demand for oxygen.",
    explainTh: "ขณะออกกำลังกายแบบ isometric HR เพิ่มขึ้นช่วง muscle contraction แต่ไม่ตาม VO2 เหมือน dynamic exercise การเพิ่มเกิดจาก exercise pressor reflex (ตัวรับแรงดันและเมตาบอไลต์ในกล้ามเนื้อ) และ central command ไม่ใช่จากความต้องการออกซิเจน"
  },

  // === Topic 2: Musculoskeletal Exercise Physiology (12 questions) ===
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 1,
    q: "What is the functional contractile unit of skeletal muscle?",
    th: "หน่วยหดตัวที่ทำงานได้ของกล้ามเนื้อโครงร่างคืออะไร?",
    options: ["Sarcomere", "Myofibril", "Fascicle", "Motor unit"],
    answer: 0,
    hint: "It extends from Z-line to Z-line.",
    explain: "The sarcomere is the functional contractile unit of muscle, extending from one Z-line to the next. It contains overlapping actin (thin) and myosin (thick) filaments that slide over each other during contraction.",
    explainTh: "ซาร์โคเมียร์คือหน่วยหดตัวที่ทำงานได้ของกล้ามเนื้อ อยู่ระหว่าง Z-line ถึง Z-line ประกอบด้วยเส้นใยแอคติน (บาง) และไมโอซิน (หนา) ที่เลื่อนทับกันขณะหดตัว"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "In the sliding filament theory, what role does calcium (Ca2+) play in muscle contraction?",
    th: "ในทฤษฎี sliding filament แคลเซียม (Ca2+) มีบทบาทอย่างไรในการหดตัวของกล้ามเนื้อ?",
    options: [
      "Ca2+ binds to troponin C, causing tropomyosin to shift and expose active sites on actin",
      "Ca2+ directly powers the myosin cross-bridge movement",
      "Ca2+ breaks down ATP to provide energy for contraction",
      "Ca2+ binds to myosin to initiate the power stroke"
    ],
    answer: 0,
    hint: "It involves the regulatory proteins on the thin filament.",
    explain: "Ca2+ is released from the sarcoplasmic reticulum and binds to troponin C on the actin filament. This causes tropomyosin to shift, exposing the active sites on actin so that myosin cross-bridges can attach and generate force.",
    explainTh: "Ca2+ ถูกปล่อยจาก sarcoplasmic reticulum และจับกับ troponin C บนเส้นใยแอคติน ทำให้ tropomyosin เลื่อนเปิด active site บนแอคตินให้ cross-bridge ของไมโอซินยึดจับและสร้างแรงได้"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "Which muscle fiber type has the highest resistance to fatigue and is suited for endurance activities?",
    th: "เส้นใยกล้ามเนื้อชนิดใดทนต่อความล้ามากที่สุดและเหมาะกับกิจกรรมแบบทนทาน?",
    options: ["Type I (slow-oxidative)", "Type IIa (fast-oxidative glycolytic)", "Type IIx (fast-glycolytic)", "Type IIb"],
    answer: 0,
    hint: "They are also called slow-twitch fibers with high mitochondrial volume.",
    explain: "Type I fibers (slow-oxidative/slow-twitch) have high mitochondrial volume, more capillaries, and high resistance to fatigue. They are more efficient but produce lower force than type II fibers. They are ideal for sustained, endurance activities.",
    explainTh: "เส้นใยชนิด I (slow-oxidative/slow-twitch) มีไมโทคอนเดรียมาก หลอดเลือดฝอยมาก ทนต่อความล้าสูง มีประสิทธิภาพสูงแต่สร้างแรงน้อยกว่าชนิด II เหมาะสำหรับกิจกรรมทนทานต่อเนื่อง"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 1,
    q: "Which three energy systems does the body use to produce ATP for muscle contraction?",
    th: "ร่างกายใช้ระบบพลังงาน 3 ระบบใดในการผลิต ATP สำหรับการหดตัวของกล้ามเนื้อ?",
    options: [
      "Phosphocreatine (PC), Glycolysis, Oxidative phosphorylation",
      "Lipolysis, Gluconeogenesis, Beta-oxidation",
      "Krebs cycle, Electron transport, Photosynthesis",
      "Fermentation, Chemiosmosis, Substrate cycling"
    ],
    answer: 0,
    hint: "Two are anaerobic and one is aerobic.",
    explain: "The three energy systems are: (1) Phosphocreatine (PC) breakdown - immediate, anaerobic; (2) Glycolysis - anaerobic degradation of glucose/glycogen; (3) Oxidative phosphorylation - aerobic pathway using oxygen. They activate together at the start of contraction but dominate at different exercise intensities/durations.",
    explainTh: "ระบบพลังงาน 3 ระบบ: (1) สลายฟอสโฟครีเอทีน (PC) - ทันที ไม่ใช้ออกซิเจน (2) ไกลโคลิซิส - สลายกลูโคส/ไกลโคเจนแบบไม่ใช้ออกซิเจน (3) ออกซิเดทีฟฟอสโฟรีเลชัน - ใช้ออกซิเจน ทั้ง 3 ระบบเริ่มทำงานพร้อมกันแต่มีบทบาทหลักต่างกันตามความหนักและระยะเวลา"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "What is the connective tissue covering that surrounds each individual muscle fiber?",
    th: "เนื้อเยื่อเกี่ยวพันที่ห่อหุ้มเส้นใยกล้ามเนื้อแต่ละเส้นคืออะไร?",
    options: ["Endomysium", "Perimysium", "Epimysium", "Sarcolemma"],
    answer: 0,
    hint: "Endo- means 'within', peri- means 'around a bundle', epi- means 'on top of'.",
    explain: "Endomysium covers each individual muscle fiber. Perimysium covers each fascicle (bundle of fibers). Epimysium covers the entire muscle. These connective tissue layers organize skeletal muscle structure.",
    explainTh: "เอนโดไมเซียม (endomysium) ห่อหุ้มเส้นใยกล้ามเนื้อแต่ละเส้น เพอริไมเซียม (perimysium) ห่อหุ้มแต่ละมัดเส้นใย (fascicle) เอพิไมเซียม (epimysium) ห่อหุ้มกล้ามเนื้อทั้งมัด"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 3,
    q: "Which protein on the thin filament inhibits actin-myosin binding at rest by blocking active sites?",
    th: "โปรตีนใดบนเส้นใยบางที่ยับยั้งการจับกันของแอคตินและไมโอซินขณะพักโดยปิดกั้น active site?",
    options: ["Tropomyosin", "Troponin C", "Troponin T", "Myosin ATPase"],
    answer: 0,
    hint: "It physically covers the binding sites and is moved aside when calcium binds to troponin.",
    explain: "Tropomyosin physically blocks the active sites on actin, preventing myosin from binding at rest. When Ca2+ binds to troponin C, the troponin complex shifts tropomyosin away, exposing the active sites for cross-bridge formation. Troponin I inhibits binding, Troponin T binds troponin to tropomyosin, Troponin C binds calcium.",
    explainTh: "โทรโปไมโอซินปิดกั้น active site บนแอคตินไม่ให้ไมโอซินจับขณะพัก เมื่อ Ca2+ จับกับ troponin C โทรโปนินจะเลื่อนโทรโปไมโอซินออก เปิด active site ให้เกิด cross-bridge Troponin I ยับยั้งการจับ, Troponin T ยึดโทรโปนินกับโทรโปไมโอซิน, Troponin C จับแคลเซียม"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "What is the primary adaptation of skeletal muscle to endurance (aerobic) training?",
    th: "การปรับตัวหลักของกล้ามเนื้อโครงร่างต่อการฝึกแบบทนทาน (แอโรบิก) คืออะไร?",
    options: [
      "Increased capillary density and mitochondrial volume in muscle fibers",
      "Muscle fiber hypertrophy and increased myofilaments",
      "Increased phosphocreatine stores",
      "Conversion of type I fibers to type IIx fibers"
    ],
    answer: 0,
    hint: "Think about improving oxygen delivery and utilization.",
    explain: "Endurance training increases capillary density around muscle fibers, mitochondrial volume, myoglobin content, and shifts fibers from fast to slow type. These adaptations improve oxygen delivery and aerobic metabolism efficiency.",
    explainTh: "การฝึกแบบทนทานเพิ่มความหนาแน่นของหลอดเลือดฝอยรอบเส้นใยกล้ามเนื้อ ปริมาตรไมโทคอนเดรีย ไมโอโกลบิน และเปลี่ยนเส้นใยจากเร็วเป็นช้า ช่วยเพิ่มการส่งออกซิเจนและประสิทธิภาพเมตาบอลิซึมแบบใช้ออกซิเจน"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "Resistance training primarily increases muscle size through which mechanism?",
    th: "การฝึกด้วยแรงต้านทานเพิ่มขนาดกล้ามเนื้อส่วนใหญ่ผ่านกลไกใด?",
    options: [
      "Hypertrophy (increase in size of existing fibers)",
      "Hyperplasia (increase in number of fibers)",
      "Increased mitochondrial density",
      "Increased capillary density"
    ],
    answer: 0,
    hint: "90-95% of muscle size increase comes from this mechanism.",
    explain: "Most (90-95%) of the increase in muscle size from resistance training is due to hypertrophy (increased fiber cross-sectional area from more myofibrillar proteins like actin and myosin), not hyperplasia. Weight training causes greater hypertrophy in type II fibers.",
    explainTh: "การเพิ่มขนาดกล้ามเนื้อจากการฝึกด้วยแรงต้านทาน 90-95% เกิดจากไฮเปอร์โทรฟี (เพิ่มพื้นที่หน้าตัดเส้นใยจากโปรตีนไมโอไฟบริลลาร์มากขึ้น เช่น แอคตินและไมโอซิน) ไม่ใช่ไฮเปอร์เพลเซีย การฝึกด้วยน้ำหนักทำให้เส้นใยชนิด II โตมากกว่า"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 2,
    q: "Delayed onset muscle soreness (DOMS) typically appears how long after exercise?",
    th: "อาการปวดกล้ามเนื้อหลังออกกำลังกาย (DOMS) มักเกิดขึ้นหลังออกกำลังกายนานเท่าไร?",
    options: ["24-48 hours", "Immediately", "5-10 minutes", "7 days"],
    answer: 0,
    hint: "It's called 'delayed' for a reason.",
    explain: "DOMS appears 24-48 hours after strenuous or unaccustomed exercise. It is caused by micro-trauma from excessive mechanical force on muscle and connective tissue, leading to protease activation, inflammation, and muscle edema. Eccentric exercise increases DOMS risk compared to concentric exercise.",
    explainTh: "DOMS เกิดขึ้น 24-48 ชั่วโมงหลังออกกำลังกายหนักหรือไม่คุ้นเคย เกิดจากการบาดเจ็บระดับจุลภาคจากแรงกลเกินไปในกล้ามเนื้อและเนื้อเยื่อเกี่ยวพัน ทำให้เกิดการกระตุ้น protease อักเสบ และบวม eccentric exercise เพิ่มความเสี่ยง DOMS มากกว่า concentric"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 3,
    q: "In early-phase resistance training (8-20 weeks), strength gains are primarily due to:",
    th: "ในช่วงต้นของการฝึกด้วยแรงต้านทาน (8-20 สัปดาห์) การเพิ่มความแข็งแรงเกิดจาก:",
    options: [
      "Neural adaptations (improved motor unit recruitment, synchronization, and coordination)",
      "Muscle hypertrophy",
      "Increased glycogen stores",
      "Tendon and ligament strengthening"
    ],
    answer: 0,
    hint: "The nervous system adapts before the muscle gets visibly bigger.",
    explain: "In short-duration resistance training (8-20 weeks), neural adaptations play the major role: improved motor unit recruitment, altered firing rates, enhanced motor unit synchronization, and removal of neural inhibition. Long-term programs shift to muscle hypertrophy as the primary mechanism.",
    explainTh: "ในการฝึกด้วยแรงต้านทานระยะสั้น (8-20 สัปดาห์) การปรับตัวทางระบบประสาทมีบทบาทหลัก: การรับสมัคร motor unit ดีขึ้น อัตราการยิงสัญญาณเปลี่ยน motor unit ทำงานประสานกันดีขึ้น และลดการยับยั้งทางประสาท ระยะยาวจึงเปลี่ยนเป็นไฮเปอร์โทรฟี"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 1,
    q: "Which neurotransmitter is released at the neuromuscular junction to initiate muscle contraction?",
    th: "สารสื่อประสาทใดถูกปล่อยที่รอยต่อประสาท-กล้ามเนื้อเพื่อเริ่มการหดตัว?",
    options: ["Acetylcholine (ACh)", "Norepinephrine", "Dopamine", "Serotonin"],
    answer: 0,
    hint: "It binds to receptors on the motor end plate.",
    explain: "Acetylcholine (ACh) is released from the motor neuron at the neuromuscular junction, binds to ACh receptors on the muscle fiber's motor end plate, and generates an end-plate potential (EPP) that triggers an action potential along the sarcolemma, initiating contraction.",
    explainTh: "อะเซทิลโคลีน (ACh) ถูกปล่อยจากเซลล์ประสาทสั่งการที่รอยต่อประสาท-กล้ามเนื้อ จับกับตัวรับ ACh บน motor end plate กระตุ้นให้เกิดศักย์ไฟฟ้าตามแนว sarcolemma เริ่มกระบวนการหดตัว"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    diff: 3,
    q: "Exercise-associated muscle cramps are now understood to be primarily caused by:",
    th: "ตะคริวจากการออกกำลังกายปัจจุบันเข้าใจว่าเกิดจากสาเหตุหลักใด?",
    options: [
      "Changes in the central nervous system (increased motor neuron excitability)",
      "Dehydration and electrolyte imbalance",
      "Lactic acid accumulation in muscle",
      "Muscle fiber tearing"
    ],
    answer: 0,
    hint: "Recent evidence shifted away from the dehydration theory.",
    explain: "Current evidence suggests exercise-associated muscle cramps are primarily due to changes in the CNS, specifically increased motor neuron excitability from high excitatory input and/or lack of inhibitory input. Prolonged exercise causes muscle fatigue that can lead to dysfunction of muscle spindles and Golgi tendon organs. They are NOT primarily caused by dehydration or electrolyte imbalance.",
    explainTh: "หลักฐานปัจจุบันแสดงว่าตะคริวจากการออกกำลังกายเกิดจากการเปลี่ยนแปลงในระบบประสาทส่วนกลาง โดยเฉพาะ motor neuron ถูกกระตุ้นมากเกินจาก excitatory input สูงและ/หรือ inhibitory input ลดลง กล้ามเนื้อล้าทำให้ muscle spindle และ Golgi tendon organ ทำงานผิดปกติ ไม่ได้เกิดจากขาดน้ำหรือเกลือแร่เป็นหลัก"
  },

  // === Topic 3: Hormonal & Endocrine Responses to Exercise (10 questions) ===
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 1,
    q: "Which gland is considered the 'master gland' that controls other endocrine glands?",
    th: "ต่อมใดถูกเรียกว่า 'ต่อมหลัก' ที่ควบคุมต่อมไร้ท่ออื่นๆ?",
    options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
    answer: 0,
    hint: "It sits at the base of the brain.",
    explain: "The pituitary gland (ต่อมใต้สมอง) is the master gland that controls other endocrine glands. It secretes hormones including growth hormone (GH) and ADH, and regulates thyroid, adrenal, and gonadal function.",
    explainTh: "ต่อมใต้สมอง (pituitary gland) เป็นต่อมหลักที่ควบคุมต่อมไร้ท่ออื่นๆ หลั่งฮอร์โมนหลายชนิดรวมถึง growth hormone (GH) และ ADH ควบคุมการทำงานของต่อมไทรอยด์ ต่อมหมวกไต และต่อมเพศ"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "During exercise, what happens to catecholamine (epinephrine and norepinephrine) levels?",
    th: "ขณะออกกำลังกาย ระดับแคทีโคลามีน (อะดรีนาลินและนอร์อะดรีนาลิน) เปลี่ยนแปลงอย่างไร?",
    options: [
      "They increase, stimulating glycogenolysis and lipolysis for energy production",
      "They decrease to conserve energy",
      "They remain unchanged during moderate exercise",
      "They increase only during anaerobic exercise"
    ],
    answer: 0,
    hint: "They are the 'fight or flight' hormones released by the adrenal glands.",
    explain: "Catecholamines (epinephrine/norepinephrine) from the adrenal glands increase during exercise. They stimulate glycogen breakdown (glycogenolysis) and fat breakdown (lipolysis) to mobilize substrates for ATP production, increase heart rate, and redistribute blood flow to working muscles.",
    explainTh: "แคทีโคลามีน (อะดรีนาลิน/นอร์อะดรีนาลิน) จากต่อมหมวกไตเพิ่มขึ้นขณะออกกำลังกาย กระตุ้นการสลายไกลโคเจนและไขมันเพื่อระดมเชื้อเพลิงสำหรับผลิต ATP เพิ่มอัตราการเต้นหัวใจ และกระจายเลือดไปกล้ามเนื้อที่ทำงาน"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "How does insulin respond during exercise?",
    th: "อินซูลินตอบสนองอย่างไรขณะออกกำลังกาย?",
    options: [
      "Insulin levels decrease during exercise",
      "Insulin levels increase significantly",
      "Insulin levels remain constant",
      "Insulin is not involved in exercise metabolism"
    ],
    answer: 0,
    hint: "The body needs to mobilize glucose from storage, not store it.",
    explain: "Insulin levels decrease during exercise. Since insulin promotes glucose storage, decreasing it allows glucose to be mobilized from glycogen stores and released into the blood for energy. Simultaneously, glucagon increases to further promote glucose release from the liver.",
    explainTh: "ระดับอินซูลินลดลงขณะออกกำลังกาย เนื่องจากอินซูลินส่งเสริมการเก็บกลูโคส การลดลงช่วยให้กลูโคสถูกระดมจากคลังไกลโคเจนออกสู่กระแสเลือดเพื่อใช้เป็นพลังงาน ขณะเดียวกันกลูคากอนเพิ่มขึ้นเพื่อกระตุ้นการปล่อยกลูโคสจากตับ"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "What is the primary role of cortisol during prolonged exercise?",
    th: "บทบาทหลักของคอร์ติซอลขณะออกกำลังกายเป็นเวลานานคืออะไร?",
    options: [
      "Maintaining blood glucose levels by stimulating gluconeogenesis and protein breakdown",
      "Directly increasing muscle contraction force",
      "Decreasing heart rate to prevent cardiac fatigue",
      "Promoting fat storage for future energy needs"
    ],
    answer: 0,
    hint: "It's a stress hormone that helps maintain fuel supply.",
    explain: "Cortisol increases during prolonged exercise and plays a key role in maintaining blood glucose by stimulating gluconeogenesis (glucose production from non-carbohydrate sources) and promoting protein and fat breakdown. It ensures substrate availability for energy production during extended exercise.",
    explainTh: "คอร์ติซอลเพิ่มขึ้นขณะออกกำลังกายเป็นเวลานาน มีบทบาทสำคัญในการรักษาระดับน้ำตาลในเลือดโดยกระตุ้นกลูโคนีโอเจเนซิส (สร้างกลูโคสจากสารที่ไม่ใช่คาร์โบไฮเดรต) และส่งเสริมการสลายโปรตีนและไขมัน"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "Growth hormone (GH) during exercise primarily helps to:",
    th: "Growth hormone (GH) ขณะออกกำลังกายช่วยในเรื่องใดเป็นหลัก?",
    options: [
      "Maintain plasma glucose levels and promote fat utilization",
      "Increase bone density immediately",
      "Decrease protein synthesis",
      "Reduce blood pressure"
    ],
    answer: 0,
    hint: "It's involved in maintaining blood sugar and using fat as fuel.",
    explain: "Growth hormone increases during exercise and helps maintain plasma glucose levels by promoting fat utilization (lipolysis) as an alternative fuel source, sparing glucose. It also stimulates protein synthesis for muscle repair and growth during recovery.",
    explainTh: "GH เพิ่มขึ้นขณะออกกำลังกายช่วยรักษาระดับกลูโคสในเลือดโดยส่งเสริมการใช้ไขมัน (lipolysis) เป็นเชื้อเพลิงทดแทน ประหยัดกลูโคส ยังกระตุ้นการสังเคราะห์โปรตีนเพื่อซ่อมแซมและสร้างกล้ามเนื้อช่วงพักฟื้น"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 1,
    q: "Which organ produces both insulin and glucagon?",
    th: "อวัยวะใดผลิตทั้งอินซูลินและกลูคากอน?",
    options: ["Pancreas", "Liver", "Adrenal gland", "Pituitary gland"],
    answer: 0,
    hint: "It's located behind the stomach.",
    explain: "The pancreas produces insulin (from beta cells) which lowers blood glucose, and glucagon (from alpha cells) which raises blood glucose. During exercise, insulin decreases and glucagon increases to maintain blood glucose for energy.",
    explainTh: "ตับอ่อน (pancreas) ผลิตอินซูลิน (จากเบต้าเซลล์) ที่ลดน้ำตาลในเลือด และกลูคากอน (จากแอลฟาเซลล์) ที่เพิ่มน้ำตาลในเลือด ขณะออกกำลังกาย อินซูลินลดลงและกลูคากอนเพิ่มขึ้นเพื่อรักษาน้ำตาลในเลือด"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 3,
    q: "The primary function of the sympathetic nervous system (SNS) during exercise includes all EXCEPT:",
    th: "หน้าที่หลักของระบบประสาทซิมพาเทติก (SNS) ขณะออกกำลังกายรวมทุกข้อยกเว้น:",
    options: [
      "Stimulating digestion and nutrient absorption",
      "Enhancing cardiovascular function",
      "Controlling blood flow distribution and blood pressure",
      "Increasing fuel mobilization for ATP production"
    ],
    answer: 0,
    hint: "The SNS prepares the body for 'fight or flight', not 'rest and digest'.",
    explain: "During exercise, the SNS enhances cardiovascular function, controls blood flow distribution, maintains blood pressure, regulates temperature balance, and increases fuel mobilization. Digestion is INHIBITED during exercise (parasympathetic function), not stimulated by the SNS.",
    explainTh: "ขณะออกกำลังกาย SNS เพิ่มประสิทธิภาพหัวใจ ควบคุมการกระจายเลือด รักษาความดัน ควบคุมอุณหภูมิ และเพิ่มการระดมเชื้อเพลิง การย่อยอาหารถูกยับยั้งขณะออกกำลังกาย (เป็นหน้าที่พาราซิมพาเทติก) ไม่ได้ถูกกระตุ้นโดย SNS"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "What is the primary purpose of the endocrine system?",
    th: "จุดประสงค์หลักของระบบต่อมไร้ท่อคืออะไร?",
    options: [
      "To maintain homeostasis through hormonal communication",
      "To generate action potentials for muscle contraction",
      "To produce red blood cells",
      "To filter waste products from the blood"
    ],
    answer: 0,
    hint: "Hormones are chemical messengers that keep the body in balance.",
    explain: "The endocrine system maintains homeostasis (internal balance) through hormonal communication. Endocrine glands secrete hormones into the bloodstream that act on target cells to regulate metabolism, growth, fluid balance, and responses to stress including exercise.",
    explainTh: "ระบบต่อมไร้ท่อรักษาสภาวะธำรงดุล (homeostasis) ผ่านการสื่อสารด้วยฮอร์โมน ต่อมไร้ท่อหลั่งฮอร์โมนเข้าสู่กระแสเลือดไปกระทำต่อเซลล์เป้าหมายเพื่อควบคุมเมตาบอลิซึม การเจริญเติบโต สมดุลของเหลว และการตอบสนองต่อความเครียดรวมถึงการออกกำลังกาย"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 3,
    q: "After chronic exercise training, what is the most common hormonal adaptation pattern?",
    th: "หลังฝึกออกกำลังกายเป็นประจำ รูปแบบการปรับตัวของฮอร์โมนที่พบบ่อยที่สุดคืออะไร?",
    options: [
      "Reduced hormonal response to the same exercise intensity",
      "Increased resting hormone levels",
      "No change in hormonal responses",
      "Increased hormonal response to the same exercise intensity"
    ],
    answer: 0,
    hint: "The body becomes more efficient at responding to the same workload.",
    explain: "The most common pattern after training is a reduced hormonal response to the same absolute exercise intensity. Individuals may also develop increased tissue sensitivity to lower hormone levels, achieving the same metabolic effect. Resting hormone levels typically remain unchanged.",
    explainTh: "รูปแบบที่พบบ่อยที่สุดหลังฝึกคือการตอบสนองของฮอร์โมนต่อความหนักเท่าเดิมลดลง บุคคลอาจมีความไวต่อฮอร์โมนระดับต่ำลงมากขึ้น ทำให้เกิดผลเมตาบอลิซึมเท่าเดิม ระดับฮอร์โมนพื้นฐานมักไม่เปลี่ยนแปลง"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    diff: 2,
    q: "Which hormone from the posterior pituitary helps the body conserve water during exercise?",
    th: "ฮอร์โมนใดจาก posterior pituitary ช่วยร่างกายอนุรักษ์น้ำขณะออกกำลังกาย?",
    options: [
      "Antidiuretic hormone (ADH / Vasopressin)",
      "Growth hormone (GH)",
      "Cortisol",
      "Aldosterone"
    ],
    answer: 0,
    hint: "Its name literally means 'anti-urination hormone'.",
    explain: "ADH (antidiuretic hormone/vasopressin) is released from the posterior pituitary when the body is dehydrated. It acts on the kidneys to increase water reabsorption, reducing urine output and helping conserve body water during exercise.",
    explainTh: "ADH (ฮอร์โมนต้านการขับปัสสาวะ/วาโซเพรสซิน) ถูกปล่อยจาก posterior pituitary เมื่อร่างกายขาดน้ำ ออกฤทธิ์ที่ไตเพิ่มการดูดน้ำกลับ ลดปริมาณปัสสาวะ ช่วยอนุรักษ์น้ำในร่างกายขณะออกกำลังกาย"
  },

  // === Topic 4: Thermoregulation (10 questions) ===
  {
    topic: "Physiology: Thermoregulation",
    diff: 1,
    q: "What are the two types of body temperature?",
    th: "อุณหภูมิร่างกายมีกี่ชนิดอะไรบ้าง?",
    options: [
      "Core body temperature and Skin temperature",
      "Internal temperature and External temperature",
      "Arterial temperature and Venous temperature",
      "Oral temperature and Axillary temperature"
    ],
    answer: 0,
    hint: "One is measured inside the body, the other at the surface.",
    explain: "The two types are core body temperature (measured internally, normally maintained at 35-41 degrees C) and skin temperature (measured at the skin surface). The normal difference between core and skin temperature is approximately 4 degrees C. The hypothalamus serves as the thermoregulatory control center.",
    explainTh: "อุณหภูมิร่างกาย 2 ชนิด: อุณหภูมิภายใน (core body temperature วัดภายในร่างกาย ปกติ 35-41 องศา) และอุณหภูมิผิวหนัง (skin temperature) ความแตกต่างปกติประมาณ 4 องศา ไฮโปทาลามัสเป็นศูนย์ควบคุมอุณหภูมิ"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 1,
    q: "Which part of the brain serves as the thermoregulatory control center?",
    th: "สมองส่วนใดทำหน้าที่เป็นศูนย์ควบคุมอุณหภูมิ?",
    options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Cerebral cortex"],
    answer: 0,
    hint: "It's part of the diencephalon and controls many homeostatic functions.",
    explain: "The hypothalamus is the thermoregulatory control center. It receives input from both peripheral thermoreceptors (skin) and central thermoreceptors (spinal cord, abdominal organs, great veins) and coordinates heat production and heat loss mechanisms.",
    explainTh: "ไฮโปทาลามัสเป็นศูนย์ควบคุมอุณหภูมิ รับสัญญาณจากตัวรับอุณหภูมิส่วนปลาย (ผิวหนัง) และส่วนกลาง (ไขสันหลัง อวัยวะช่องท้อง หลอดเลือดใหญ่) แล้วประสานการผลิตและระบายความร้อน"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 2,
    q: "What are the four mechanisms of heat loss from the body?",
    th: "กลไกการระบายความร้อนจากร่างกาย 4 วิธีคืออะไร?",
    options: [
      "Conduction, Convection, Radiation, Evaporation",
      "Shivering, Sweating, Vasodilation, Piloerection",
      "Metabolism, Radiation, Insulation, Ventilation",
      "Diffusion, Osmosis, Filtration, Active transport"
    ],
    answer: 0,
    hint: "Think about direct contact, air movement, electromagnetic waves, and sweat.",
    explain: "The four heat loss mechanisms are: Conduction (direct heat transfer through contact), Convection (heat transfer through air/fluid movement), Radiation (electromagnetic heat emission), and Evaporation (heat loss through sweat vaporization). Evaporation is the most effective mechanism during exercise.",
    explainTh: "กลไกระบายความร้อน 4 วิธี: การนำความร้อน (conduction สัมผัสโดยตรง), การพาความร้อน (convection การเคลื่อนที่ของอากาศ/ของเหลว), การแผ่รังสี (radiation คลื่นแม่เหล็กไฟฟ้า), การระเหย (evaporation เหงื่อระเหย) การระเหยมีประสิทธิภาพสูงสุดขณะออกกำลังกาย"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 2,
    q: "What is the correct order of heat illness severity from mild to life-threatening?",
    th: "ลำดับความรุนแรงของการเจ็บป่วยจากความร้อนจากน้อยไปมากคืออะไร?",
    options: [
      "Heat cramps -> Heat exhaustion -> Heat stroke",
      "Heat stroke -> Heat exhaustion -> Heat cramps",
      "Heat exhaustion -> Heat cramps -> Heat stroke",
      "Heat cramps -> Heat stroke -> Heat exhaustion"
    ],
    answer: 0,
    hint: "Cramps are least severe; stroke is an emergency.",
    explain: "The heat illness spectrum from mild to severe: Heat cramps (muscle spasms from electrolyte loss), Heat exhaustion (heavy sweating, dizziness, hypotension, core temp 38-40 degrees C), Heat stroke (EMERGENCY: core >40-40.5 degrees C, CNS dysfunction with confusion/coma, sweating may stop).",
    explainTh: "ลำดับความรุนแรง: ตะคริวจากความร้อน (กล้ามเนื้อเกร็งจากสูญเสียเกลือแร่) -> อ่อนเพลียจากความร้อน (เหงื่อออกมาก เวียนศีรษะ ความดันต่ำ อุณหภูมิ 38-40°C) -> ลมแดด (ฉุกเฉิน: อุณหภูมิ >40-40.5°C ระบบประสาทส่วนกลางผิดปกติ สับสน/หมดสติ เหงื่ออาจหยุด)"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 2,
    q: "How long does heat acclimatization typically take?",
    th: "การปรับตัวต่อความร้อน (heat acclimatization) โดยทั่วไปใช้เวลานานเท่าไร?",
    options: ["7-14 days", "1-2 days", "30-60 days", "3-6 months"],
    answer: 0,
    hint: "About 1-2 weeks of repeated heat exposure.",
    explain: "Heat acclimatization takes 7-14 days of repeated exercise in heat. Adaptations include: earlier sweating onset, more dilute sweat (less Na+ loss), increased plasma volume, lower heart rate during exercise, and lower core temperature - all improving heat tolerance.",
    explainTh: "การปรับตัวต่อความร้อนใช้เวลา 7-14 วัน การเปลี่ยนแปลง: เหงื่อออกเร็วขึ้น เหงื่อเจือจางขึ้น (สูญเสีย Na+ น้อยลง) plasma volume เพิ่ม HR ลดลง อุณหภูมิแกนกลางต่ำลง ทนทานต่อความร้อนได้ดีขึ้น"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 2,
    q: "Normal sweat loss during exercise in the heat is approximately:",
    th: "การสูญเสียเหงื่อปกติขณะออกกำลังกายในที่ร้อนประมาณ:",
    options: ["1-2 liters per hour", "100-200 mL per hour", "5-10 liters per hour", "50-100 mL per hour"],
    answer: 0,
    hint: "Some individuals can lose up to 3 L/hr.",
    explain: "Normal sweat loss during exercise in the heat is 1-2 L/hr (some individuals up to 3 L/hr). This significant fluid loss carries electrolytes (Na+, Cl-, K+), can reduce plasma volume, increase blood viscosity, reduce venous return and stroke volume, and increase core temperature.",
    explainTh: "การสูญเสียเหงื่อปกติขณะออกกำลังกายในที่ร้อนประมาณ 1-2 ลิตร/ชม. (บางคนถึง 3 ลิตร/ชม.) การสูญเสียน้ำมากพาเกลือแร่ (Na+, Cl-, K+) ออกไป ลด plasma volume เพิ่มความหนืดเลือด ลด venous return และ SV เพิ่มอุณหภูมิแกนกลาง"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 3,
    q: "What defines heat stroke as a medical emergency compared to heat exhaustion?",
    th: "อะไรที่ทำให้ลมแดด (heat stroke) เป็นภาวะฉุกเฉินเมื่อเทียบกับอ่อนเพลียจากความร้อน?",
    options: [
      "Core temperature >40-40.5 degrees C with CNS dysfunction (confusion, coma)",
      "Presence of muscle cramps",
      "Heavy sweating and dizziness",
      "Elevated heart rate above resting"
    ],
    answer: 0,
    hint: "The brain starts to malfunction - that's what makes it life-threatening.",
    explain: "Heat stroke is defined by core temperature >40-40.5 degrees C with CNS dysfunction (confusion, altered consciousness, coma). Sweating may actually STOP. This distinguishes it from heat exhaustion (core 38-40 degrees C, heavy sweating, dizziness, hypotension but preserved mental function). Heat stroke is a medical emergency requiring immediate cooling.",
    explainTh: "ลมแดดมีอุณหภูมิแกนกลาง >40-40.5°C ร่วมกับระบบประสาทส่วนกลางผิดปกติ (สับสน หมดสติ โคม่า) เหงื่ออาจหยุดออก แตกต่างจากอ่อนเพลียจากความร้อน (อุณหภูมิ 38-40°C เหงื่อออกมาก เวียนศีรษะ แต่สติยังดี) ลมแดดเป็นภาวะฉุกเฉินต้องลดอุณหภูมิทันที"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 1,
    q: "Hypothermia is defined as a core body temperature below:",
    th: "ภาวะอุณหภูมิร่างกายต่ำกว่าปกติ (hypothermia) คือเมื่ออุณหภูมิแกนกลางต่ำกว่า:",
    options: ["35 degrees C", "37 degrees C", "32 degrees C", "40 degrees C"],
    answer: 0,
    hint: "Normal core temperature is around 37 degrees C.",
    explain: "Hypothermia is defined as core body temperature below 35 degrees C. Signs include decreased heart rate, breathing, and reflexes. It can occur during prolonged exercise in cold environments when heat production decreases and heat loss increases. A key problem is rapid heart rate decrease due to cooling of the SA node.",
    explainTh: "ภาวะอุณหภูมิร่างกายต่ำ (hypothermia) คืออุณหภูมิแกนกลางต่ำกว่า 35°C อาการ: อัตราการเต้นหัวใจลดลง การหายใจลดลง ปฏิกิริยาตอบสนองลดลง เกิดขึ้นได้ขณะออกกำลังกายเป็นเวลานานในที่เย็น ปัญหาสำคัญคือหัวใจเต้นช้าลงจากการเย็นของ SA node"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 2,
    q: "What is the recommended fluid intake guideline before exercise to prevent dehydration?",
    th: "แนวทางการดื่มน้ำก่อนออกกำลังกายเพื่อป้องกันภาวะขาดน้ำคืออะไร?",
    options: [
      "400-800 mL within 3 hours before exercise",
      "50-100 mL immediately before exercise",
      "2-3 liters the night before exercise",
      "No water needed before exercise"
    ],
    answer: 0,
    hint: "It's a moderate amount taken a few hours beforehand.",
    explain: "Guidelines recommend drinking 400-800 mL within 3 hours before exercise, then 150-300 mL every 15-20 minutes during exercise. Dehydration of just 1-2% of body weight can impair performance. Post-exercise, replace 150% of weight lost (1 kg lost = 1.5 L water). Sports drinks are better than plain water for replacement.",
    explainTh: "แนวทาง: ดื่มน้ำ 400-800 มล. ภายใน 3 ชม.ก่อนออกกำลังกาย แล้วดื่ม 150-300 มล. ทุก 15-20 นาทีขณะออกกำลัง ขาดน้ำเพียง 1-2% ของน้ำหนักตัวส่งผลต่อสมรรถภาพ หลังออกกำลังดื่มทดแทน 150% ของน้ำหนักที่สูญเสีย (1 กก. = 1.5 ลิตร) เครื่องดื่มเกลือแร่ดีกว่าน้ำเปล่า"
  },
  {
    topic: "Physiology: Thermoregulation",
    diff: 3,
    q: "In cold environments, the body's primary mechanisms to increase heat production include all EXCEPT:",
    th: "ในสภาพแวดล้อมเย็น กลไกหลักของร่างกายเพื่อเพิ่มการผลิตความร้อนรวมทุกข้อยกเว้น:",
    options: [
      "Peripheral vasodilation to increase blood flow to the skin",
      "Shivering thermogenesis",
      "Non-shivering thermogenesis (brown fat metabolism)",
      "Increased metabolic rate from hormones (catecholamines, thyroxine)"
    ],
    answer: 0,
    hint: "One of these would actually LOSE heat, not produce it.",
    explain: "In cold environments, the body produces heat through shivering thermogenesis, non-shivering thermogenesis (brown fat), increased metabolic rate via hormones, and muscle tension. Peripheral VASODILATION would increase heat LOSS by sending warm blood to the skin surface - the body actually does peripheral VASOCONSTRICTION to conserve heat.",
    explainTh: "ในที่เย็น ร่างกายผลิตความร้อนจากการสั่น, non-shivering thermogenesis (ไขมันน้ำตาล), เพิ่มเมตาบอลิซึมจากฮอร์โมน และกล้ามเนื้อเกร็ง การขยายหลอดเลือดส่วนปลาย (vasodilation) จะเพิ่มการสูญเสียความร้อน ร่างกายจริงๆ ทำ vasoconstriction เพื่อเก็บรักษาความร้อน"
  }
];

const flashcards = [
  {
    topic: "Physiology: Cardiovascular Responses",
    front: "CO = HR x SV",
    frontTh: "CO = HR x SV",
    back: "Cardiac Output = Heart Rate x Stroke Volume. At rest ~5 L/min, during maximal exercise 20-30 L/min.",
    backTh: "ปริมาตรเลือดออกจากหัวใจ/นาที = อัตราการเต้นหัวใจ x ปริมาตรต่อครั้ง ขณะพัก ~5 ลิตร/นาที ออกกำลังกายสูงสุด 20-30 ลิตร/นาที"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    front: "Frank-Starling Law",
    frontTh: "กฎของ Frank-Starling",
    back: "Greater venous return stretches the myocardium (increased EDV/preload), resulting in more forceful contraction and increased stroke volume. Intrinsic mechanism for increasing CO during exercise.",
    backTh: "เลือดไหลกลับมากขึ้นยืดกล้ามเนื้อหัวใจ (เพิ่ม EDV/preload) ทำให้หดตัวแรงขึ้นและ SV เพิ่ม เป็นกลไกภายในเพื่อเพิ่ม CO ขณะออกกำลังกาย"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    front: "Muscle Fiber Types: I vs IIa vs IIx",
    frontTh: "ชนิดเส้นใยกล้ามเนื้อ: I vs IIa vs IIx",
    back: "Type I: slow-oxidative, fatigue resistant, endurance. Type IIa: fast-oxidative glycolytic, intermediate. Type IIx: fast-glycolytic, highest power output, fatigues quickly.",
    backTh: "ชนิด I: ช้า-ใช้ออกซิเจน ทนล้า ทนทาน ชนิด IIa: เร็ว-ผสม ปานกลาง ชนิด IIx: เร็ว-ไกลโคลิติก กำลังสูงสุด ล้าเร็ว"
  },
  {
    topic: "Physiology: Musculoskeletal System",
    front: "Three Energy Systems for ATP Production",
    frontTh: "ระบบพลังงาน 3 ระบบสำหรับผลิต ATP",
    back: "1) Phosphocreatine (PC) - immediate, ~10 sec. 2) Glycolysis - anaerobic, glucose/glycogen breakdown. 3) Oxidative phosphorylation - aerobic, uses O2, sustained exercise.",
    backTh: "1) ฟอสโฟครีเอทีน (PC) - ทันที ~10 วิ 2) ไกลโคลิซิส - ไม่ใช้ O2 สลายกลูโคส/ไกลโคเจน 3) ออกซิเดทีฟฟอสโฟรีเลชัน - ใช้ O2 ออกกำลังกายต่อเนื่อง"
  },
  {
    topic: "Physiology: Hormonal & Endocrine Responses",
    front: "Exercise Hormone Response Pattern",
    frontTh: "รูปแบบการตอบสนองของฮอร์โมนขณะออกกำลังกาย",
    back: "Catecholamines UP, Glucagon UP, GH UP, Cortisol UP, Insulin DOWN. All work together to mobilize fuel and maintain blood glucose for ATP production.",
    backTh: "แคทีโคลามีน เพิ่ม, กลูคากอน เพิ่ม, GH เพิ่ม, คอร์ติซอล เพิ่ม, อินซูลิน ลด ทำงานร่วมกันระดมเชื้อเพลิงและรักษาน้ำตาลในเลือดเพื่อผลิต ATP"
  },
  {
    topic: "Physiology: Thermoregulation",
    front: "Heat Illness Spectrum",
    frontTh: "ลำดับความรุนแรงของการเจ็บป่วยจากความร้อน",
    back: "Heat cramps (muscle spasms, electrolyte loss) -> Heat exhaustion (sweating, dizziness, core 38-40C) -> Heat stroke (EMERGENCY: core >40C, CNS dysfunction, sweating may stop).",
    backTh: "ตะคริว (กล้ามเนื้อเกร็ง สูญเสียเกลือแร่) -> อ่อนเพลีย (เหงื่อออก เวียนศีรษะ 38-40°C) -> ลมแดด (ฉุกเฉิน: >40°C ระบบประสาทผิดปกติ เหงื่ออาจหยุด)"
  },
  {
    topic: "Physiology: Thermoregulation",
    front: "Heat Acclimatization (7-14 days)",
    frontTh: "การปรับตัวต่อความร้อน (7-14 วัน)",
    back: "Adaptations: sweat earlier, dilute sweat (less Na+ loss), increased plasma volume, lower HR during exercise, lower core temp. Result: better heat tolerance.",
    backTh: "การปรับตัว: เหงื่อออกเร็วขึ้น เหงื่อเจือจาง (เสีย Na+ น้อยลง) plasma volume เพิ่ม HR ลดขณะออกกำลัง อุณหภูมิแกนกลางต่ำลง ผลลัพธ์: ทนร้อนดีขึ้น"
  },
  {
    topic: "Physiology: Cardiovascular Responses",
    front: "Ejection Fraction (EF)",
    frontTh: "Ejection Fraction (EF)",
    back: "EF = SV/EDV x 100%. Normal: 55-70%. Measures pumping efficiency of the left ventricle. Preload = EDV (filling). Afterload = resistance against ejection.",
    backTh: "EF = SV/EDV x 100% ปกติ: 55-70% วัดประสิทธิภาพการบีบตัวของหัวใจห้องล่างซ้าย Preload = EDV (การเติมเลือด) Afterload = แรงต้านการบีบ"
  }
];

const deepWhy = [
  {
    topic: "Physiology: Cardiovascular Responses",
    question: "Why does the body need to increase cardiac output during exercise, and how do trained athletes achieve this differently?",
    questionTh: "เหตุใดร่างกายต้องเพิ่ม cardiac output ขณะออกกำลังกาย และนักกีฬาที่ฝึกแล้วทำได้แตกต่างอย่างไร?",
    answer: "During exercise, working muscles need dramatically more oxygen and nutrients. Cardiac output (CO = HR x SV) must increase from ~5 L/min at rest to 20-30 L/min during maximal exercise. Untrained individuals increase CO primarily by increasing HR, as their SV plateaus early. Trained athletes have larger, stronger hearts with greater EDV and contractility, so they achieve higher SV at each intensity level. This means they can maintain the same CO with a lower HR (resting bradycardia), reach higher maximal CO, and have greater cardiac reserve. The Frank-Starling mechanism and sympathetic nervous system work together - at low intensities, increased venous return (EDV) drives SV increases; at high intensities, enhanced contractility reduces ESV further. This is why VO2max is higher in trained individuals - their cardiovascular system delivers more oxygen per minute.",
    answerTh: "ขณะออกกำลังกาย กล้ามเนื้อที่ทำงานต้องการออกซิเจนและสารอาหารมากขึ้นอย่างมาก CO ต้องเพิ่มจาก ~5 ลิตร/นาทีขณะพักเป็น 20-30 ลิตร/นาที คนไม่ได้ฝึกเพิ่ม CO โดยเพิ่ม HR เป็นหลักเพราะ SV ถึง plateau เร็ว นักกีฬาที่ฝึกแล้วมีหัวใจใหญ่แข็งแรงกว่า EDV และ contractility สูงกว่า จึงมี SV สูงกว่าที่ทุกระดับความหนัก หัวใจเต้นช้ากว่าขณะพัก (resting bradycardia) CO สูงสุดมากกว่า กลไก Frank-Starling และระบบซิมพาเทติกทำงานร่วมกัน ความหนักต่ำ: venous return เพิ่ม SV ความหนักสูง: contractility เพิ่มลด ESV จึงเป็นเหตุผลที่ VO2max สูงกว่าในคนที่ฝึก"
  },
  {
    topic: "Physiology: Thermoregulation",
    question: "Why is heat stroke a medical emergency while heat exhaustion is not, and what physiological mechanisms make it so dangerous?",
    questionTh: "เหตุใดลมแดด (heat stroke) จึงเป็นภาวะฉุกเฉินแต่อ่อนเพลียจากความร้อนไม่ใช่ และกลไกทางสรีรวิทยาใดทำให้อันตรายมาก?",
    answer: "Heat stroke represents a catastrophic failure of thermoregulation where the body can no longer cool itself. When core temperature exceeds 40-40.5 degrees C, proteins begin to denature and cell membranes lose integrity, especially in the brain. This causes CNS dysfunction (confusion, seizures, coma) - the hallmark that distinguishes heat stroke from heat exhaustion. Paradoxically, sweating may STOP because the thermoregulatory system itself has failed, creating a vicious cycle of rising temperature. The cardiovascular system is also overwhelmed - blood is diverted to the skin for cooling while muscles still demand flow, leading to cardiovascular collapse. Cellular damage triggers systemic inflammatory response and potential multi-organ failure (liver, kidneys, muscles). In contrast, heat exhaustion (core 38-40 degrees C) involves heavy sweating, dizziness, and hypotension, but the thermoregulatory system is still functioning - the body CAN still cool itself. Mental function is preserved. This is why immediate aggressive cooling (ice water immersion) is critical in heat stroke - every minute of elevated temperature increases the risk of permanent brain damage and death.",
    answerTh: "ลมแดดคือความล้มเหลวของระบบควบคุมอุณหภูมิ ร่างกายไม่สามารถระบายความร้อนได้อีก เมื่ออุณหภูมิแกนเกิน 40-40.5°C โปรตีนเริ่มเสียสภาพและเยื่อเซลล์สูญเสียความสมบูรณ์ โดยเฉพาะในสมอง ทำให้ระบบประสาทส่วนกลางผิดปกติ (สับสน ชัก โคม่า) ซึ่งแตกต่างจากอ่อนเพลียจากความร้อน เหงื่ออาจหยุดออกเพราะระบบควบคุมอุณหภูมิล้มเหลว ระบบหัวใจถูกกดดันจนเกินไป เซลล์ถูกทำลายอาจนำไปสู่อวัยวะหลายระบบล้มเหลว ในขณะที่อ่อนเพลียจากความร้อน (38-40°C) ระบบยังทำงานได้ เหงื่อยังออก สติยังดี จึงต้องลดอุณหภูมิทันทีในลมแดด"
  }
];

const cases = [];
