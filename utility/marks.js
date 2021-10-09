module.exports.schoolwise = [{
    "nameToDisplay": "School Name",
    "tableColumnName": "sch_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
        "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "avgSGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.schoolwiseX = ['sch_id','', '', '', '', '', 'sch_desc']
module.exports.schoolwiseNext = ['coursewiseAvgMarks', 'coursewiseX', 'coursewiseDisplayText', '0', '1', 'coursewiseNext']
module.exports.schoolwiseDisplayText = ['sch_desc', 'course']

module.exports.coursewiseAvgMarks = [{
    "nameToDisplay": "Course Name",
    "tableColumnName": "Course_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "avgSGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.coursewiseX = ['sch_id', 'CourseId', '', '', '', '', 'Course_desc']
module.exports.coursewiseNext = ['branchwiseAvgMarks', 'branchwiseX', 'branchwiseDisplayText', '0', '1', 'branchwiseNext']
module.exports.coursewiseDisplayText = ['Course_desc', 'branch']

module.exports.branchwiseAvgMarks = [{
    "nameToDisplay": "Branch Name",
    "tableColumnName": "Bran_Desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "avgSGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.branchwiseX = ['sch_id', 'CourseId', 'Bran_Id', '', '', '', 'Bran_Desc']
module.exports.branchwiseNext = ['yearwiseAvgMarks', 'yearwiseX', 'yearwiseDisplayText', '0', '1', 'yearwiseNext']
module.exports.branchwiseDisplayText = ['Bran_Desc', 'year']

module.exports.yearwiseAvgMarks = [{
    "nameToDisplay": "Year",
    "tableColumnName": "ayear_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "avgSGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.yearwiseX = ['sch_id', 'CourseId', 'Stmah_Bran_id', 'ayear_id', '', '', 'ayear_desc']
module.exports.yearwiseNext = ['semesterwiseAvgMarks', 'semesterwiseX', 'semesterwiseDisplayText', '0', '1', 'semesterwiseNext']
module.exports.yearwiseDisplayText = ['ayear_desc', 'semester']

module.exports.semesterwiseAvgMarks = [{
    "nameToDisplay": "Semester",
    "tableColumnName": "Sem_Code",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Students",
        "tableColumnName": "totalStudents",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "avgSGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.semesterwiseX = ['sch_id', 'CourseId', 'Stmah_Bran_id', 'ayear_id', 'Sem_Id', '','Sem_Code']
module.exports.semesterwiseNext = ['studentwiseAvgMarks', 'studentwiseX', 'studentwiseDisplayText', '1', '1', 'studentwiseNext']
module.exports.semesterwiseDisplayText = ['Sem_Code', 'studentwise']

module.exports.studentwiseAvgMarks = [{
    "nameToDisplay": "Students Name",
    "tableColumnName": "stu_name",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Avg. SGPA",
        "tableColumnName": "Stmah_SGPA",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.studentwiseX = ['', '', '', '', 'Sem_Id', 'Stmah_Stu_id', 'stu_name']
module.exports.studentwiseNext = ['headwiseAvgMarks', 'headwiseX', 'headwiseDisplayText', '0', '0', 'headwiseNext']
module.exports.studentwiseDisplayText = ['stu_name', 'headwise']

module.exports.headwiseAvgMarks = [{
    "nameToDisplay": "Subject Code",
    "tableColumnName": "Stmad_sub_code",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
        "nameToDisplay": "Subject Name",
        "tableColumnName": "stmad_sub_name",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Left"
}, {
        "nameToDisplay": "Grade",
        "tableColumnName": "Stmad_Marks",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}, {
        "nameToDisplay": "Result",
        "tableColumnName": "stmad_status",
        "symbol0": "",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.headwiseX = []
module.exports.headwiseNext = ['', '', '', '', '', '']
module.exports.headwiseDisplayText = ['', '']

module.exports.extra = [{
    "head": "Score Card",
    "aggregate": "",
    "aggregateTableColumnName": ""
}];

module.exports.extraTrue = [{
    "head": "Score Card",
    "aggregate": "Aggregate (SGPA)",
    "aggregateTableColumnName": "Stmah_SGPA"
}];