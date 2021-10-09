module.exports.schoolwise = [{
    "nameToDisplay": "School Name",
    "tableColumnName": "sch_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
    }]
module.exports.schoolwiseX = ['sch_id', '', '', '', '','','sch_desc']
module.exports.schoolwiseNext = ['coursewiseAvgAttendance', 'coursewiseX', 'coursewiseDisplayText', '0', '1','coursewiseNext']
module.exports.schoolwiseDisplayText = ['sch_desc', 'course']

module.exports.coursewiseAvgAttendance = [{
    "nameToDisplay": "Course Name",
    "tableColumnName": "Course_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.coursewiseX = ['sch_id', 'CourseId', '', '','','', 'Course_desc']
module.exports.coursewiseNext = ['branchwiseAvgAttendance', 'branchwiseX', 'branchwiseDisplayText', '0', '1','branchwiseNext']
module.exports.coursewiseDisplayText = ['Course_desc', 'branch']

module.exports.branchwiseAvgAttendance = [{
    "nameToDisplay": "Branch Name",
    "tableColumnName": "Bran_Desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.branchwiseX = ['sch_id', 'CourseId', 'Bran_Id', '','', '', 'Bran_Desc']
module.exports.branchwiseNext = ['yearwiseAvgAttendance', 'yearwiseX', 'yearwiseDisplayText', '0', '1', 'yearwiseNext']
module.exports.branchwiseDisplayText = ['Bran_Desc', 'year']

module.exports.yearwiseAvgAttendance = [{
    "nameToDisplay": "Year",
    "tableColumnName": "ayear_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.yearwiseX = ['sch_id', 'CourseId', 'Bran_Id', 'ayear_id','', '', 'ayear_desc']
module.exports.yearwiseNext = ['semesterwiseAvgAttendance', 'semesterwiseX', 'semesterwiseDisplayText', '0', '1', 'semesterwiseNext']
module.exports.yearwiseDisplayText = ['ayear_desc', 'semester']

module.exports.semesterwiseAvgAttendance = [{
    "nameToDisplay": "Semester",
    "tableColumnName": "Sem_Code",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.semesterwiseX = ['sch_id', 'CourseId', 'Bran_Id', 'ayear_id','Sem_Id',  '', 'Sem_Code']
module.exports.semesterwiseNext = ['studentwiseAvgAttendance', 'studentwiseX', 'studentwiseDisplayText', '1', '1', 'studentwiseNext']
module.exports.semesterwiseDisplayText = ['Sem_Code', 'studentwise']


module.exports.studentwiseAvgAttendance = [{
    "nameToDisplay": "Student Name",
    "tableColumnName": "stu_name",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Attendance",
        "tableColumnName": "attendance",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.studentwiseX = ['sch_id', 'CourseId', 'Bran_Id','', 'Sem_Id', 'Stu_Id','stu_name']
module.exports.studentwiseNext = ['headwiseAvgAttendance', 'headwiseX', 'headwiseDisplayText', '0', '0', 'headwiseNext']
module.exports.studentwiseDisplayText = ['stu_name', 'headwise']

module.exports.headwiseAvgAttendance = [{
    "nameToDisplay": "Subject Code",
    "tableColumnName": "Sub_Code",
    "symbol0": "",
    "symbol": "",
    "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Subject Name",
        "tableColumnName": "Sub_Desc",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Attendance",
        "tableColumnName": "attendance",
        "symbol0": "",
        "symbol": "",
        "Size": "Default",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Percentage",
        "tableColumnName": "attendance_percentage",
        "symbol0": "",
        "symbol": "%",
        "Size": "Default",
    "HoriAlign": "Center"
}]
module.exports.headwiseX = []
module.exports.headwiseNext = ['', '', '', '', '', '', '']
module.exports.headwiseDisplayText = ['', '']

module.exports.extra = [{
    "head": "Attendance Detail",
    "aggregate": "",
    "aggregateTableColumnName": ""
}];