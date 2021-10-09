module.exports.schoolwise = [{
    "nameToDisplay": "School Name",
    "tableColumnName": "sch_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Fee",
        "tableColumnName": "total_fees",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
}, {
        "nameToDisplay": "Deposited Fee",
        "tableColumnName": "dep",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
    }, {
        "nameToDisplay": "Pending Fee",
        "tableColumnName": "due",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
        "HoriAlign": "Right"
    }]
module.exports.schoolwiseX = ['sch_id', '', '', '', '', '', 'sch_desc']
module.exports.schoolwiseNext = ['coursewiseFee', 'coursewiseX', 'coursewiseDisplayText', '0', '1', 'coursewiseNext']
module.exports.schoolwiseDisplayText = ['sch_desc', 'course']

module.exports.coursewiseFee = [{
    "nameToDisplay": "Course Name",
    "tableColumnName": "Course_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Fee",
        "tableColumnName": "total_fees",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Deposited Fee",
    "tableColumnName": "dep",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
    }, {
        "nameToDisplay": "Pending Fee",
        "tableColumnName": "due",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
        "HoriAlign": "Right"
    }]
module.exports.coursewiseX = ['sch_id', 'CourseId', '', '', '', '', 'Course_desc']
module.exports.coursewiseNext = ['branchwiseFee', 'branchwiseX', 'branchwiseDisplayText', '0', '1', 'branchwiseNext']
module.exports.coursewiseDisplayText = ['Course_desc', 'session']

module.exports.branchwiseFee = [{
    "nameToDisplay": "Session Name",
    "tableColumnName": "Course_desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Fee",
        "tableColumnName": "total_fees",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Deposited Fee",
    "tableColumnName": "dep",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
    "HoriAlign": "Right"
    }, {
        "nameToDisplay": "Pending Fee",
        "tableColumnName": "due",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
        "HoriAlign": "Right"
    }]
module.exports.branchwiseX = ['sch_id', 'CourseId', 'Bran_Id', '', '', '', 'Course_desc']
module.exports.branchwiseNext = ['yearwiseFee', 'yearwiseX', 'yearwiseDisplayText', '0', '1', 'yearwiseNext']
module.exports.branchwiseDisplayText = ['Course_desc', 'year']

module.exports.yearwiseFee = [{
    "nameToDisplay": "Year Name",
    "tableColumnName": "ayear_desc",
    "symbol0": "", 
    "Size": "Small",
    "symbol": "",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Fee",
    "tableColumnName": "total_fees",
        "symbol0": "₹",
        "Size": "Small",
    "symbol": "",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Deposited Fee",
    "tableColumnName": "dep",
        "symbol0": "₹",
        "Size": "Small",
    "symbol": "",
    "HoriAlign": "Right"
    }, {
        "nameToDisplay": "Pending Fee",
        "tableColumnName": "due",
        "symbol0": "₹",
        "symbol": "",
        "Size": "Small",
        "HoriAlign": "Right"
    }]
module.exports.yearwiseX = ['sch_id', 'CourseId', 'Bran_Id', 'ayear_id', '', '', 'ayear_desc']
module.exports.yearwiseNext = ['studentwiseFee', 'studentwiseX', 'studentwiseDisplayText', '1', '1', 'studentwiseNext']
module.exports.yearwiseDisplayText = ['ayear_desc', 'studentwise']

module.exports.studentwiseFee = [{
    "nameToDisplay": "Student Name",
    "tableColumnName": "stu_name",
    "symbol0": "",
    "Size": "Small",
    "symbol": "",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Fee",
    "tableColumnName": "total_fees",
    "symbol0": "₹",
    "Size": "Small",
    "symbol": "",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Deposited Fee",
    "tableColumnName": "dep",
    "symbol0": "₹",
    "Size": "Small",
    "symbol": "",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Pending Fee",
    "tableColumnName": "due",
    "symbol0": "₹",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Right"
}]
module.exports.studentwiseX = ['sch_id', 'CourseId', 'Bran_Id', '','Stu_Id', 'Stu_Current_Ses_Id', 'stu_name']
module.exports.studentwiseNext = ['headwiseFee', 'headwiseX', 'headwiseDisplayText', '0', '0', 'headwiseNext']
module.exports.studentwiseDisplayText = ['stu_name', 'headwise']

module.exports.headwiseFee = [{
    "nameToDisplay": "Fees Type",
    "tableColumnName": "Feehd_Desc",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Left"
}, {
    "nameToDisplay": "Total Amount",
    "tableColumnName": "Stfamt_depamt",
    "symbol0": "₹",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Pending Amount",
    "tableColumnName": "due",
    "symbol0": "₹",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Right"
}, {
    "nameToDisplay": "Last day of Payment",
    "tableColumnName": "Stfin_lastdate",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Center"
}, {
    "nameToDisplay": "Fine (After last date)",
    "tableColumnName": "fine",
    "symbol0": "",
    "symbol": "",
    "Size": "Small",
    "HoriAlign": "Center"
}]
module.exports.headwiseX = []
module.exports.headwiseNext = ['', '', '', '', '', '']
module.exports.headwiseDisplayText = ['', '']

module.exports.extra = [{
    "head": "Fees Details",
    "aggregate": "",
    "aggregateTableColumnName": ""
}];
