module.exports.personaList = [{
    "nameToDisplay": "Management",
    "logo": "managementUserIcon"
},
//  {
//     "nameToDisplay": "Faculty",
//     "logo": "facultyUserIcon"
// },
 {
    "nameToDisplay": "Student",
    "logo": "studentUserIcon"
}, {
    "nameToDisplay": "Parent",
    "logo": "parentUserIcon"
    }]

module.exports.studentDetailList = [{
    "nameToDisplay": "Name :",
    "tableColumnName": "stu_name"
}, {
        "nameToDisplay": "Enrollment Number :",
        "tableColumnName": "Stu_EnrollmentNo"
}, {
        "nameToDisplay": "Branch :",
        "tableColumnName": "Bran_Desc"
}, {
        "nameToDisplay": "Year :",
        "tableColumnName": "Ayear_Desc"
    }, {
        "nameToDisplay": "Semester :",
        "tableColumnName": "curr_sem"
    }, {
        "nameToDisplay": "Attendance :",
        "tableColumnName": "total_attn"
    }, {
        "nameToDisplay": "CGPA :",
        "tableColumnName": "cgpa"
    }]
module.exports.studentDetailHeadder = [{
    "head": "Student Details",
    "logo": "studentUserIcon",
    "poornima":"poornimaIcon"
}];

module.exports.parentDetailList = [{
    "nameToDisplay": "Name :",
    "tableColumnName": "stu_name"
}, {
    "nameToDisplay": "Enrollment Number :",
    "tableColumnName": "Stu_EnrollmentNo"
}, {
    "nameToDisplay": "Branch :",
    "tableColumnName": "Bran_Desc"
}, {
    "nameToDisplay": "Year :",
    "tableColumnName": "Ayear_Desc"
}, {
    "nameToDisplay": "Semester :",
    "tableColumnName": "curr_sem"
}, {
    "nameToDisplay": "Attendance :",
    "tableColumnName": "total_attn"
}, {
    "nameToDisplay": "CGPA :",
    "tableColumnName": "cgpa"
    }, {
        "nameToDisplay": "Pending Fees :",
        "tableColumnName": "due"
    }]
module.exports.parentDetailHeadder = [{
    "head": "Student Details",
    "logo": "studentUserIcon",
    "poornima": "poornimaIcon"
}];

module.exports.studentAttendance = [{
    "nameToDisplay": "Subject Code",
    "tableColumnName": "Sub_Code",
    "symbol0": "",
    "symbol": "",
    "HoriAlign":"Left"
}, {
        "nameToDisplay": "Subject Name",
        "tableColumnName": "Sub_Desc",
        "symbol0": "",
        "symbol": "",
        "HoriAlign": "Left"
}, {
    "nameToDisplay": "Attendance",
        "tableColumnName": "Attendance",
        "symbol0": "",
        "symbol": "",
    "HoriAlign": "Center"
}, {
        "nameToDisplay": "Percentage",
        "tableColumnName": "PERC",
        "symbol0": "",
        "symbol": "%",
        "HoriAlign": "Center"
    }]
module.exports.studentAttendanceExtra = [{
    "head": "Attendance Detail",
    "head2": "Sem_Code",
    "aggregate": "",
    "aggregateTableColumnName": ""
}];

module.exports.studentCGPA = [{
    "nameToDisplay": "Subject Code",
    "tableColumnName": "Stmad_sub_code",
    "symbol0": "",
    "symbol": "",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Subject Name",
        "tableColumnName": "stmad_sub_name",
        "symbol0": "",
        "symbol": "",
        "HoriAlign": "Left"
}, {
    "nameToDisplay": "Grade",
        "tableColumnName": "Stmad_Marks",
        "symbol0": "",
        "symbol": "",
        "HoriAlign": "Center"
}, {
        "nameToDisplay": "Result",
        "tableColumnName": "stmad_status",
        "symbol0": "",
        "symbol": "",
        "HoriAlign": "Center"
}]
module.exports.studentCGPAExtra = [{
    "head": "Score Card",
    "head2": "Stmah_Sem_id",
    "aggregate": "Aggregate (SGPA)",
    "aggregateTableColumnName": "Stmah_SGPA"
}];

module.exports.studentFee = [{
    "nameToDisplay": "Fees Type",
    "tableColumnName": "Feehd_Desc",
    "symbol0": "",
    "symbol": "",
    "HoriAlign": "Left"
}, {
        "nameToDisplay": "Total Amount",
        "tableColumnName": "Stfamt_depamt",
        "symbol0": "₹",
    "symbol": "",
    "HoriAlign": "Right"
}, {
        "nameToDisplay": "Pending Amount",
        "tableColumnName": "due",
        "symbol0": "₹",
    "symbol": "",
    "HoriAlign": "Right"
}, {
        "nameToDisplay": "Last day of Payment",
        "tableColumnName": "Stfin_lastdate",
    "symbol0": "",
    "symbol": "",
    "HoriAlign": "Center"
    }, {
        "nameToDisplay": "Fine (After last date)",
        "tableColumnName": "fine",
        "symbol0": "",
        "symbol": "",
        "HoriAlign": "Center"
    }]
module.exports.studentFeeExtra = [{
    "head": "Fees Details",
    "head2": "curr_sem",
    "aggregate": "",
    "aggregateTableColumnName": ""
}];

module.exports.parentServiceList = ['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']
module.exports.managementServiceList = ['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']
module.exports.studentServiceList = ['Attendance Details', 'Marks Details', 'Switch Role']

module.exports.facultyServiceList = ['Class Detail', 'Leave Detail', 'Salary Detail', 'Apply For Leave', 'Switch Role']

