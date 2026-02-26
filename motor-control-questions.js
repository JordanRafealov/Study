// Motor Control & Motor Learning — Exam Questions
// Course 303241: Strategy to Improve Motor Control and Motor Learning
// Generated for StudyApp

const mcMlQuestions = [

// ============================================================
// TOPIC 1: MC-ML: Reflex & Hierarchical Theories (~14 Qs)
// ============================================================

{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 1,
  q: "Who is considered the founder of Reflex Theory?",
  th: "ใครเป็นผู้ก่อตั้งทฤษฎีรีเฟล็กซ์?",
  options: [
    "เซอร์ชาร์ลส์ เชอร์ริงตัน (Sir Charles Sherrington)",
    "ฮิวจ์ลิงส์ แจ็คสัน (Hughlings Jackson)",
    "นิโคไล เบิร์นสไตน์ (Nikolai Bernstein)",
    "แจ็ค อดัมส์ (Jack Adams)"
  ],
  answer: 0,
  hint: "He wrote 'Integration Action of the Nervous System' in the early 1900s.",
  explain: "Slide 1-2: Sir Charles Sherrington proposed Reflex Theory in the early 1900s, publishing 'Integration Action of the Nervous System.' He described movement as chains of reflexes.",
  explainTh: "สไลด์ 1-2: เซอร์ชาร์ลส์ เชอร์ริงตัน เสนอทฤษฎีรีเฟล็กซ์ในต้นศตวรรษที่ 20 โดยตีพิมพ์หนังสือ 'Integration Action of the Nervous System' อธิบายว่าการเคลื่อนไหวเกิดจากสายโซ่ของรีเฟล็กซ์"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 1,
  q: "What is the basic structure of a reflex arc according to Reflex Theory?",
  th: "โครงสร้างพื้นฐานของวงจรรีเฟล็กซ์ตามทฤษฎีรีเฟล็กซ์คืออะไร?",
  options: [
    "สมอง + ไขสันหลัง + กล้ามเนื้อ (Brain + Spinal cord + Muscle)",
    "ตัวรับ + ตัวนำ + ตัวปฏิบัติการ (Receptor + Conductor + Effector)",
    "รับความรู้สึก + ประมวลผล + ส่งออก (Sensory + Processing + Output)",
    "คอร์เทกซ์ + ก้านสมอง + ไขสันหลัง (Cortex + Brainstem + Spinal cord)"
  ],
  answer: 1,
  hint: "Three components: something receives, something transmits, something acts.",
  explain: "Slide 1-2: The basic reflex arc structure consists of Receptor (receives stimulus), Conductor (transmits signal), and Effector (produces response/movement).",
  explainTh: "สไลด์ 1-2: โครงสร้างพื้นฐานของวงจรรีเฟล็กซ์ประกอบด้วย ตัวรับ (Receptor - รับสิ่งเร้า), ตัวนำ (Conductor - ส่งสัญญาณ), และตัวปฏิบัติการ (Effector - สร้างการตอบสนอง)"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "Sherrington's evidence for Reflex Theory came from experiments involving what procedure on monkeys?",
  th: "หลักฐานของเชอร์ริงตันสำหรับทฤษฎีรีเฟล็กซ์มาจากการทดลองใดในลิง?",
  options: [
    "การตัดสมองส่วนคอร์เทกซ์ (Cortex ablation)",
    "การกระตุ้นไฟฟ้าที่ไขสันหลัง (Electrical stimulation of spinal cord)",
    "การตัด dorsal root ganglia (Dorsal root ganglia resection)",
    "การฉีดสารยับยั้งสารสื่อประสาท (Neurotransmitter inhibitor injection)"
  ],
  answer: 2,
  hint: "He cut the sensory nerve roots entering the spinal cord.",
  explain: "Slide 1-2: Sherrington performed dorsal root ganglia resection in monkeys, demonstrating that when sensory input was removed, reflexive movement was abolished — supporting his view that movement requires sensory stimulus.",
  explainTh: "สไลด์ 1-2: เชอร์ริงตันทำการตัด dorsal root ganglia ในลิง แสดงให้เห็นว่าเมื่อตัดการรับความรู้สึกออก การเคลื่อนไหวแบบรีเฟล็กซ์จะหายไป สนับสนุนแนวคิดว่าการเคลื่อนไหวต้องอาศัยสิ่งเร้าจากการรับความรู้สึก"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 1,
  q: "Which of the following is NOT a characteristic of a reflex?",
  th: "ข้อใดต่อไปนี้ไม่ใช่ลักษณะเฉพาะของรีเฟล็กซ์?",
  options: [
    "อัตโนมัติ (Automatic)",
    "รวดเร็ว (Rapid)",
    "ต้องการการเรียนรู้ (Requires learning)",
    "เป็นแบบแผนซ้ำเดิม (Stereotyped)"
  ],
  answer: 2,
  hint: "Reflexes are innate, not learned behaviors.",
  explain: "Slide 1-2: Reflexes are automatic, rapid, stereotyped, and serve protective/postural functions. They are innate responses and do NOT require learning.",
  explainTh: "สไลด์ 1-2: รีเฟล็กซ์เป็นอัตโนมัติ รวดเร็ว เป็นแบบแผนซ้ำเดิม และทำหน้าที่ป้องกัน/ทรงตัว เป็นการตอบสนองที่มีมาแต่กำเนิด ไม่ต้องอาศัยการเรียนรู้"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "A stroke patient presents with upper limb flexor synergy and lower limb extensor synergy. Which theory best explains this pattern?",
  th: "ผู้ป่วยโรคหลอดเลือดสมองมีอาการ flexor synergy ของแขนและ extensor synergy ของขา ทฤษฎีใดอธิบายรูปแบบนี้ได้ดีที่สุด?",
  options: [
    "ทฤษฎีโปรแกรมมอเตอร์ (Motor Programming Theory)",
    "ทฤษฎีระบบ (Systems Theory)",
    "ทฤษฎีรีเฟล็กซ์ (Reflex Theory)",
    "ทฤษฎีเชิงนิเวศวิทยา (Ecological Theory)"
  ],
  answer: 2,
  hint: "When cortex is damaged, lower-level reflexes dominate.",
  explain: "Slide 2-3: Reflex Theory explains that cortex injury leads to reflex-dominant movement. Loss of cortical inhibition causes dissolution, resulting in spasticity and synergy patterns — flexor synergy in the arm and extensor synergy in the leg after stroke.",
  explainTh: "สไลด์ 2-3: ทฤษฎีรีเฟล็กซ์อธิบายว่าการบาดเจ็บของคอร์เทกซ์ทำให้รีเฟล็กซ์เด่น การสูญเสียการยับยั้งจากคอร์เทกซ์ทำให้เกิด dissolution ส่งผลให้มี spasticity และรูปแบบ synergy — flexor synergy ในแขนและ extensor synergy ในขาหลังโรคหลอดเลือดสมอง"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "A patient with spinal cord injury (UMN lesion) shows hyperreflexia. According to Reflex Theory, the treatment approach should focus on:",
  th: "ผู้ป่วยบาดเจ็บไขสันหลัง (UMN lesion) มีอาการ hyperreflexia ตามทฤษฎีรีเฟล็กซ์ แนวทางการรักษาควรเน้นที่:",
  options: [
    "การฝึกงานเฉพาะ (Task-specific training)",
    "การยับยั้งรีเฟล็กซ์ที่มากเกินไปด้วยการจัดท่า/ยืดกล้ามเนื้อเป็นเวลานาน/ลงน้ำหนัก (Inhibit excess reflex via positioning/prolonged stretch/weight bearing)",
    "การฝึกโปรแกรมมอเตอร์ซ้ำๆ (Repetitive motor program training)",
    "การปรับสิ่งแวดล้อม (Environmental modification)"
  ],
  answer: 1,
  hint: "The Bobath/NDT approach uses inhibition techniques.",
  explain: "Slide 2-3: Reflex Theory-based treatment for hyperreflexia involves inhibiting excessive reflex activity through positioning, prolonged stretch, and weight bearing. This is the basis of the Bobath/NDT approach.",
  explainTh: "สไลด์ 2-3: การรักษาตามทฤษฎีรีเฟล็กซ์สำหรับ hyperreflexia คือการยับยั้งรีเฟล็กซ์ที่มากเกินไปผ่านการจัดท่า การยืดกล้ามเนื้อเป็นเวลานาน และการลงน้ำหนัก ซึ่งเป็นพื้นฐานของแนวทาง Bobath/NDT"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 3,
  q: "Which of the following is a limitation that Reflex Theory CANNOT explain?",
  th: "ข้อใดต่อไปนี้เป็นข้อจำกัดที่ทฤษฎีรีเฟล็กซ์ไม่สามารถอธิบายได้?",
  options: [
    "การเคลื่อนไหวแบบป้องกัน (Protective movements)",
    "การตอบสนองอัตโนมัติต่อสิ่งเร้า (Automatic responses to stimuli)",
    "การเคลื่อนไหวตามเจตนา/การเคลื่อนไหวล่วงหน้า/การเคลื่อนไหวที่รวดเร็วต่อเนื่อง (Voluntary/anticipatory/rapid sequential movements)",
    "การเคลื่อนไหวแบบ stereotyped (Stereotyped movements)"
  ],
  answer: 2,
  hint: "Reflex Theory requires sensory input for every movement.",
  explain: "Slide 2-3: Reflex Theory cannot explain voluntary movement, anticipatory movement, rapid sequential movement, or novel movement — because the theory requires a sensory stimulus to trigger every movement.",
  explainTh: "สไลด์ 2-3: ทฤษฎีรีเฟล็กซ์ไม่สามารถอธิบายการเคลื่อนไหวตามเจตนา การเคลื่อนไหวล่วงหน้า การเคลื่อนไหวรวดเร็วต่อเนื่อง หรือการเคลื่อนไหวใหม่ เพราะทฤษฎีต้องการสิ่งเร้าจากการรับความรู้สึกเพื่อกระตุ้นการเคลื่อนไหวทุกครั้ง"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 1,
  q: "In Hierarchical Theory, the concept of 'dissolution' was proposed by:",
  th: "ในทฤษฎีลำดับชั้น แนวคิด 'dissolution' ถูกเสนอโดย:",
  options: [
    "อาร์โนลด์ เกเซลล์ (Arnold Gesell)",
    "แมกนัส (Magnus)",
    "เชอร์ริงตัน (Sherrington)",
    "ฮิวจ์ลิงส์ แจ็คสัน (Hughlings Jackson)"
  ],
  answer: 3,
  hint: "He proposed the top-down control concept for the CNS.",
  explain: "Slide 3-4: Hughlings Jackson proposed the concept of dissolution — when higher CNS centers are damaged, lower center functions emerge. He established the top-down control model of the CNS.",
  explainTh: "สไลด์ 3-4: ฮิวจ์ลิงส์ แจ็คสัน เสนอแนวคิด dissolution — เมื่อศูนย์ควบคุมระดับสูงของ CNS เสียหาย การทำงานของศูนย์ระดับล่างจะปรากฏออกมา เขาสร้างแบบจำลองการควบคุมแบบบนลงล่างของ CNS"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "According to Hierarchical Theory, what is the correct order of CNS control from highest to lowest?",
  th: "ตามทฤษฎีลำดับชั้น ลำดับการควบคุมของ CNS จากสูงสุดไปต่ำสุดที่ถูกต้องคือ?",
  options: [
    "ก้านสมอง > คอร์เทกซ์ > ไขสันหลัง (Brainstem > Cortex > Spinal cord)",
    "ไขสันหลัง > ก้านสมอง > คอร์เทกซ์ (Spinal cord > Brainstem > Cortex)",
    "คอร์เทกซ์ > ก้านสมอง > ไขสันหลัง (Cortex > Brainstem > Spinal cord)",
    "สมองน้อย > คอร์เทกซ์ > ไขสันหลัง (Cerebellum > Cortex > Spinal cord)"
  ],
  answer: 2,
  hint: "The brain's outer layer is at the top of the hierarchy.",
  explain: "Slide 3-4: The CNS hierarchy in Hierarchical Theory is Cortex (highest) > Brainstem (middle) > Spinal cord (lowest). Higher centers control and inhibit lower centers.",
  explainTh: "สไลด์ 3-4: ลำดับชั้น CNS ในทฤษฎีลำดับชั้นคือ คอร์เทกซ์ (สูงสุด) > ก้านสมอง (กลาง) > ไขสันหลัง (ต่ำสุด) ศูนย์ระดับสูงควบคุมและยับยั้งศูนย์ระดับต่ำ"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 3,
  q: "A child with cerebral palsy shows persistent primitive reflexes at age 3. According to Hierarchical Theory, this occurs because:",
  th: "เด็กสมองพิการยังคงมี primitive reflexes ที่อายุ 3 ปี ตามทฤษฎีลำดับชั้น สาเหตุเพราะ:",
  options: [
    "ไขสันหลังผิดปกติ (Spinal cord abnormality)",
    "ศูนย์ระดับสูง (คอร์เทกซ์) ไม่สามารถยับยั้งการทำงานของศูนย์ระดับต่ำได้ (Higher centers fail to inhibit lower center activity)",
    "กล้ามเนื้อพัฒนาไม่เต็มที่ (Muscles are underdeveloped)",
    "ขาดการกระตุ้นจากสิ่งแวดล้อม (Lack of environmental stimulation)"
  ],
  answer: 1,
  hint: "In CP, the cortex is damaged — what happens to lower level functions?",
  explain: "Slide 3-4: In CP, cortical damage means higher centers cannot inhibit lower center reflexes. Primitive reflexes persist because the normal top-down inhibition never matures — this is dissolution in action.",
  explainTh: "สไลด์ 3-4: ในเด็กสมองพิการ ความเสียหายของคอร์เทกซ์ทำให้ศูนย์ระดับสูงไม่สามารถยับยั้งรีเฟล็กซ์ของศูนย์ระดับต่ำได้ primitive reflexes จึงคงอยู่เพราะการยับยั้งแบบบนลงล่างไม่พัฒนา — นี่คือ dissolution"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "Cerebellar damage results in which clinical presentation according to Hierarchical Theory?",
  th: "ความเสียหายของสมองน้อยทำให้เกิดอาการทางคลินิกใดตามทฤษฎีลำดับชั้น?",
  options: [
    "Spasticity และ synergy pattern",
    "Ataxia และ dysmetria",
    "Hyperreflexia และ spastic paralysis",
    "ท่าทางผิดปกติ (Abnormal posturing)"
  ],
  answer: 1,
  hint: "The cerebellum coordinates movement precision and timing.",
  explain: "Slide 3-4: According to the Hierarchical Theory clinical table, cerebellar damage leads to ataxia (incoordination) and dysmetria (inability to judge distance/range of movement).",
  explainTh: "สไลด์ 3-4: ตามตารางทางคลินิกของทฤษฎีลำดับชั้น ความเสียหายของสมองน้อยทำให้เกิด ataxia (เคลื่อนไหวไม่ประสานกัน) และ dysmetria (ไม่สามารถกะระยะ/พิสัยการเคลื่อนไหวได้)"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 2,
  q: "Treatment based on Hierarchical Theory focuses on:",
  th: "การรักษาตามทฤษฎีลำดับชั้นเน้นที่:",
  options: [
    "การฝึกงานเฉพาะในสิ่งแวดล้อมจริง (Task-specific training in real environment)",
    "การยับยั้งกิจกรรมระดับต่ำและส่งเสริมการควบคุมระดับสูง (Inhibiting lower level activity and facilitating higher level control)",
    "การฝึกซ้ำเพื่อสร้างโปรแกรมมอเตอร์ (Repetitive practice to build motor programs)",
    "การปรับ affordance ของสิ่งแวดล้อม (Adjusting environmental affordances)"
  ],
  answer: 1,
  hint: "Think about restoring the top-down control hierarchy.",
  explain: "Slide 3-4: Hierarchical Theory treatment involves inhibiting lower level activity and facilitating higher level control through alignment, selective movement, trunk control, and weight shifting.",
  explainTh: "สไลด์ 3-4: การรักษาตามทฤษฎีลำดับชั้นคือการยับยั้งกิจกรรมระดับต่ำและส่งเสริมการควบคุมระดับสูงผ่านการจัดแนว การเคลื่อนไหวแบบเลือกสรร การควบคุมลำตัว และการย้ายน้ำหนัก"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 3,
  q: "A major limitation of Hierarchical Theory is that:",
  th: "ข้อจำกัดสำคัญของทฤษฎีลำดับชั้นคือ:",
  options: [
    "ไม่สามารถอธิบายการเคลื่อนไหวแบบรีเฟล็กซ์ได้ (Cannot explain reflex movements)",
    "ผู้ใหญ่ปกติยังแสดงรีเฟล็กซ์ระดับต่ำ เช่น flexor withdrawal และแต่ละระดับสามารถส่งผลต่อกันได้ตามงาน (Normal adults show lower-level reflexes and each level can act on others depending on task)",
    "ใช้ได้เฉพาะกับเด็กเท่านั้น (Only applicable to children)",
    "ต้องการ sensory input เสมอ (Always requires sensory input)"
  ],
  answer: 1,
  hint: "Even healthy adults show withdrawal reflexes — is that strictly top-down?",
  explain: "Slide 3-4: A key limitation is that normal adults still show lower-level reflexes (e.g., flexor withdrawal when stepping on a tack), and each level can influence others depending on the task. The CNS also uses parallel processing (Cortex→Brainstem AND Cortex→Spinal cord), not strictly top-down.",
  explainTh: "สไลด์ 3-4: ข้อจำกัดสำคัญคือผู้ใหญ่ปกติยังแสดงรีเฟล็กซ์ระดับต่ำ (เช่น flexor withdrawal เมื่อเหยียบหนาม) และแต่ละระดับสามารถส่งผลต่อกันได้ตามงาน CNS ยังใช้การประมวลผลแบบขนาน ไม่ใช่แบบบนลงล่างอย่างเดียว"
},
{
  topic: "MC-ML: Reflex & Hierarchical Theories",
  diff: 1,
  q: "Arnold Gesell and Myrtle McGraw's contribution to Hierarchical Theory in the 1940s was the:",
  th: "ผลงานของอาร์โนลด์ เกเซลล์ และเมอร์เทิล แมคกรอว์ ต่อทฤษฎีลำดับชั้นในทศวรรษ 1940 คือ:",
  options: [
    "แนวคิดการเจริญของระบบประสาท (Neuromaturational theory)",
    "แนวคิด dissolution (Dissolution concept)",
    "แนวคิดรีเฟล็กซ์ควบคุมโดยระดับล่าง (Reflexes controlled by lower levels)",
    "แนวคิดการควบคุมแบบขนาน (Parallel control concept)"
  ],
  answer: 0,
  hint: "Their theory was about how the nervous system matures during development.",
  explain: "Slide 3-4: Arnold Gesell and Myrtle McGraw in the 1940s proposed neuromaturational theory — motor development follows the maturation of the nervous system from lower to higher levels.",
  explainTh: "สไลด์ 3-4: อาร์โนลด์ เกเซลล์ และเมอร์เทิล แมคกรอว์ ในทศวรรษ 1940 เสนอทฤษฎีการเจริญของระบบประสาท — พัฒนาการเคลื่อนไหวเป็นไปตามการเจริญของระบบประสาทจากระดับต่ำไปสูง"
},

// ============================================================
// TOPIC 2: MC-ML: Motor Programming & Systems Theories (~14 Qs)
// ============================================================

{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 1,
  q: "Motor Programming Theory states that movement comes from:",
  th: "ทฤษฎีโปรแกรมมอเตอร์ระบุว่าการเคลื่อนไหวมาจาก:",
  options: [
    "สายโซ่ของรีเฟล็กซ์ (Chains of reflexes)",
    "ปฏิสัมพันธ์ของหลายระบบ (Interaction of multiple systems)",
    "โปรแกรมมอเตอร์ที่จัดเก็บใน CNS (Stored motor programs in the CNS)",
    "การรับรู้โดยตรงจากสิ่งแวดล้อม (Direct perception from environment)"
  ],
  answer: 2,
  hint: "This theory says programs are pre-stored, not dependent on sensory input.",
  explain: "Slide 5-6: Motor Programming Theory proposes that movement comes from stored motor programs in the CNS. Unlike Reflex Theory, it does NOT depend on sensory input to initiate movement.",
  explainTh: "สไลด์ 5-6: ทฤษฎีโปรแกรมมอเตอร์เสนอว่าการเคลื่อนไหวมาจากโปรแกรมมอเตอร์ที่จัดเก็บใน CNS ต่างจากทฤษฎีรีเฟล็กซ์ตรงที่ไม่ต้องอาศัย sensory input ในการเริ่มต้นการเคลื่อนไหว"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "Central Pattern Generators (CPGs) for locomotion are located at which spinal cord level?",
  th: "Central Pattern Generators (CPGs) สำหรับการเดินอยู่ที่ระดับไขสันหลังใด?",
  options: [
    "C1-C5",
    "T1-T12",
    "L1-L5",
    "S1-S5"
  ],
  answer: 2,
  hint: "Think about where lower limb motor neurons are concentrated.",
  explain: "Slide 5-6: CPGs for locomotion are in the spinal cord at L1-L5 level. Other CPGs include brainstem CPGs for breathing, chewing, and swallowing.",
  explainTh: "สไลด์ 5-6: CPGs สำหรับการเดินอยู่ในไขสันหลังระดับ L1-L5 CPGs อื่นๆ ได้แก่ CPGs ที่ก้านสมองสำหรับการหายใจ การเคี้ยว และการกลืน"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "The 1960s Grasshopper experiment demonstrated that wing-beat patterns continued even without sensory feedback. This supports which concept?",
  th: "การทดลอง Grasshopper ในทศวรรษ 1960 แสดงให้เห็นว่ารูปแบบการตีปีกยังคงดำเนินต่อแม้ไม่มี sensory feedback สนับสนุนแนวคิดใด?",
  options: [
    "ทฤษฎีรีเฟล็กซ์ (Reflex Theory)",
    "ทฤษฎีลำดับชั้น (Hierarchical Theory)",
    "Central Pattern Generators (CPGs)",
    "ทฤษฎีระบบ (Systems Theory)"
  ],
  answer: 2,
  hint: "Rhythmic movement without sensory input = pre-programmed pattern generators.",
  explain: "Slide 5-6: The Grasshopper experiment showed rhythmic wing-beat patterns persisted without sensory feedback, providing key evidence for Central Pattern Generators — neural circuits that produce rhythmic movement independently of sensory input.",
  explainTh: "สไลด์ 5-6: การทดลอง Grasshopper แสดงว่ารูปแบบการตีปีกแบบจังหวะยังคงอยู่โดยไม่มี sensory feedback เป็นหลักฐานสำคัญของ Central Pattern Generators — วงจรประสาทที่สร้างการเคลื่อนไหวแบบจังหวะโดยไม่ต้องอาศัย sensory input"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 1,
  q: "GMP (Generalized Motor Program) is stored in:",
  th: "GMP (Generalized Motor Program) ถูกจัดเก็บใน:",
  options: [
    "หน่วยความจำระยะสั้น (Short-term memory)",
    "หน่วยความจำระยะยาว (Long-term memory)",
    "ไขสันหลัง (Spinal cord)",
    "ก้านสมอง (Brainstem)"
  ],
  answer: 1,
  hint: "These programs are retained and can be accessed anytime.",
  explain: "Slide 5-6: Generalized Motor Programs are stored in long-term memory. They serve as templates for movement that can be adapted to different situations.",
  explainTh: "สไลด์ 5-6: Generalized Motor Programs จัดเก็บในหน่วยความจำระยะยาว ทำหน้าที่เป็นแม่แบบสำหรับการเคลื่อนไหวที่สามารถปรับเปลี่ยนให้เข้ากับสถานการณ์ต่างๆ"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 3,
  q: "A stroke patient can understand and describe how to brush their teeth but cannot execute the action despite normal strength. This condition is called:",
  th: "ผู้ป่วยโรคหลอดเลือดสมองเข้าใจและอธิบายวิธีแปรงฟันได้ แต่ทำไม่ได้แม้กำลังกล้ามเนื้อปกติ อาการนี้เรียกว่า:",
  options: [
    "Ataxia",
    "Apraxia",
    "Agraphia",
    "Aphasia"
  ],
  answer: 1,
  hint: "The motor program for the task cannot be accessed or executed.",
  explain: "Slide 5-6: Apraxia is the inability to perform learned movements despite normal strength and understanding. It represents a failure in accessing or executing the stored motor program — a clinical application of Motor Programming Theory.",
  explainTh: "สไลด์ 5-6: Apraxia คือการไม่สามารถทำการเคลื่อนไหวที่เรียนรู้แล้วได้ แม้กำลังกล้ามเนื้อและความเข้าใจปกติ เป็นความล้มเหลวในการเข้าถึงหรือดำเนินการโปรแกรมมอเตอร์ที่จัดเก็บไว้"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "According to Motor Programming Theory, the 4 clinical steps in treatment order are:",
  th: "ตามทฤษฎีโปรแกรมมอเตอร์ 4 ขั้นตอนทางคลินิกในการรักษาตามลำดับคือ:",
  options: [
    "ฝึกงาน → วิเคราะห์ → ถ่ายทอด → ฝึกส่วนย่อย (Practice task → Analyze → Transfer → Practice component)",
    "วิเคราะห์งาน → ฝึกส่วนที่ขาด → ฝึกงาน → ถ่ายทอดการเรียนรู้ (Analyze task → Practice missing component → Practice task → Transfer of learning)",
    "ถ่ายทอด → ฝึกงาน → วิเคราะห์ → ฝึกส่วนย่อย (Transfer → Practice task → Analyze → Practice component)",
    "ฝึกส่วนย่อย → ฝึกงาน → วิเคราะห์ → ถ่ายทอด (Practice component → Practice task → Analyze → Transfer)"
  ],
  answer: 1,
  hint: "First understand the problem, then fix the parts, then the whole, then generalize.",
  explain: "Slide 5-6: The 4 clinical steps are: (1) Analysis of task, (2) Practice missing component, (3) Practice the full task, (4) Transfer of learning to other contexts.",
  explainTh: "สไลด์ 5-6: 4 ขั้นตอนทางคลินิกคือ: (1) วิเคราะห์งาน (2) ฝึกส่วนที่ขาดหายไป (3) ฝึกงานทั้งหมด (4) ถ่ายทอดการเรียนรู้ไปสู่บริบทอื่น"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 1,
  q: "Who proposed Systems Theory for motor control?",
  th: "ใครเป็นผู้เสนอทฤษฎีระบบสำหรับการควบคุมการเคลื่อนไหว?",
  options: [
    "เชอร์ริงตัน (Sherrington)",
    "อดัมส์ (Adams)",
    "เบิร์นสไตน์ (Bernstein)",
    "ชมิดท์ (Schmidt)"
  ],
  answer: 2,
  hint: "He introduced the 'degrees of freedom' problem.",
  explain: "Slide 7-8: Nikolai Bernstein proposed Systems Theory, stating that movement results from the interaction of multiple systems, not a single system. He introduced the concept of degrees of freedom.",
  explainTh: "สไลด์ 7-8: นิโคไล เบิร์นสไตน์ เสนอทฤษฎีระบบ โดยระบุว่าการเคลื่อนไหวเกิดจากปฏิสัมพันธ์ของหลายระบบ ไม่ใช่ระบบเดียว เขาแนะนำแนวคิด degrees of freedom"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "The 3 types of constraints in the Systems Theory constraints model are:",
  th: "ข้อจำกัด 3 ประเภทในแบบจำลอง constraints ของทฤษฎีระบบคือ:",
  options: [
    "ร่างกาย + จิตใจ + สังคม (Physical + Mental + Social)",
    "บุคคล + งาน + สิ่งแวดล้อม (Individual + Task + Environmental)",
    "ระบบประสาท + กระดูกกล้ามเนื้อ + หัวใจปอด (Neural + Musculoskeletal + Cardiopulmonary)",
    "การรับรู้ + การรู้คิด + การเคลื่อนไหว (Perception + Cognition + Action)"
  ],
  answer: 1,
  hint: "The person, what they're doing, and where they're doing it.",
  explain: "Slide 7-8: The constraints model includes Individual (body, cognition, experience), Task (goal, rules, tools), and Environmental (gravity, terrain, lighting) constraints that interact to shape movement.",
  explainTh: "สไลด์ 7-8: แบบจำลอง constraints ประกอบด้วย ข้อจำกัดของบุคคล (ร่างกาย การรู้คิด ประสบการณ์) ข้อจำกัดของงาน (เป้าหมาย กฎ เครื่องมือ) และข้อจำกัดของสิ่งแวดล้อม (แรงโน้มถ่วง ภูมิประเทศ แสง)"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "A beginner learning to write holds the pen very tightly with rigid wrist and fingers. According to Bernstein's DOF concept, this represents which stage?",
  th: "ผู้เริ่มต้นเรียนเขียนจับปากกาแน่นมากโดยข้อมือและนิ้วแข็งเกร็ง ตามแนวคิด DOF ของเบิร์นสไตน์ นี่คือขั้นใด?",
  options: [
    "ขั้นปลดปล่อย DOF (Release DOF)",
    "ขั้นแข็งตัว/ตรึง DOF (Freeze DOF)",
    "ขั้นใช้ประโยชน์จาก DOF (Exploit DOF)",
    "ขั้นรวม DOF (Combine DOF)"
  ],
  answer: 1,
  hint: "Beginners reduce complexity by locking joints.",
  explain: "Slide 7-8: Freeze DOF is the beginner stage where learners reduce movement complexity by locking (freezing) joints, resulting in rigid, stiff movements. Release DOF is intermediate (flexible), and Exploit DOF is expert (uses gravity/inertia).",
  explainTh: "สไลด์ 7-8: Freeze DOF คือขั้นผู้เริ่มต้นที่ลดความซับซ้อนของการเคลื่อนไหวโดยล็อค (ตรึง) ข้อต่อ ทำให้เคลื่อนไหวแข็งเกร็ง Release DOF คือขั้นกลาง (ยืดหยุ่น) และ Exploit DOF คือขั้นผู้เชี่ยวชาญ (ใช้แรงโน้มถ่วง/แรงเฉื่อย)"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 3,
  q: "An expert basketball player uses momentum and gravity to execute a smooth layup. This represents which DOF management stage?",
  th: "นักบาสเกตบอลผู้เชี่ยวชาญใช้โมเมนตัมและแรงโน้มถ่วงทำ layup ได้อย่างราบรื่น นี่คือขั้นจัดการ DOF ใด?",
  options: [
    "ขั้นแข็งตัว/ตรึง DOF (Freeze DOF)",
    "ขั้นปลดปล่อย DOF (Release DOF)",
    "ขั้นใช้ประโยชน์จาก DOF (Exploit DOF)",
    "ขั้นควบคุม DOF (Control DOF)"
  ],
  answer: 2,
  hint: "The expert stage harnesses passive forces for efficient movement.",
  explain: "Slide 7-8: Exploit DOF is the expert stage where the individual uses passive forces like gravity and inertia to produce efficient, smooth movement. This is the highest level of DOF management.",
  explainTh: "สไลด์ 7-8: Exploit DOF คือขั้นผู้เชี่ยวชาญที่บุคคลใช้แรงภายนอก เช่น แรงโน้มถ่วงและแรงเฉื่อย เพื่อสร้างการเคลื่อนไหวที่มีประสิทธิภาพและราบรื่น เป็นระดับสูงสุดของการจัดการ DOF"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 1,
  q: "According to Systems Theory, the multiple systems involved in motor control include all EXCEPT:",
  th: "ตามทฤษฎีระบบ ระบบต่างๆ ที่เกี่ยวข้องกับการควบคุมการเคลื่อนไหวรวมถึงทั้งหมด ยกเว้น:",
  options: [
    "ระบบประสาทส่วนกลาง (CNS)",
    "ระบบกระดูกและกล้ามเนื้อ (Musculoskeletal)",
    "ระบบย่อยอาหาร (Digestive system)",
    "ระบบหัวใจและปอด (Cardiopulmonary)"
  ],
  answer: 2,
  hint: "Think about which systems directly contribute to movement execution.",
  explain: "Slide 7-8: The multiple systems in Systems Theory include CNS, Musculoskeletal, Sensory, Cardiopulmonary, and Perception-Cognition. The digestive system is not directly involved in motor control.",
  explainTh: "สไลด์ 7-8: ระบบต่างๆ ในทฤษฎีระบบ ได้แก่ CNS ระบบกระดูกกล้ามเนื้อ ระบบรับความรู้สึก ระบบหัวใจปอด และการรับรู้-การรู้คิด ระบบย่อยอาหารไม่เกี่ยวข้องโดยตรงกับการควบคุมการเคลื่อนไหว"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 3,
  q: "A PT is treating an elderly patient who has difficulty walking. Using Systems Theory, which approach is MOST appropriate?",
  th: "นักกายภาพบำบัดรักษาผู้สูงอายุที่เดินลำบาก การใช้ทฤษฎีระบบ แนวทางใดเหมาะสมที่สุด?",
  options: [
    "ยับยั้งรีเฟล็กซ์ที่ผิดปกติเท่านั้น (Only inhibit abnormal reflexes)",
    "ฝึกโปรแกรมมอเตอร์ซ้ำๆ เท่านั้น (Only repetitive motor program practice)",
    "ประเมินและแก้ไขหลายระบบ: ปรับงาน ปรับสิ่งแวดล้อม เสริมสร้างระบบของบุคคล ฝึก dual-task (Assess and address multiple systems: adjust task, adjust environment, strengthen individual systems, dual-task training)",
    "เน้นการกระตุ้น sensory input เท่านั้น (Only focus on sensory stimulation)"
  ],
  answer: 2,
  hint: "Systems Theory considers ALL contributing factors, not just one.",
  explain: "Slide 7-8: Systems Theory treatment addresses multiple factors: adjusting the task (difficulty, complexity), adjusting the environment (surfaces, obstacles), strengthening individual systems (strength, balance, cardio), and dual-task training.",
  explainTh: "สไลด์ 7-8: การรักษาตามทฤษฎีระบบแก้ไขหลายปัจจัย: ปรับงาน (ความยาก ความซับซ้อน) ปรับสิ่งแวดล้อม (พื้นผิว สิ่งกีดขวาง) เสริมสร้างระบบของบุคคล (กำลัง การทรงตัว หัวใจปอด) และฝึก dual-task"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 2,
  q: "A limitation of Motor Programming Theory is that it:",
  th: "ข้อจำกัดของทฤษฎีโปรแกรมมอเตอร์คือ:",
  options: [
    "ไม่สามารถอธิบายการเคลื่อนไหวแบบเร็วและมีจังหวะได้ (Cannot explain fast rhythmic movements)",
    "ไม่สามารถอธิบายการปรับตัวต่องาน/สิ่งแวดล้อม และไม่คำนึงถึงปัจจัยทางชีวกลศาสตร์ (Cannot explain adaptation to task/environment and ignores biomechanical factors)",
    "ต้องการ sensory input เสมอ (Always requires sensory input)",
    "ใช้ได้เฉพาะกับผู้ป่วยเท่านั้น (Only applicable to patients)"
  ],
  answer: 1,
  hint: "It focuses on pre-stored programs but misses external factors.",
  explain: "Slide 5-6: Motor Programming Theory's limitations include inability to explain adaptation to task/environment, not covering complex motor learning, and ignoring biomechanical/environmental factors.",
  explainTh: "สไลด์ 5-6: ข้อจำกัดของทฤษฎีโปรแกรมมอเตอร์ ได้แก่ ไม่สามารถอธิบายการปรับตัวต่องาน/สิ่งแวดล้อม ไม่ครอบคลุมการเรียนรู้การเคลื่อนไหวที่ซับซ้อน และไม่คำนึงถึงปัจจัยทางชีวกลศาสตร์/สิ่งแวดล้อม"
},
{
  topic: "MC-ML: Motor Programming & Systems Theories",
  diff: 1,
  q: "A Parkinson's disease patient has difficulty initiating walking. According to Motor Programming Theory, this is because:",
  th: "ผู้ป่วยพาร์กินสันมีปัญหาในการเริ่มต้นเดิน ตามทฤษฎีโปรแกรมมอเตอร์ เป็นเพราะ:",
  options: [
    "กล้ามเนื้ออ่อนแรง (Muscle weakness)",
    "ขาด sensory input (Lack of sensory input)",
    "มีปัญหาในการเริ่มต้นดำเนินการโปรแกรมมอเตอร์ (Difficulty initiating motor program execution)",
    "ข้อจำกัดของสิ่งแวดล้อม (Environmental constraints)"
  ],
  answer: 2,
  hint: "The program exists but can't be 'started' — a programming initiation problem.",
  explain: "Slide 5-6: In Parkinson's disease, the motor programs are stored but the basal ganglia dysfunction makes it difficult to initiate/execute them. This is a motor programming initiation deficit.",
  explainTh: "สไลด์ 5-6: ในโรคพาร์กินสัน โปรแกรมมอเตอร์ถูกจัดเก็บอยู่ แต่ความผิดปกติของ basal ganglia ทำให้ยากต่อการเริ่มต้น/ดำเนินการ เป็นความบกพร่องในการเริ่มต้นโปรแกรมมอเตอร์"
},

// ============================================================
// TOPIC 3: MC-ML: Servo, Loop & Processing Theories (~14 Qs)
// ============================================================

{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 1,
  q: "Servomechanistic Theory is based on which type of control?",
  th: "ทฤษฎี Servomechanistic อาศัยการควบคุมแบบใด?",
  options: [
    "การควบคุมแบบเปิด (Open-loop control)",
    "การควบคุมแบบปิด/ป้อนกลับ (Closed-loop/feedback control)",
    "การควบคุมแบบลำดับชั้น (Hierarchical control)",
    "การควบคุมแบบขนาน (Parallel control)"
  ],
  answer: 1,
  hint: "Think of a thermostat — it constantly compares actual vs desired temperature.",
  explain: "Slide 9-10: Servomechanistic Theory is based on feedback (closed-loop) control. It compares actual movement with intended movement, detects errors, and makes corrections — like a servo mechanism.",
  explainTh: "สไลด์ 9-10: ทฤษฎี Servomechanistic อาศัยการควบคุมแบบป้อนกลับ (closed-loop) เปรียบเทียบการเคลื่อนไหวจริงกับที่ตั้งใจ ตรวจจับข้อผิดพลาด และแก้ไข — เหมือนกลไกเซอร์โว"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "What are the 5 steps of the feedback loop in Servomechanistic Theory?",
  th: "5 ขั้นตอนของวงจรป้อนกลับในทฤษฎี Servomechanistic คืออะไร?",
  options: [
    "วางแผน → ดำเนินการ → ประเมิน → บันทึก → ลืม (Plan → Execute → Evaluate → Record → Forget)",
    "เริ่มต้น → รับ feedback → เปรียบเทียบกับเป้าหมาย → ตรวจจับข้อผิดพลาด → ปรับผลลัพธ์ (Initiate → Receive feedback → Compare with goal → Detect error → Adjust output)",
    "รับรู้ → ตัดสินใจ → ดำเนินการ → ทบทวน → ทำซ้ำ (Perceive → Decide → Act → Review → Repeat)",
    "กระตุ้น → ตอบสนอง → ยับยั้ง → ปรับตัว → หยุด (Stimulate → Respond → Inhibit → Adapt → Stop)"
  ],
  answer: 1,
  hint: "Start the movement, get information back, check if correct, find errors, fix them.",
  explain: "Slide 9-10: The 5 feedback loop steps are: (1) Initiate movement, (2) Receive sensory feedback, (3) Compare with the goal/intended movement, (4) Detect error, (5) Adjust output/correct movement.",
  explainTh: "สไลด์ 9-10: 5 ขั้นตอนของวงจรป้อนกลับ: (1) เริ่มต้นเคลื่อนไหว (2) รับ sensory feedback (3) เปรียบเทียบกับเป้าหมาย (4) ตรวจจับข้อผิดพลาด (5) ปรับแก้การเคลื่อนไหว"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "Servomechanistic (closed-loop) control is best suited for which type of movement?",
  th: "การควบคุมแบบ Servomechanistic (closed-loop) เหมาะที่สุดสำหรับการเคลื่อนไหวประเภทใด?",
  options: [
    "การเคลื่อนไหวแบบ ballistic เช่น การขว้าง (Ballistic movements like throwing)",
    "การเคลื่อนไหวช้า/ต่อเนื่อง/ต้องการความแม่นยำ เช่น การทรงตัว การเขียน (Slow/continuous/accuracy movements like balance, writing)",
    "การเคลื่อนไหวรวดเร็วแบบมีจังหวะ เช่น การวิ่ง (Fast rhythmic movements like running)",
    "การเคลื่อนไหวแบบรีเฟล็กซ์ (Reflex movements)"
  ],
  answer: 1,
  hint: "You need time for feedback to travel and corrections to be made.",
  explain: "Slide 9-10: Closed-loop control works best for slow, continuous, accuracy-demanding movements like balance, writing, and reaching — because there is enough time for sensory feedback to be received and corrections to be made.",
  explainTh: "สไลด์ 9-10: การควบคุมแบบ closed-loop เหมาะกับการเคลื่อนไหวช้า ต่อเนื่อง ต้องการความแม่นยำ เช่น การทรงตัว การเขียน การเอื้อมหยิบ เพราะมีเวลาพอให้รับ sensory feedback และแก้ไขได้"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 1,
  q: "Closed-Loop Theory was proposed by:",
  th: "ทฤษฎี Closed-Loop ถูกเสนอโดย:",
  options: [
    "ริชาร์ด ชมิดท์ (Richard Schmidt)",
    "เบิร์นสไตน์ (Bernstein)",
    "แจ็ค อดัมส์ (Jack Adams)",
    "ฟิตส์ (Fitts)"
  ],
  answer: 2,
  hint: "His theory says feedback is REQUIRED during movement.",
  explain: "Slide 10-11: Jack Adams proposed Closed-Loop Theory, where decisions are made in the brain and feedback is REQUIRED during movement. It's best for slow, precise tasks.",
  explainTh: "สไลด์ 10-11: แจ็ค อดัมส์ เสนอทฤษฎี Closed-Loop โดยการตัดสินใจเกิดขึ้นในสมองและต้องการ feedback ระหว่างเคลื่อนไหว เหมาะสำหรับงานที่ช้าและต้องการความแม่นยำ"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "Open-Loop Theory (Richard Schmidt) states that fast movements are controlled by:",
  th: "ทฤษฎี Open-Loop (ริชาร์ด ชมิดท์) ระบุว่าการเคลื่อนไหวเร็วถูกควบคุมโดย:",
  options: [
    "การเปรียบเทียบ feedback ตลอดเวลา (Continuous feedback comparison)",
    "คำสั่งที่วางแผนล่วงหน้าส่งเป็นข้อความเดียว ไม่ต้องการ feedback ระหว่างทำ (Pre-planned commands sent in single message, no feedback needed during action)",
    "รีเฟล็กซ์อัตโนมัติ (Automatic reflexes)",
    "การประมวลผลแบบขนาน (Parallel processing)"
  ],
  answer: 1,
  hint: "Like a pre-recorded message — once sent, no changes during execution.",
  explain: "Slide 10-11: Open-Loop Theory (Schmidt) says fast/ballistic movements use pre-planned commands sent as a single message. No feedback is needed during the action — like throwing, jumping, or saccadic eye movements.",
  explainTh: "สไลด์ 10-11: ทฤษฎี Open-Loop (ชมิดท์) ระบุว่าการเคลื่อนไหวเร็ว/ballistic ใช้คำสั่งที่วางแผนล่วงหน้าส่งเป็นข้อความเดียว ไม่ต้องการ feedback ระหว่างทำ เช่น การขว้าง การกระโดด การกลอกตาเร็ว"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 3,
  q: "A patient is practicing standing balance on an unstable surface with eyes open, continuously adjusting posture. Which theory best explains this type of motor control?",
  th: "ผู้ป่วยฝึกทรงตัวยืนบนพื้นผิวไม่มั่นคงโดยลืมตา ปรับท่าทางอย่างต่อเนื่อง ทฤษฎีใดอธิบายการควบคุมการเคลื่อนไหวนี้ได้ดีที่สุด?",
  options: [
    "ทฤษฎี Open-Loop (Open-Loop Theory)",
    "ทฤษฎีโปรแกรมมอเตอร์ (Motor Programming Theory)",
    "ทฤษฎี Closed-Loop / Servomechanistic (Closed-Loop / Servomechanistic Theory)",
    "ทฤษฎีรีเฟล็กซ์ (Reflex Theory)"
  ],
  answer: 2,
  hint: "Continuous adjustment based on sensory feedback = closed loop.",
  explain: "Slide 9-11: Standing balance with continuous postural adjustments is a classic example of closed-loop/servomechanistic control — the patient constantly receives feedback (visual, vestibular, proprioceptive), compares with the goal, and corrects.",
  explainTh: "สไลด์ 9-11: การทรงตัวยืนที่มีการปรับท่าทางอย่างต่อเนื่องเป็นตัวอย่างของการควบคุมแบบ closed-loop/servomechanistic — ผู้ป่วยรับ feedback ตลอดเวลา (ตา การทรงตัว proprioception) เปรียบเทียบกับเป้าหมาย และแก้ไข"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 1,
  q: "PDP (Parallel Distributed Processing) Theory states that:",
  th: "ทฤษฎี PDP (Parallel Distributed Processing) ระบุว่า:",
  options: [
    "มีศูนย์ควบคุมเดียวในสมอง (There is a single control center in the brain)",
    "การควบคุมเป็นแบบบนลงล่าง (Control is top-down)",
    "หลายส่วนของสมองทำงานพร้อมกัน ไม่มีศูนย์ควบคุมเดียว (Multiple brain regions work simultaneously, no single control center)",
    "การเคลื่อนไหวต้องการ feedback เสมอ (Movement always requires feedback)"
  ],
  answer: 2,
  hint: "Parallel = simultaneous, distributed = spread across areas.",
  explain: "Slide 11-12: PDP Theory states there is no single control center. Multiple brain regions work simultaneously — perception, decision, and action happen in parallel with no fixed sequence.",
  explainTh: "สไลด์ 11-12: ทฤษฎี PDP ระบุว่าไม่มีศูนย์ควบคุมเดียว หลายส่วนของสมองทำงานพร้อมกัน — การรับรู้ การตัดสินใจ และการกระทำเกิดขึ้นแบบขนานโดยไม่มีลำดับตายตัว"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "A strength of PDP Theory is that it can explain:",
  th: "จุดแข็งของทฤษฎี PDP คือสามารถอธิบาย:",
  options: [
    "การเคลื่อนไหวแบบ ballistic (Ballistic movements)",
    "การยืดหยุ่นของระบบประสาท (neuroplasticity) และการฟื้นตัวหลังสมองบาดเจ็บ (Neuroplasticity and recovery after brain injury)",
    "กลไกประสาทที่เฉพาะเจาะจง (Specific neural mechanisms)",
    "การเคลื่อนไหวแบบจังหวะ (Rhythmic movements)"
  ],
  answer: 1,
  hint: "If processing is distributed, damage to one area doesn't mean total loss.",
  explain: "Slide 11-12: PDP Theory explains neuroplasticity and recovery after brain injury — because processing is distributed across multiple regions, other areas can compensate when one is damaged.",
  explainTh: "สไลด์ 11-12: ทฤษฎี PDP อธิบาย neuroplasticity และการฟื้นตัวหลังสมองบาดเจ็บ — เพราะการประมวลผลกระจายในหลายส่วน ส่วนอื่นสามารถชดเชยเมื่อส่วนหนึ่งเสียหาย"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 1,
  q: "Task-Oriented Theory states that people learn movement best from:",
  th: "ทฤษฎี Task-Oriented ระบุว่าคนเรียนรู้การเคลื่อนไหวดีที่สุดจาก:",
  options: [
    "การแยกฝึกกล้ามเนื้อทีละมัด (Isolated individual muscle training)",
    "งานที่มีเป้าหมายในบริบทจริง (Functional tasks in real context)",
    "การยับยั้งรีเฟล็กซ์ (Reflex inhibition)",
    "การวางแผนโปรแกรมมอเตอร์ (Motor program planning)"
  ],
  answer: 1,
  hint: "Real tasks in real settings — not isolated muscle exercises.",
  explain: "Slide 12-13: Task-Oriented Theory says people learn best from functional tasks in real context, not isolated muscles. There is no single 'correct' movement pattern — it's a problem-solving process based on neuroplasticity.",
  explainTh: "สไลด์ 12-13: ทฤษฎี Task-Oriented ระบุว่าคนเรียนรู้ดีที่สุดจากงานที่ใช้ได้จริงในบริบทจริง ไม่ใช่กล้ามเนื้อแยกส่วน ไม่มีรูปแบบการเคลื่อนไหวที่ 'ถูกต้อง' เพียงแบบเดียว เป็นกระบวนการแก้ปัญหาบนพื้นฐาน neuroplasticity"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "The 4 key components of Task-Oriented Theory are:",
  th: "องค์ประกอบสำคัญ 4 ข้อของทฤษฎี Task-Oriented คือ:",
  options: [
    "สิ่งเร้า + ตัวนำ + ตัวรับ + ตัวปฏิบัติการ (Stimulus + Conductor + Receptor + Effector)",
    "งานที่มีเป้าหมาย + การฝึกซ้ำ + ความหลากหลาย + การมีส่วนร่วมอย่างกระตือรือร้น (Goal-directed task + Repetition + Variability + Active participation)",
    "การรับรู้ + การตัดสินใจ + การกระทำ + การป้อนกลับ (Perception + Decision + Action + Feedback)",
    "การแข็งตัว + การปลดปล่อย + การใช้ประโยชน์ + การอัตโนมัติ (Freezing + Releasing + Exploiting + Automating)"
  ],
  answer: 1,
  hint: "Practice real tasks, repeat them, vary the conditions, be actively engaged.",
  explain: "Slide 12-13: The 4 components of Task-Oriented Theory are: (1) Goal-directed task, (2) Repetition, (3) Variability (different contexts), (4) Active participation by the learner.",
  explainTh: "สไลด์ 12-13: องค์ประกอบ 4 ข้อของทฤษฎี Task-Oriented: (1) งานที่มีเป้าหมาย (2) การฝึกซ้ำ (3) ความหลากหลาย (บริบทต่างๆ) (4) การมีส่วนร่วมอย่างกระตือรือร้นของผู้เรียน"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 1,
  q: "Ecological Theory emphasizes the concept of:",
  th: "ทฤษฎีเชิงนิเวศวิทยาเน้นแนวคิดเรื่อง:",
  options: [
    "การจัดเก็บโปรแกรมมอเตอร์ (Stored motor programs)",
    "การเชื่อมโยงการรับรู้-การกระทำ และ affordances (Perception-action coupling and affordances)",
    "การควบคุมแบบลำดับชั้น (Hierarchical control)",
    "วงจรป้อนกลับ (Feedback loops)"
  ],
  answer: 1,
  hint: "The environment directly offers action possibilities.",
  explain: "Slide 13-14: Ecological Theory emphasizes perception-action coupling and affordances — movement comes from direct perception leading to action without complex brain processing. The environment directly offers movement possibilities.",
  explainTh: "สไลด์ 13-14: ทฤษฎีเชิงนิเวศวิทยาเน้นการเชื่อมโยงการรับรู้-การกระทำ และ affordances — การเคลื่อนไหวเกิดจากการรับรู้โดยตรงนำไปสู่การกระทำโดยไม่ต้องผ่านการประมวลผลที่ซับซ้อนในสมอง"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 3,
  q: "A Parkinson's patient walks with freezing gait but can step over lines taped on the floor. Ecological Theory explains this because:",
  th: "ผู้ป่วยพาร์กินสันเดินแบบ freezing gait แต่สามารถก้าวข้ามเส้นที่ติดบนพื้นได้ ทฤษฎีเชิงนิเวศวิทยาอธิบายเพราะ:",
  options: [
    "เส้นกระตุ้นรีเฟล็กซ์การก้าว (Lines stimulate stepping reflexes)",
    "เส้นเปิดใช้งานโปรแกรมมอเตอร์ที่จัดเก็บไว้ (Lines activate stored motor programs)",
    "เส้นเป็น visual affordance ที่เชื่อมโยงการรับรู้กับการกระทำโดยตรง (Lines are visual affordances that directly couple perception to action)",
    "เส้นยับยั้ง basal ganglia (Lines inhibit basal ganglia)"
  ],
  answer: 2,
  hint: "The visual cue on the floor offers an action opportunity — step over it.",
  explain: "Slide 13-14: In Ecological Theory, the lines on the floor serve as visual affordances — environmental cues that directly couple perception to action. The patient perceives the line and steps over it without needing complex motor planning, bypassing the freezing.",
  explainTh: "สไลด์ 13-14: ในทฤษฎีเชิงนิเวศวิทยา เส้นบนพื้นทำหน้าที่เป็น visual affordance — ตัวบ่งชี้สิ่งแวดล้อมที่เชื่อมการรับรู้กับการกระทำโดยตรง ผู้ป่วยรับรู้เส้นและก้าวข้ามโดยไม่ต้องวางแผนการเคลื่อนไหวที่ซับซ้อน ข้ามปัญหา freezing ได้"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 3,
  q: "Which of the following movements is best explained by Open-Loop Theory?",
  th: "การเคลื่อนไหวใดต่อไปนี้อธิบายได้ดีที่สุดด้วยทฤษฎี Open-Loop?",
  options: [
    "การเขียนตัวอักษรอย่างช้าๆ (Slowly writing a letter)",
    "การเอื้อมหยิบแก้วน้ำ (Reaching for a cup of water)",
    "การขว้างลูกเบสบอล (Throwing a baseball)",
    "การยืนทรงตัวบนขาข้างเดียว (Standing balance on one leg)"
  ],
  answer: 2,
  hint: "Once the ball leaves your hand, you can't change the throw.",
  explain: "Slide 10-11: Throwing a baseball is a ballistic movement — once initiated, it's too fast for feedback correction. The entire movement is pre-planned and sent as a single command (open-loop). Writing, reaching, and balance all use feedback (closed-loop).",
  explainTh: "สไลด์ 10-11: การขว้างลูกเบสบอลเป็นการเคลื่อนไหวแบบ ballistic — เมื่อเริ่มแล้วเร็วเกินกว่าจะแก้ไขด้วย feedback การเคลื่อนไหวทั้งหมดวางแผนล่วงหน้าและส่งเป็นคำสั่งเดียว (open-loop)"
},
{
  topic: "MC-ML: Servo, Loop & Processing Theories",
  diff: 2,
  q: "A limitation of Ecological Theory is:",
  th: "ข้อจำกัดของทฤษฎีเชิงนิเวศวิทยาคือ:",
  options: [
    "ไม่เน้นสิ่งแวดล้อม (Does not focus on environment)",
    "ไม่คำนึงถึงบทบาทของ CNS มากนัก (Less focus on the role of the CNS)",
    "ใช้ไม่ได้กับสถานการณ์จริง (Not applicable to real-life situations)",
    "ต้องการ feedback เสมอ (Always requires feedback)"
  ],
  answer: 1,
  hint: "It focuses on perception-environment but downplays what happens inside the brain.",
  explain: "Slide 13-14: Ecological Theory's limitation is less focus on CNS mechanisms. It emphasizes the direct perception-action relationship and environment but doesn't explain the neural processing involved.",
  explainTh: "สไลด์ 13-14: ข้อจำกัดของทฤษฎีเชิงนิเวศวิทยาคือไม่เน้นกลไกของ CNS มากนัก เน้นความสัมพันธ์โดยตรงระหว่างการรับรู้-การกระทำและสิ่งแวดล้อม แต่ไม่อธิบายการประมวลผลทางประสาทที่เกี่ยวข้อง"
},

// ============================================================
// TOPIC 4: MC-ML: Motor Learning Theories (~14 Qs)
// ============================================================

{
  topic: "MC-ML: Motor Learning Theories",
  diff: 1,
  q: "Motor learning is defined as:",
  th: "การเรียนรู้การเคลื่อนไหว (Motor learning) หมายถึง:",
  options: [
    "การเปลี่ยนแปลงชั่วคราวในความสามารถการเคลื่อนไหว (Temporary change in movement ability)",
    "การเปลี่ยนแปลงถาวรในความสามารถการเคลื่อนไหวจากประสบการณ์/การฝึก (Permanent change in movement ability from experience/practice)",
    "ความสามารถในการทำรีเฟล็กซ์ (Ability to perform reflexes)",
    "การเปลี่ยนแปลงทางกายภาพของกล้ามเนื้อ (Physical changes in muscles)"
  ],
  answer: 1,
  hint: "It must be lasting (not temporary) and comes from practice.",
  explain: "Slide 15-16: Motor learning is a relatively permanent change in movement ability resulting from experience, practice, and repetition. It cannot be measured directly but is inferred from behavior.",
  explainTh: "สไลด์ 15-16: การเรียนรู้การเคลื่อนไหวคือการเปลี่ยนแปลงที่ค่อนข้างถาวรในความสามารถการเคลื่อนไหว เกิดจากประสบการณ์ การฝึก และการทำซ้ำ ไม่สามารถวัดได้โดยตรง แต่อนุมานได้จากพฤติกรรม"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "Which of the following is NOT one of the 4 key concepts of motor learning?",
  th: "ข้อใดต่อไปนี้ไม่ใช่ 1 ใน 4 แนวคิดหลักของการเรียนรู้การเคลื่อนไหว?",
  options: [
    "เป็นกระบวนการพัฒนาทักษะ (Process of developing skill)",
    "มาจากประสบการณ์/การฝึก (From experience/practice)",
    "สามารถวัดได้โดยตรง (Can be measured directly)",
    "เป็นการเปลี่ยนแปลงที่ค่อนข้างถาวร (Relatively permanent change)"
  ],
  answer: 2,
  hint: "We can only see its effects, not the learning process itself.",
  explain: "Slide 15-16: The 4 concepts are: (1) process of developing skill, (2) from experience/practice, (3) can't measure directly — inferred from behavior, (4) relatively permanent change. Direct measurement is NOT possible.",
  explainTh: "สไลด์ 15-16: 4 แนวคิดคือ: (1) กระบวนการพัฒนาทักษะ (2) จากประสบการณ์/การฝึก (3) วัดโดยตรงไม่ได้ อนุมานจากพฤติกรรม (4) การเปลี่ยนแปลงที่ค่อนข้างถาวร การวัดโดยตรงไม่ได้"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "Adams' Closed-Loop Theory of motor learning states that learning occurs through:",
  th: "ทฤษฎี Closed-Loop ของอดัมส์สำหรับการเรียนรู้การเคลื่อนไหวระบุว่าการเรียนรู้เกิดจาก:",
  options: [
    "การสร้างกฎทั่วไป/schema (Creating general rules/schemas)",
    "การเปรียบเทียบการเคลื่อนไหวกับแม่แบบที่ถูกต้องผ่าน feedback (Comparing movement with correct template through feedback)",
    "การเชื่อมโยงสิ่งเร้ากับการตอบสนอง (Stimulus-response association)",
    "การลดองศาอิสระ (Reducing degrees of freedom)"
  ],
  answer: 1,
  hint: "Learn by comparing what you did with what you should have done.",
  explain: "Slide 16-17: Adams' Closed-Loop Theory says learning occurs through feedback comparison. The brain commands movement → body moves → sensory feedback is received → compared with the correct pattern → adjusted. This repeats until accurate.",
  explainTh: "สไลด์ 16-17: ทฤษฎี Closed-Loop ของอดัมส์ระบุว่าการเรียนรู้เกิดจากการเปรียบเทียบ feedback สมองสั่งเคลื่อนไหว → ร่างกายเคลื่อน → รับ sensory feedback → เปรียบเทียบกับรูปแบบที่ถูกต้อง → ปรับแก้ ทำซ้ำจนแม่นยำ"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 1,
  q: "Schmidt's Schema Theory (1975) proposes that the brain creates:",
  th: "ทฤษฎี Schema ของชมิดท์ (1975) เสนอว่าสมองสร้าง:",
  options: [
    "ความจำการเคลื่อนไหวเฉพาะเจาะจง (Specific movement memories)",
    "วงจรรีเฟล็กซ์ใหม่ (New reflex circuits)",
    "กฎทั่วไป/schema ไม่ใช่ความจำเฉพาะเจาะจง (General rules/schemas, not specific memories)",
    "Central Pattern Generators ใหม่ (New CPGs)"
  ],
  answer: 2,
  hint: "Schemas are like rules or formulas, not specific recordings of each movement.",
  explain: "Slide 17-18: Schmidt's Schema Theory (1975) addresses Adams' limitations by proposing open-loop learning. The brain creates general rules/schemas rather than storing specific movement memories, allowing adaptation to novel situations.",
  explainTh: "สไลด์ 17-18: ทฤษฎี Schema ของชมิดท์ (1975) แก้ข้อจำกัดของอดัมส์โดยเสนอการเรียนรู้แบบ open-loop สมองสร้างกฎทั่วไป/schema แทนการจัดเก็บความจำการเคลื่อนไหวเฉพาะ ทำให้ปรับตัวกับสถานการณ์ใหม่ได้"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 3,
  q: "In Schmidt's Schema Theory, the Recall Schema and Recognition Schema differ in that:",
  th: "ในทฤษฎี Schema ของชมิดท์ Recall Schema และ Recognition Schema ต่างกันตรงที่:",
  options: [
    "Recall Schema ใช้สำหรับการเคลื่อนไหวช้า Recognition Schema สำหรับเร็ว (Recall for slow, Recognition for fast movement)",
    "Recall Schema เกี่ยวกับคำสั่งมอเตอร์ Recognition Schema เกี่ยวกับการประเมินทางประสาทสัมผัส (Recall is motor/commands, Recognition is sensory/evaluation)",
    "Recall Schema จัดเก็บในหน่วยความจำระยะสั้น Recognition Schema ในระยะยาว (Recall in short-term, Recognition in long-term memory)",
    "ไม่มีความแตกต่าง ทั้งสองเหมือนกัน (No difference, both are the same)"
  ],
  answer: 1,
  hint: "One is for producing movement, the other for judging if it was correct.",
  explain: "Slide 17-18: Recall Schema is the motor schema responsible for generating movement commands (motor/commands). Recognition Schema is the sensory schema for evaluating whether the movement was correct (sensory/evaluation).",
  explainTh: "สไลด์ 17-18: Recall Schema เป็น schema มอเตอร์สำหรับสร้างคำสั่งการเคลื่อนไหว (คำสั่ง) Recognition Schema เป็น schema ประสาทสัมผัสสำหรับประเมินว่าการเคลื่อนไหวถูกต้องหรือไม่ (การประเมิน)"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "Schmidt's Schema Theory stores 4 types of information. Which of the following is NOT one of them?",
  th: "ทฤษฎี Schema ของชมิดท์จัดเก็บข้อมูล 4 ประเภท ข้อใดไม่ใช่?",
  options: [
    "เงื่อนไขเริ่มต้น (Initial conditions)",
    "ข้อกำหนดการตอบสนอง (Response specifications)",
    "ความจำรีเฟล็กซ์ (Reflex memory)",
    "ผลลัพธ์ทางประสาทสัมผัส (Sensory consequences)"
  ],
  answer: 2,
  hint: "The 4 types relate to conditions, specifications, consequences, and outcomes.",
  explain: "Slide 17-18: Schmidt's 4 stored information types are: (1) Initial conditions, (2) Response specifications, (3) Sensory consequences, (4) Response outcome. Reflex memory is not part of Schema Theory.",
  explainTh: "สไลด์ 17-18: ข้อมูล 4 ประเภทของชมิดท์: (1) เงื่อนไขเริ่มต้น (2) ข้อกำหนดการตอบสนอง (3) ผลลัพธ์ทางประสาทสัมผัส (4) ผลลัพธ์การตอบสนอง ความจำรีเฟล็กซ์ไม่ใช่ส่วนหนึ่งของทฤษฎี Schema"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 1,
  q: "Fitts & Posner's model describes how many stages of motor learning?",
  th: "แบบจำลองของ Fitts & Posner อธิบายขั้นตอนการเรียนรู้การเคลื่อนไหวกี่ขั้น?",
  options: [
    "2 ขั้น (2 stages)",
    "3 ขั้น (3 stages)",
    "4 ขั้น (4 stages)",
    "5 ขั้น (5 stages)"
  ],
  answer: 1,
  hint: "Cognitive → Associative → ?",
  explain: "Slide 18-19: Fitts & Posner (1967) described 3 stages of motor learning: Cognitive stage (beginner), Associative stage (improving), and Autonomous stage (automatic).",
  explainTh: "สไลด์ 18-19: Fitts & Posner (1967) อธิบาย 3 ขั้นตอนการเรียนรู้: ขั้นรู้คิด (Cognitive - ผู้เริ่มต้น) ขั้นเชื่อมโยง (Associative - ดีขึ้น) และขั้นอัตโนมัติ (Autonomous - อัตโนมัติ)"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "A patient learning to use crutches thinks about every step, makes many errors, and needs constant instruction. According to Fitts & Posner, this patient is in which stage?",
  th: "ผู้ป่วยที่เรียนใช้ไม้ค้ำยันต้องคิดทุกขั้นตอน ทำผิดพลาดมาก และต้องการคำสั่งตลอดเวลา ตาม Fitts & Posner ผู้ป่วยอยู่ในขั้นใด?",
  options: [
    "ขั้นอัตโนมัติ (Autonomous stage)",
    "ขั้นเชื่อมโยง (Associative stage)",
    "ขั้นรู้คิด (Cognitive stage)",
    "ขั้นผู้เชี่ยวชาญ (Expert stage)"
  ],
  answer: 2,
  hint: "Beginners have to think consciously about every movement component.",
  explain: "Slide 18-19: The Cognitive stage is characterized by: thinking about every step, many errors, needing instruction/demonstration, and high attention demand. This is the beginner stage.",
  explainTh: "สไลด์ 18-19: ขั้นรู้คิด (Cognitive) มีลักษณะ: ต้องคิดทุกขั้นตอน ผิดพลาดมาก ต้องการคำสั่ง/สาธิต และต้องใช้ความสนใจสูง เป็นขั้นผู้เริ่มต้น"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "In the Autonomous stage of Fitts & Posner's model, the learner can:",
  th: "ในขั้นอัตโนมัติของแบบจำลอง Fitts & Posner ผู้เรียนสามารถ:",
  options: [
    "ต้องคิดทุกขั้นตอน (Must think about every step)",
    "เริ่มแก้ไขตนเองได้ (Begin to self-correct)",
    "ทำได้อัตโนมัติ แม่นยำ เร็ว ใช้ความสนใจน้อย สามารถทำ multitask ได้ (Perform automatically, accurately, fast, with low attention, can multitask)",
    "ยังผิดพลาดบ่อยแต่ราบรื่นขึ้น (Still makes frequent errors but smoother)"
  ],
  answer: 2,
  hint: "This is the expert level — like driving without thinking about it.",
  explain: "Slide 18-19: The Autonomous stage is characterized by automatic, accurate, fast performance with low attention demand. The learner can multitask and is ready for real-life application.",
  explainTh: "สไลด์ 18-19: ขั้นอัตโนมัติมีลักษณะ: ทำได้อัตโนมัติ แม่นยำ เร็ว ใช้ความสนใจน้อย สามารถทำ multitask ได้ พร้อมสำหรับการนำไปใช้ในชีวิตจริง"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 3,
  q: "A PT observes that a patient walking with a walker can now maintain a conversation while walking. This suggests the patient has progressed from the Associative to the:",
  th: "นักกายภาพบำบัดสังเกตว่าผู้ป่วยเดินด้วย walker สามารถคุยไปพร้อมเดินได้ แสดงว่าผู้ป่วยพัฒนาจากขั้นเชื่อมโยงไปสู่ขั้น:",
  options: [
    "ขั้นรู้คิด (Cognitive stage)",
    "ขั้นอัตโนมัติ (Autonomous stage)",
    "ขั้นรีเฟล็กซ์ (Reflex stage)",
    "ขั้นแข็งตัว (Freezing stage)"
  ],
  answer: 1,
  hint: "Multitasking (walking + talking) means the primary task is automatic.",
  explain: "Slide 18-19: The ability to multitask (walk and talk simultaneously) is a hallmark of the Autonomous stage. Walking has become automatic enough that attention can be divided to conversation.",
  explainTh: "สไลด์ 18-19: ความสามารถในการทำ multitask (เดินและคุยพร้อมกัน) เป็นลักษณะเฉพาะของขั้นอัตโนมัติ การเดินเป็นอัตโนมัติมากพอที่จะแบ่งความสนใจไปคุยสนทนาได้"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 1,
  q: "The 3 systems involved in motor learning are:",
  th: "3 ระบบที่เกี่ยวข้องกับการเรียนรู้การเคลื่อนไหวคือ:",
  options: [
    "กระดูก + กล้ามเนื้อ + เอ็น (Bone + Muscle + Tendon)",
    "การรับรู้ + การรู้คิด + การกระทำ (Perception + Cognition + Action)",
    "สมอง + ไขสันหลัง + เส้นประสาท (Brain + Spinal cord + Nerves)",
    "ตา + หู + กล้ามเนื้อ (Eyes + Ears + Muscles)"
  ],
  answer: 1,
  hint: "Sense the world, process it, then act on it.",
  explain: "Slide 15-16: Motor learning involves 3 systems: Perception (sensory input), Cognition (processing/decision-making), and Action (motor output). It's not just muscle — it requires brain integration.",
  explainTh: "สไลด์ 15-16: การเรียนรู้การเคลื่อนไหวเกี่ยวข้องกับ 3 ระบบ: การรับรู้ (sensory input) การรู้คิด (การประมวลผล/ตัดสินใจ) และการกระทำ (motor output) ไม่ใช่แค่กล้ามเนื้อ แต่ต้องอาศัยการบูรณาการของสมอง"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 3,
  q: "Cognitive Theory of motor learning emphasizes that learning involves which mental processes?",
  th: "ทฤษฎีการรู้คิดของการเรียนรู้การเคลื่อนไหวเน้นว่าการเรียนรู้เกี่ยวข้องกับกระบวนการทางจิตใด?",
  options: [
    "เฉพาะความจำเท่านั้น (Only memory)",
    "การรับรู้ ความจำ ความเข้าใจ การให้เหตุผล และการแก้ปัญหา (Perception, memory, understanding, reasoning, and problem solving)",
    "เฉพาะการรับรู้ทางสายตา (Only visual perception)",
    "เฉพาะการตอบสนองอัตโนมัติ (Only automatic responses)"
  ],
  answer: 1,
  hint: "Cognition encompasses all higher mental functions, not just one.",
  explain: "Slide 17: Cognitive Theory says motor learning involves multiple mental processes: perception, memory, understanding, reasoning, and problem solving. Clinical applications include gait analysis before training and teaching patients the rationale.",
  explainTh: "สไลด์ 17: ทฤษฎีการรู้คิดระบุว่าการเรียนรู้การเคลื่อนไหวเกี่ยวข้องกับกระบวนการทางจิตหลายอย่าง: การรับรู้ ความจำ ความเข้าใจ การให้เหตุผล และการแก้ปัญหา การประยุกต์ใช้ทางคลินิก เช่น วิเคราะห์การเดินก่อนฝึก"
},
{
  topic: "MC-ML: Motor Learning Theories",
  diff: 2,
  q: "A strength of Schmidt's Schema Theory over Adams' Closed-Loop Theory is that Schema Theory can explain:",
  th: "จุดแข็งของทฤษฎี Schema ของชมิดท์เหนือทฤษฎี Closed-Loop ของอดัมส์คือทฤษฎี Schema อธิบายได้ถึง:",
  options: [
    "เฉพาะการเคลื่อนไหวช้าและแม่นยำ (Only slow and precise movements)",
    "สถานการณ์ใหม่ การเคลื่อนไหวเร็ว และประโยชน์ของ variable practice (Novel situations, fast movements, and variable practice benefits)",
    "เฉพาะการเคลื่อนไหวแบบรีเฟล็กซ์ (Only reflex movements)",
    "เฉพาะการเคลื่อนไหวที่ต้องการ feedback ตลอดเวลา (Only movements requiring continuous feedback)"
  ],
  answer: 1,
  hint: "Schemas are general rules that can be applied to new situations.",
  explain: "Slide 17-18: Schmidt's Schema Theory can explain novel situations (general rules apply to new contexts), fast movements (open-loop, no feedback needed), and why variable practice improves learning (builds richer schemas).",
  explainTh: "สไลด์ 17-18: ทฤษฎี Schema ของชมิดท์อธิบายสถานการณ์ใหม่ได้ (กฎทั่วไปใช้ได้กับบริบทใหม่) การเคลื่อนไหวเร็ว (open-loop ไม่ต้อง feedback) และทำไม variable practice ช่วยการเรียนรู้ (สร้าง schema ที่หลากหลายขึ้น)"
},

// ============================================================
// TOPIC 5: MC-ML: Learning Types & Feedback (~12 Qs)
// ============================================================

{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 1,
  q: "Classical conditioning was discovered by:",
  th: "การวางเงื่อนไขแบบคลาสสิกถูกค้นพบโดย:",
  options: [
    "สกินเนอร์ (Skinner)",
    "พาฟลอฟ (Pavlov)",
    "เชอร์ริงตัน (Sherrington)",
    "ชมิดท์ (Schmidt)"
  ],
  answer: 1,
  hint: "Famous for his dog experiments with bells and food.",
  explain: "Slide 20: Classical conditioning was discovered by Pavlov. It involves pairing an unconditioned stimulus (UCS) with a conditioned stimulus (CS) to produce a conditioned response (CR).",
  explainTh: "สไลด์ 20: การวางเงื่อนไขแบบคลาสสิกค้นพบโดยพาฟลอฟ เป็นการจับคู่สิ่งเร้าที่ไม่มีเงื่อนไข (UCS) กับสิ่งเร้าที่มีเงื่อนไข (CS) เพื่อสร้างการตอบสนองที่มีเงื่อนไข (CR)"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 2,
  q: "A PT assists a patient's arm movement while giving a verbal command 'Lift your arm.' After many repetitions, the patient lifts the arm with just the verbal command alone. This is an example of:",
  th: "นักกายภาพบำบัดช่วยเคลื่อนแขนผู้ป่วยพร้อมสั่ง 'ยกแขน' หลังทำซ้ำหลายครั้ง ผู้ป่วยยกแขนได้ด้วยคำสั่งเพียงอย่างเดียว นี่คือตัวอย่างของ:",
  options: [
    "การวางเงื่อนไขแบบการกระทำ (Operant conditioning)",
    "การชินชา (Habituation)",
    "การวางเงื่อนไขแบบคลาสสิก (Classical conditioning)",
    "การเรียนรู้ทางปัญญา (Cognitive learning)"
  ],
  answer: 2,
  hint: "Physical assistance (UCS) paired with verbal command (CS) → movement with just verbal (CR).",
  explain: "Slide 20: This is classical conditioning. The assistance (UCS) paired repeatedly with the verbal command (CS) creates a conditioned response (CR) where the verbal command alone triggers movement.",
  explainTh: "สไลด์ 20: นี่คือการวางเงื่อนไขแบบคลาสสิก การช่วยเหลือ (UCS) จับคู่ซ้ำๆ กับคำสั่ง (CS) สร้างการตอบสนองที่มีเงื่อนไข (CR) ที่คำสั่งอย่างเดียวกระตุ้นการเคลื่อนไหวได้"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 2,
  q: "A PT praises a patient every time they complete 10 steps without the walker. The patient walks more independently. This is an example of:",
  th: "นักกายภาพบำบัดชมผู้ป่วยทุกครั้งที่เดินได้ 10 ก้าวโดยไม่ใช้ walker ผู้ป่วยเดินเองมากขึ้น นี่คือตัวอย่างของ:",
  options: [
    "การเสริมแรงทางลบ (Negative reinforcement)",
    "การลงโทษทางบวก (Positive punishment)",
    "การเสริมแรงทางบวก (Positive reinforcement)",
    "การลงโทษทางลบ (Negative punishment)"
  ],
  answer: 2,
  hint: "Adding something pleasant (praise) to increase a behavior.",
  explain: "Slide 20-21: Positive reinforcement = giving something pleasant (praise) to increase a desired behavior (independent walking). This is operant conditioning (Skinner).",
  explainTh: "สไลด์ 20-21: การเสริมแรงทางบวก = ให้สิ่งที่น่าพอใจ (คำชม) เพื่อเพิ่มพฤติกรรมที่ต้องการ (เดินเอง) เป็นการวางเงื่อนไขแบบการกระทำ (สกินเนอร์)"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 3,
  q: "A patient with BPPV initially feels severe dizziness during vestibular exercises but after repeated sessions, the dizziness decreases. This is an example of:",
  th: "ผู้ป่วย BPPV เริ่มแรกรู้สึกเวียนศีรษะรุนแรงระหว่างฝึก vestibular แต่หลังทำซ้ำหลายครั้ง อาการเวียนลดลง นี่คือตัวอย่างของ:",
  options: [
    "การวางเงื่อนไขแบบคลาสสิก (Classical conditioning)",
    "การรับรู้ใหม่ (Sensitization)",
    "การชินชา/การลดความไว (Habituation/Desensitization)",
    "การเสริมแรงทางบวก (Positive reinforcement)"
  ],
  answer: 2,
  hint: "Response decreases to a repeated, meaningless stimulus — requires memory.",
  explain: "Slide 21: Habituation/Desensitization occurs when the response (dizziness) decreases to a repeated meaningless stimulus (vestibular exercises). The brain learns the stimulus is not dangerous. This requires memory and is a form of non-associative learning.",
  explainTh: "สไลด์ 21: การชินชา/การลดความไวเกิดขึ้นเมื่อการตอบสนอง (เวียนศีรษะ) ลดลงเมื่อได้รับสิ่งเร้าซ้ำๆ ที่ไม่มีอันตราย (ฝึก vestibular) สมองเรียนรู้ว่าสิ่งเร้าไม่อันตราย ต้องอาศัยความจำ เป็นการเรียนรู้แบบไม่เชื่อมโยง"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 2,
  q: "Sensitization/Sensory reeducation is used clinically for patients with:",
  th: "การเพิ่มความไว/การฝึกรับความรู้สึกใหม่ใช้ทางคลินิกสำหรับผู้ป่วยที่มี:",
  options: [
    "อาการปวดเรื้อรัง (Chronic pain)",
    "Spasticity",
    "อาการชา/บาดเจ็บเส้นประสาท/โรคหลอดเลือดสมอง (Numbness/nerve injury/stroke)",
    "กล้ามเนื้ออ่อนแรง (Muscle weakness)"
  ],
  answer: 2,
  hint: "Increasing sensitivity through systematic stimulation for patients who lost sensation.",
  explain: "Slide 21: Sensitization/Sensory reeducation increases sensitivity through systematic stimulation. It is used for patients with numbness, nerve injury, or stroke who have decreased sensation.",
  explainTh: "สไลด์ 21: การเพิ่มความไว/การฝึกรับความรู้สึกใหม่เพิ่มความไวผ่านการกระตุ้นอย่างเป็นระบบ ใช้สำหรับผู้ป่วยที่มีอาการชา บาดเจ็บเส้นประสาท หรือโรคหลอดเลือดสมองที่สูญเสียการรับความรู้สึก"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 1,
  q: "Which of the following is an example of task-intrinsic feedback?",
  th: "ข้อใดต่อไปนี้เป็นตัวอย่างของ task-intrinsic feedback?",
  options: [
    "นักกายภาพบำบัดบอกว่า 'เข่าตรงดีแล้ว' (PT says 'Good, your knee is straight')",
    "ดูวิดีโอการเดินย้อนหลัง (Watching video playback of walking)",
    "การรับรู้ตำแหน่งข้อต่อขณะเดิน (Proprioception of joint position during walking)",
    "ข้อมูล EMG biofeedback (EMG biofeedback data)"
  ],
  answer: 2,
  hint: "Intrinsic = comes from your own body during the task, not from external sources.",
  explain: "Slide 22-23: Task-intrinsic feedback comes from the person's own sensory systems during movement: Visual, Proprioception, Vestibular, and Somatosensory. Proprioception during walking is intrinsic. PT verbal cues, video, and biofeedback are all augmented/external.",
  explainTh: "สไลด์ 22-23: Task-intrinsic feedback มาจากระบบรับความรู้สึกของตัวเองระหว่างเคลื่อนไหว: ตา Proprioception ระบบทรงตัว และ Somatosensory Proprioception ขณะเดินเป็น intrinsic คำแนะนำ วิดีโอ และ biofeedback เป็น augmented/external"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 3,
  q: "Match the somatosensory receptor to its function: Meissner corpuscle detects:",
  th: "จับคู่ตัวรับ somatosensory กับหน้าที่: Meissner corpuscle ตรวจจับ:",
  options: [
    "แรงกด (Pressure — Pacinian)",
    "อุณหภูมิ/การยืด (Temperature/stretch — Ruffini)",
    "สัมผัสเบา (Light touch — Meissner)",
    "ความเจ็บปวด (Pain — Free nerve ending)"
  ],
  answer: 2,
  hint: "Meissner = the lightest touch detection.",
  explain: "Slide 22-23: Somatosensory receptors: Meissner corpuscle = light touch, Pacinian corpuscle = pressure, Ruffini ending = temperature/stretch, Free nerve ending = pain.",
  explainTh: "สไลด์ 22-23: ตัวรับ Somatosensory: Meissner corpuscle = สัมผัสเบา, Pacinian corpuscle = แรงกด, Ruffini ending = อุณหภูมิ/การยืด, Free nerve ending = ความเจ็บปวด"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 1,
  q: "KR (Knowledge of Results) provides feedback about:",
  th: "KR (Knowledge of Results) ให้ข้อมูลป้อนกลับเกี่ยวกับ:",
  options: [
    "รูปแบบการเคลื่อนไหว (Movement pattern)",
    "ผลลัพธ์ของการเคลื่อนไหว (Outcome of the movement)",
    "ความเร็วของการเคลื่อนไหว (Speed of movement)",
    "แรงของกล้ามเนื้อ (Muscle force)"
  ],
  answer: 1,
  hint: "'Results' = what was the outcome? Did you hit the target?",
  explain: "Slide 23-24: KR (Knowledge of Results) is outcome-based feedback — it tells the learner about the result of their movement (e.g., 'You walked 10 meters in 30 seconds'). It can be quantitative, qualitative, or frequency-based.",
  explainTh: "สไลด์ 23-24: KR (Knowledge of Results) คือ feedback ตามผลลัพธ์ — บอกผู้เรียนเกี่ยวกับผลลัพธ์ (เช่น 'คุณเดิน 10 เมตรใน 30 วินาที') มีทั้งแบบเชิงปริมาณ เชิงคุณภาพ และเชิงความถี่"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 2,
  q: "KP (Knowledge of Performance) differs from KR in that KP provides feedback about:",
  th: "KP (Knowledge of Performance) ต่างจาก KR ตรงที่ KP ให้ feedback เกี่ยวกับ:",
  options: [
    "ผลลัพธ์สุดท้ายเท่านั้น (Only the final outcome)",
    "รูปแบบการเคลื่อนไหว เช่น วิดีโอ จลนศาสตร์ biofeedback (Movement pattern — e.g., video, kinematics, biofeedback)",
    "อารมณ์ของผู้ป่วย (Patient's emotions)",
    "จำนวนครั้งที่ฝึก (Number of practice repetitions)"
  ],
  answer: 1,
  hint: "'Performance' = HOW you moved, not just what happened.",
  explain: "Slide 24: KP (Knowledge of Performance) is movement pattern-based feedback. Examples include: video feedback, kinematic feedback (speed/direction), biofeedback (BP/HR), and kinetic feedback (force via EMG). KR is about the outcome, KP is about the process.",
  explainTh: "สไลด์ 24: KP (Knowledge of Performance) คือ feedback ตามรูปแบบการเคลื่อนไหว ตัวอย่าง: วิดีโอ ข้อมูลจลนศาสตร์ (ความเร็ว/ทิศทาง) biofeedback (BP/HR) และข้อมูลแรง (EMG) KR เกี่ยวกับผลลัพธ์ KP เกี่ยวกับกระบวนการ"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 3,
  q: "Research shows that giving KR after EVERY trial can actually hinder long-term learning. Which feedback schedule is recommended instead?",
  th: "งานวิจัยแสดงว่าการให้ KR หลังทุกครั้งอาจขัดขวางการเรียนรู้ระยะยาว ตารางการให้ feedback แบบใดที่แนะนำ?",
  options: [
    "ให้ KR ทุก trial อย่างสม่ำเสมอ (Give KR every trial consistently)",
    "ไม่ให้ KR เลย (Give no KR at all)",
    "ให้ KR แบบสรุปรวม/ลดความถี่ลง (Give summary KR / reduce frequency)",
    "ให้ KR เฉพาะใน trial แรกเท่านั้น (Give KR only on the first trial)"
  ],
  answer: 2,
  hint: "Too much feedback creates dependency — the learner never learns to self-evaluate.",
  explain: "Slide 23-24: Giving KR too frequently can cause the learner to depend on external feedback instead of developing internal error-detection. Summary/reduced-frequency KR encourages self-evaluation and promotes better long-term retention.",
  explainTh: "สไลด์ 23-24: การให้ KR บ่อยเกินไปทำให้ผู้เรียนพึ่งพา feedback ภายนอกแทนที่จะพัฒนาการตรวจจับข้อผิดพลาดด้วยตนเอง KR แบบสรุป/ลดความถี่ส่งเสริมการประเมินตนเองและช่วยให้จดจำระยะยาวดีขึ้น"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 2,
  q: "The Power Law of Practice describes that:",
  th: "กฎแห่งอำนาจของการฝึก (Power Law of Practice) อธิบายว่า:",
  options: [
    "การปรับปรุงเป็นเส้นตรง — ดีขึ้นเท่ากันทุกครั้ง (Improvement is linear — equal gains every time)",
    "ช่วงแรกปรับปรุงเร็ว จากนั้นช้าลงเรื่อยๆ (Initial improvement is rapid, then slows progressively)",
    "ไม่มีการปรับปรุงจนกว่าจะถึงจุดวิกฤต (No improvement until a critical point)",
    "การปรับปรุงเป็นแบบสุ่ม (Improvement is random)"
  ],
  answer: 1,
  hint: "Early gains are big, later gains get smaller and smaller — diminishing returns.",
  explain: "Slide 22: The Power Law of Practice describes that improvement is rapid initially but progressively slows. The rate of learning follows a power curve — early practice yields big gains while later practice produces smaller incremental improvements.",
  explainTh: "สไลด์ 22: กฎแห่งอำนาจของการฝึกอธิบายว่าการปรับปรุงเริ่มต้นเร็วแต่ค่อยๆ ช้าลง อัตราการเรียนรู้เป็นไปตามเส้นโค้งกำลัง — การฝึกช่วงแรกให้ผลมาก ส่วนการฝึกช่วงหลังให้ผลเพิ่มขึ้นทีละน้อย"
},
{
  topic: "MC-ML: Learning Types & Feedback",
  diff: 1,
  q: "Augmented feedback that is given DURING the movement is called:",
  th: "Augmented feedback ที่ให้ระหว่างเคลื่อนไหวเรียกว่า:",
  options: [
    "Terminal feedback",
    "Delayed feedback",
    "Concurrent feedback",
    "Summary feedback"
  ],
  answer: 2,
  hint: "Concurrent = happening at the same time.",
  explain: "Slide 22-23: Concurrent feedback is augmented feedback given during the movement. Terminal feedback is given after the movement is completed. Both are forms of augmented/external feedback.",
  explainTh: "สไลด์ 22-23: Concurrent feedback คือ augmented feedback ที่ให้ระหว่างเคลื่อนไหว Terminal feedback ให้หลังจากเคลื่อนไหวเสร็จ ทั้งสองเป็น augmented/external feedback"
},

];

