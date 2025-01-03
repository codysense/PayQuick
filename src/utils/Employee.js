import avatar from "../images/men_avatar.png";

const importAll = (requireContext) => {
  return requireContext.keys().map((key) => {
    return {
      src: requireContext(key),
      alt: `Description of ${key}`,
    };
  });
};

// Dynamically import images from the folder
const images = importAll(
  require.context("../images/BlackFaces", false, /\.(png|jpe?g|svg)$/)
);

export function getprofilePictures() {
  return images;
}

const profilePictures = getprofilePictures();

const employees = [
  {
    //Personal Information
    StaffID: "000",
    first_name: "",
    last_name: "",
    marital: "",
    gender: "",
    street_Address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    primary_number: "",
    dob: "",
    whatsapp_number: "",
    religion: "",
    status: "",
    hire_Date: "",

    //Next of Kin Information
    nok_fullname: "",
    nok_relationship: "",
    nok_fullname_gender: "",
    nok_phoneNumber: "",
    nok_street_address: "",
    nok_city: "",
    nok_state: "",
    nok_country: "",

    //Guarantor Information
    guarantor_fullname: "",
    guarantor_business_address: "",
    guarantor_phoneNumber: "",
    guarantor_street_address: "",
    guarantor_city: "",
    guarantor_state: "",
    guarantor_country: "",
    guarantor_occupation: "",

    //Financial Information
    financial_bank: "",
    financial_account_number: "",
    financial_account_name: "",
    financial_PFA_id: "",
    financial_PFA_manager: "",
    department: "",
    cader: "",

    username: "",
    password: "",
    profile_picture: avatar,
  },
  {
    //Personal Information
    StaffID: "001",
    first_name: "Jeleel",
    last_name: "Kolapo",
    marital: "Married",
    gender: "Male",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "jeleel@codysense.com",
    primary_number: "08033124491",
    dob: "1985-06-26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Active",
    hire_Date: "2024-0-/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Finance",
    cader: "Manager",

    username: "abu-umar",
    password: "4321",
    profile_picture: profilePictures[0],
  },

  {
    //Personal Information
    StaffID: "002",
    first_name: "Oladele",
    last_name: "Toyosi",
    marital: "Married",
    gender: "Male",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "peter@gmail.com",
    primary_number: "08033124491",
    dob: "1985/06/26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Inactive",
    hire_Date: "2024/07/12",

    //Next of Kin Information
    nok_fullname: "Oladose Segun",
    nok_relationship: "Father",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Admin",
    cader: "Manager",

    username: "peteru",
    password: "1234",
    profile_picture: profilePictures[1],
  },

  {
    //Personal Information
    StaffID: "003",
    first_name: "Rebecca",
    last_name: "Adepeju",
    marital: "Married",
    gender: "Female",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "jeleel@codysense.com",
    primary_number: "08033124491",
    dob: "1985/06/26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Inactive",
    hire_Date: "2024/07/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Sterling Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Manager",
    cader: "Sales",

    username: "tunji",
    password: "abc2@01",
    profile_picture: profilePictures[2],
  },

  {
    //Personal Information
    StaffID: "004",
    first_name: "Sharon",
    last_name: "Olawale",
    marital: "Married",
    gender: "Fale",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "sharon@codysense.com",
    primary_number: "08033124491",
    dob: "1985-06-26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Active",
    hire_Date: "2024-0-/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Production",
    cader: "Supervisor",

    username: "abu-umar",
    password: "12345",
    profile_picture: profilePictures[3],
  },
];

const users = [
  { username: "user1", password: "12345", role: "manager", department: "HR" },
  {
    username: "user2",
    password: "12345",
    role: "Supervisor",
    department: "Admin",
  },
];
export function getUsers() {
  return users;
}

export function saveEmployee(newEmployee) {
  const updatedEmployee = employees.some(
    (employee) => employee.StaffID === newEmployee.StaffID
  )
    ? employees.map((employee) =>
        employee.StaffID === newEmployee.StaffID
          ? { ...employee, ...newEmployee }
          : employee
      )
    : [
        ...employees,
        { ...newEmployee, Status: "Active", HireDate: Date.now().toString() },
      ];

  return updatedEmployee;
}

export function getManagerID() {
  return employees.find(
    (e) => e.department === "Admin" && e.cader === "Manager"
  ).StaffID;
}

export function updateEmployee(employeeDetails) {
  return employees.map((employee) =>
    employee.StaffID === employeeDetails.StaffID
      ? { ...employee, ...employeeDetails }
      : employee
  );
}

export function getEmployees() {
  return employees;
}

export function getEmployee(employeeID) {
  return employees.find((employee) => employee.StaffID === employeeID);
}

export function deleteEmployee(employeeID) {
  return employees.filter((employee) => employee.StaffID !== employeeID);
}

export function activateEmployee(employeeID) {
  const employee = employees.find(
    (employee) => employee.StaffID === employeeID
  );
  if (!employee) return null;
  const updatedData = { ...employee, Status: "Active" };
  return updateEmployee(updatedData);
}

//Department data
const departments = [
  { code: "adm", name: "Admin" },
  { code: "sls", name: "Sales" },
  { code: "prd", name: "Production" },
  { code: "act", name: "Account" },
];

export function getDepartments() {
  return departments;
}

export function getDeptCode(deptName) {
  return (
    departments.find((department) => department.name === deptName)?.code || ""
  );
}

export function addDepartment(department) {
  const checkDuplicate = departments.find(
    (dept) => dept.name === department.name
  );
  if (checkDuplicate) return null;
  return [...departments, department];
}

//Staff Identification info
const staffIDs = [
  { prefix: "act", number: "001" },
  { prefix: "prd", number: "001" },
  { prefix: "adm", number: "001" },
  { prefix: "adm", number: "002" },
];

export function generateStaffID(prefix) {
  const id = String(getNextStaffIDNumber(prefix)).padStart(3, 0);
  return `${prefix}-${id}`;
}

function getNextStaffIDNumber(prefix) {
  const filteredStaff = staffIDs.filter((s) => s.prefix === prefix);

  if (filteredStaff.length === 0) {
    return 1;
  }

  const highestDeptNumber = Math.max(
    ...filteredStaff.map((staff) => parseInt(staff.number, 10))
  );

  return highestDeptNumber + 1;
}

//Leave Management
const staffLeave = [
  {
    staffID: "001",
    annual_leave_bal: 26,
  },
  {
    staffID: "002",
    annual_leave_bal: 28,
  },
  {
    staffID: "003",
    annual_leave_bal: 15,
  },
  {
    staffID: "004",
    annual_leave_bal: 15,
  },
];

export function getAnnualLeaveBal(id) {
  const staff = staffLeave.find((l) => l.staffID === id);
  return staff ? staff.annual_leave_bal : null;
}

const leaveRequests = [
  {
    StaffID: "001",
    fullname: "Jeleel Kolapo",
    department: "Finance",
    cader: "Manager",
    from: "12-14-2024",
    to: "12-28-2024",
    leaveRequest: 14,
    reason: "Education",
    status: "Pending",
  },

  {
    StaffID: "002",
    fullname: "Oladele Taiwo",
    department: "Admin",
    cader: "Manager",
    from: "12-16-2024",
    to: "12-28-2024",
    leaveRequest: 12,
    reason: "Education",
    status: "Pending",
  },

  {
    StaffID: "003",
    fullname: "Adewale Saheed",
    department: "Production",
    cader: "Supervisor",
    from: "12-16-2024",
    to: "12-28-2024",
    leaveRequest: 12,
    reason: "Education",
    status: "Pending",
  },
];

export function getLeaveRequets() {
  return leaveRequests;
}

const notifications = [
  {
    StaffID: "001",
    notification: "Leave approved",
    details:
      "Your 12 days leave between 12-16-2024 and 12-28-2024 has been approved. \n I wish you happy holidays this period.\n Tejuoso Kamoru\n HR Manager",
    status: "unread",
  },
  {
    StaffID: "002",
    notification: "Leave approved",
    details:
      "Your 12 days leave between 12-16-2024 and 12-28-2024 has been approved. \n I wish you happy holidays this period.\n Tejuoso Kamoru\n HR Manager",
    status: "unread",
  },
  {
    StaffID: "003",
    notification: "Leave Rejected",
    details:
      "Your 12 days leave between 12-16-2024 and 12-28-2024 was rejected due to work schedule. \n We advice you should contact HR Manager for more information.\n Tejuoso Kamoru\n HR Manager",
    status: "unread",
  },
];
