Module.exports = (seqelize, DataTypes) => {
    const tour = seqelize.define("tour", {
        name: DataTypes.STRING,

    },
    {
        timestamps: true
    }
);
tour.associate = (models) => {
    tour.hasMany(models.tourItem, {
        foreignKey: "tourId"
    })
}
return tour;
}