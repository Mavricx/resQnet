import Alert from "../models/alert.js"

export async function getAlert(req, res) {
    try {

        const { id } = req.params;
        const alert = await Alert.findById(id);//TODO: populate it later on

        if (!alert) {
            return res.status(404).json({
                success: false,
                message: "Alert Not Found"
            });
        }
        res.json({
            success: true,
            data: alert
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Alert"
        });
    }
}

export async function getAllAlerts(req,res){
    try{
        if(req.user){
            const nearbyAlerts=null;//TODO: find nearby alerts using geospatial query
            return res.json({
                success:true,
                data:nearbyAlerts,
                message:"Nearby Alerts fetched successfully"
            })
        }
         else {
            // Return all alerts if not authenticated (or handle as you wish)
            const allAlerts = await Alert.find({});
            return res.json({
                success: true,
                data: allAlerts,
                message: "All Alerts fetched successfully"
            });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Failed to fetch Nearby Alerts"
        })
    }
}

export async function createAlert(req,res){
    try{
        const newAlert=new Alert(req.body.newAlert);
        newAlert.creatorUserId=req.user._id;
        await newAlert.save();
        res.json({
            success:true,
            message:"Alert Created Successfully",
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Failed to create Alert"
        })
    }
}
//another route to update the alert with the people responding to it.